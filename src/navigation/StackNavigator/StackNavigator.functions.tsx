export const sliceStackFromScreenName = (title: string) => {
  if (title.includes('Stack')) {
    return title.slice(0, title.indexOf('Stack'));
  }
};
