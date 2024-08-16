import {Link} from 'react-router-dom';
import './styles.css';
import HelmetComponent from '../../components/helmet-component/helmet-component';

export default function PageNotFound() {
  return (
    <div className="page-not-found container">
      <HelmetComponent title='wtw: 404 Not Found' description='wtw: 404 Not Found'/>
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
}
