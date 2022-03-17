import './PageNotFound.css'
import { Link, useHistory } from 'react-router-dom';
function PageNotFound() {
  const history = useHistory()
  return (
    <main className="pagenotfound">
      <div className="pagenotfound__fake"></div>
      <div className="pagenotfound__block-info">
        <h2 className="pagenotfound__title">404</h2>
        <p className="pagenotfound__text-info">Страница не найдена</p>
      </div>
      <Link onClick={() => history.goBack()} className='pagenotfound__back'>Назад</Link>
    </main>
  );
}

export default PageNotFound;
