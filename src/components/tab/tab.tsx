type TabProp = {
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}

export default function Tab({value, isActive, onClick}: TabProp) {
  return (
    <li
      className={`film-nav__item${isActive ? ' film-nav__item--active' : ''}`}
      onClick={() => onClick(value)}
    >
      <a className="film-nav__link">{value}</a>
    </li>
  );
}
