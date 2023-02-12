import {HomeContainer} from '~/containers';

import {DefaultMetaSettings} from '../metaVars';

import {AppRoute} from './routes.types';

const Routes = [
  {
    path: AppRoute.Home,
    Component: HomeContainer,
    metaSettings: DefaultMetaSettings,
  },
] as const;

export default Routes;
