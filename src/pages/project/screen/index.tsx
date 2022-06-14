import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useScreen } from "../../../hooks/useScreen";

type CursorStateProxy = { cursor: "auto" | "grab" | "grabbing" };

const Screen = () => {
  const { projectId, screenId } = useParams() as {
    projectId: string;
    screenId: string;
  };
  const { data, isLoading, isSuccess, status } = useScreen(projectId, screenId);
  const [zoom, setZoom] = useState(50);
  const planeRef = useRef<HTMLDivElement>(null);
  const rollerRef = useRef<HTMLDivElement>(null);
  let pos = { top: 0, left: 0, x: 0, y: 0 };
  let stateProxy: CursorStateProxy = new Proxy(
    {
      cursor: "auto",
    },
    {
      set: (target, key, value) => {
        rollerRef.current!.style.cursor = value;
        return Reflect.set(target, key, value);
      },
    }
  );

  const zoomIn = () => {
    setZoom((prev) => {
      if (prev === 200) return prev;
      return prev + 25;
    });
  };

  const zoomOut = () => {
    setZoom((prev) => {
      if (prev === 25) return prev;
      return prev - 25;
    });
  };

  useEffect(() => {
    if (!planeRef.current) return;
    if (!rollerRef.current) return;

    const handleWheel = (ev: WheelEvent) => {
      if (ev.ctrlKey) {
        ev.preventDefault();
        if (ev.deltaY > 0) {
          zoomOut();
        } else {
          zoomIn();
        }
      }
    };
    planeRef.current.addEventListener("wheel", handleWheel);

    return () => {
      planeRef.current?.removeEventListener("wheel", handleWheel);
    };
  }, [status]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === " ") {
      e.preventDefault();
      if (stateProxy.cursor !== "grabbing") {
        stateProxy.cursor = "grab";
      }
    }
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.key === " ") {
      stateProxy.cursor = "auto";
    }
  };

  useEffect(() => {
    if (!rollerRef.current) return;

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [status]);

  useEffect(() => {
    if (!rollerRef.current) return;

    const mouseDownHandler = (e: MouseEvent) => {
      if (stateProxy.cursor === "grab") {
        stateProxy.cursor = "grabbing";
      }

      pos = {
        left: rollerRef.current!.scrollLeft,
        top: rollerRef.current!.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      rollerRef.current!.addEventListener("mousemove", mouseMoveHandler);
      rollerRef.current!.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = (e: MouseEvent) => {
      if (stateProxy.cursor === "auto") return;
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      rollerRef.current!.scrollTop = pos.top - dy;
      rollerRef.current!.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = () => {
      stateProxy.cursor = "auto";

      rollerRef.current!.removeEventListener("mousemove", mouseMoveHandler);
      rollerRef.current!.removeEventListener("mouseup", mouseUpHandler);
    };

    rollerRef.current.addEventListener("mousedown", mouseDownHandler);
  }, [status]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isSuccess) {
    return <div>Error...</div>;
  }

  return (
    <main
      ref={planeRef}
      style={{ height: `calc(100vh - 52px)`, touchAction: "none" }}
      className="overflow-hidden"
    >
      <div
        className="w-full h-full p-8 overflow-auto"
        ref={rollerRef}
        style={{ cursor: stateProxy.cursor }}
      >
        <div
          className="relative m-auto"
          style={{ width: (zoom / 100) * data.width }}
        >
          <img
            draggable={false}
            className="border-[1px] border-black select-none m-auto"
            src={data.thumbnails.large}
            width={data.width}
            height={data.height}
            style={{ width: (zoom / 100) * data.width }}
          />
          <div className="absolute top-0 left-0 w-full h-full">
            {data.layers.map((layer) => (
              <div
                key={layer.id}
                onClick={() => {
                  if (layer.exportable) {
                    console.log(layer.source_id);
                  }
                }}
                className="absolute hover:bg-amber-400/25"
                style={{
                  width: `${(layer.rect.width / data.width) * 100}%`,
                  height: `${(layer.rect.height / data.height) * 100}%`,
                  top: `${(layer.rect.y / data.height) * 100}%`,
                  left: `${(layer.rect.x / data.width) * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute p-4 z-10 bottom-4 left-0">
        <div className="flex gap-6 ml-12">
          <button onClick={zoomOut}>-</button>
          <div>{zoom}</div>
          <button onClick={zoomIn}>+</button>
        </div>
      </div>
    </main>
  );
};

export default Screen;
