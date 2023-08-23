export default () => async (req, res, next) => {
  const renderer = (await import("./routeRenderers/default")).default;
  return renderer(req, res, next);
};
