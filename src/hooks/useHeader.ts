import create from "zustand";

interface HeaderState {
  title: string;
  previosPage?: {
    title: string;
    url: string;
  };
  setHeaderTitle: (newTitle: string) => void;
  setPreviousPage: (prevPage?: { title: string; url: string }) => void;
}

export const useHeader = create<HeaderState>((set) => ({
  title: "",
  setHeaderTitle: (newTitle: string) =>
    set((state) => ({
      ...state,
      title: newTitle,
    })),
  setPreviousPage: (prevPage?: { title: string; url: string }) =>
    set((state) => ({
      ...state,
      previosPage: prevPage,
    })),
}));
