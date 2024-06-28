const h = 'h';
const m = 'm';
const reference = 60;

export const formatRunTime = (runTime: number): string => {
  const hours = Math.floor(runTime / reference);
  const minutes = runTime % reference;
  return `${hours}${h} ${minutes}${m}`;
};
