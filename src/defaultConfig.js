const defaultConfig = {
  inlineResource: tag => {
    void tag;
    return true;
  },
  fetch: {
    baseURL: void 0,
    httpAgent: void 0,
  },
  onSuccess: (type, el) => console.log({ type, el }),
  onBailout: (err, type, el) => console.error({ err, type, el }),
};

export default defaultConfig;
