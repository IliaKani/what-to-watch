import {Link} from 'react-router-dom';
import './styles.css';

export default function PageNotFound() {
  return (
    <div className="page-not-found container">
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
