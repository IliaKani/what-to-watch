import {MouseEvent} from 'react';
type GenreProps = {
  name: string;
  isActive: boolean;
  onClick: (name: string) => void;
}

export default function Genre({name, isActive, onClick}: GenreProps) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick(name);
  };
  return (
    <li className={`catalog__genres-item${isActive ? ' catalog__genres-item--active' : ''}`}>
      <a href="#" className="catalog__genres-link" onClick={handleClick}>{name}</a>
    </li>
  );
}
