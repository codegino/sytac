// We can use different breaking points here
const bp: {[index: string]: number} = {
  // This is just based on Figma,
  // if it is smaller than Iphone 13 390x844
  // it is considered as extra small device.
  // Depending on what the users want, we can have more accurate breakpoints.
  xs: 389,
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const mq = (n: 'xs' | 'sm' | 'md' | 'lg' | 'xl'): string | number => {
  const bpArray = Object.keys(bp).map(key => [key, bp[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
