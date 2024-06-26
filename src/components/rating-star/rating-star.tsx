import {ChangeEvent} from 'react';

type RatingStarProps = {
  value: number;
  defaultChecked? : boolean;
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function RatingStar({value, defaultChecked, onChange}: RatingStarProps) {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${value}`}
        type="radio"
        name="rating"
        onChange={onChange}
        defaultValue={Number(value)}
        defaultChecked={defaultChecked}
      />
      <label
        className="rating__label"
        htmlFor={`star-${value}`}
      >
        {`Rating ${value}`}
      </label>
    </>
  );
}
