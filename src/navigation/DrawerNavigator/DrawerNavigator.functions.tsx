export const sliceDrawerFromScreenName = (title: string): string => {
  if (!title.includes('Drawer')) {
    return title;
  } else {
    return title.slice(0, title.indexOf('Drawer'));
  }
};
