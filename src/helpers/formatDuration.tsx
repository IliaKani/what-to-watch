export const formatDuration = (
  sec: number,
  durationProp: number[],
  currentTimeProp: number[]
) => {

  const hourTemplate = () => (
    <>
      {durationProp[0] - currentTimeProp[0] < 10 && 0}
      {durationProp[0] - currentTimeProp[0]}
    </>
  );

  const minTemplate = () => (
    <>
      {durationProp[1] - currentTimeProp[1] < 10 && 0}
      {durationProp[1] - currentTimeProp[1]}
    </>
  );

  const secTemplate = () => (
    <>
      {durationProp[2] - currentTimeProp[2] < 10 && 0}
      {durationProp[2] - currentTimeProp[2]}
    </>
  );

  if (sec > 3600) {
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
