import { RiseLoader } from 'react-spinners';
import './loader.css';

export function Loader() {
  return (
    <div className="user-page">
      <span className="loader">
        <RiseLoader
          color="#f8cb44"
          loading
          margin={10}
          size={20}
          speedMultiplier={1}
        />
      </span>
    </div>
  );
}
