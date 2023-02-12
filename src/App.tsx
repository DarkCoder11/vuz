import {
  Route,
  Navigate,
  Routes as RouterRoutes,
  BrowserRouter as RouterProvider,
} from 'react-router-dom';

import {HelmetLayout} from '~/components';
import {AppRoute, Routes} from '~/constants';

const App: React.FC = () => {
  const renderRoutes = Routes.map(({path, Component, metaSettings}) => {
    return (
      <Route
        key={path}
        path={path}
        element={
          <HelmetLayout
            title={metaSettings.title}
            metaDescription={metaSettings.description}>
            <Component />
          </HelmetLayout>
        }
      />
    );
  });

  return (
    <RouterProvider>
      <RouterRoutes>
        {renderRoutes}

        <Route
          path={AppRoute.NoMatch}
          element={<Navigate to={AppRoute.Home} replace />}
        />
      </RouterRoutes>
    </RouterProvider>
  );
};

export default App;
