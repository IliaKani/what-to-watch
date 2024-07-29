type TimeFormat = {
  hour: number;
  min: number;
  sec: number;
}

export const sec2Min = (sec: number): TimeFormat => {
  const hour = Math.floor(sec / 3600);
  const min = Math.floor(sec / 60);
  const secRemain = Math.floor(sec % 60);
  return {
    hour: hour,
    min: min,
    sec: secRemain,
  };
};
