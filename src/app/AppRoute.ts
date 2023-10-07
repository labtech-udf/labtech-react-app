import { Routes, Route } from 'react-router-dom';
import { RouteMap } from './RouterMap';

const YourComponent: React.FC = () => (
  <Routes>
    {Object.entries(RouteMap).map(([key, value]) => {
      const { Page, exact, path } = value;
      return <Route path={path} exact={exact} key={key} element={<Page />} />;
    })}
  </Routes>
);

export default YourComponent;