import {MIN_TIME_LIMIT, SECONDS_IN_HOUR} from '../const';

export const formatDuration = (
  sec: number,
  durationProp: number[],
  currentTimeProp: number[]
) => {

  const hourTemplate = () => (
    <>
      {durationProp[0] - currentTimeProp[0] < MIN_TIME_LIMIT && 0}
      {durationProp[0] - currentTimeProp[0]}
    </>
  );

  const minTemplate = () => (
    <>
      {durationProp[1] - currentTimeProp[1] < MIN_TIME_LIMIT && 0}
      {durationProp[1] - currentTimeProp[1]}
    </>
  );

  const secTemplate = () => (
    <>
      {durationProp[2] - currentTimeProp[2] < MIN_TIME_LIMIT && 0}
      {durationProp[2] - currentTimeProp[2]}
    </>
  );

  if (sec > SECONDS_IN_HOUR) {
    return (
      <>
        {hourTemplate()}:
        {minTemplate()}:
        {secTemplate()}
      </>
    );
  } else {
    return (
      <>
        {minTemplate()}:
        {secTemplate()}
      </>
    );
  }
};
