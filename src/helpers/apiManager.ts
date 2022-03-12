const baseConfig = {
  headers: {
    Authorization: `Bearer ${""}`,
  },
};

export const apiManager = (endpoint: string, config?: any) => {
  return fetch(endpoint, {
    ...baseConfig,
    ...config,
  });
};
