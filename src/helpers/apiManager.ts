let accessToken: null | string = null;

const getAccessTokenFromLocalStorage = () => {
  if (!accessToken) {
    accessToken = localStorage.getItem("accessToken");
  }

  return accessToken;
};

window.fetch = new Proxy(window.fetch, {
  apply: (target, thisArg, argumentsList) => {
    let [url, options] = argumentsList;

    const token = getAccessTokenFromLocalStorage();
    if (accessToken) {
      if (options) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token}`,
        };
      } else {
        options = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      }
    }
    return target.apply(thisArg, [url, options]);
  },
});

export {};
