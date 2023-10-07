import { Routes, Route } from 'react-router-dom';
import { RouteMap } from './RouterMap';

const AppRoute: React.FC = (): React.ReactElement => (
  <Routes>
    {Object.entries(RouteMap).map(([key, value]) => {
      const { Page, path } = value;
      return <Route path={path} key={key} element={<Page />} />;
    })}
  </Routes>
);

export default AppRoute;