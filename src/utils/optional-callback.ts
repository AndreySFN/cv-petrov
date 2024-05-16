export const optionalCallback = (callback?: Function, isCallback?: boolean | Function, ...args: Array<unknown>) => {
  return () => (callback && isCallback ? callback(args) : void 0);
};
