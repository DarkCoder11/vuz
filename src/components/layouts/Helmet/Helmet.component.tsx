import {Helmet} from 'react-helmet';

import {FCC} from '~/types';

import {THelmetLayoutProps} from './Helmet.types';

const HelmetLayout: FCC<THelmetLayoutProps> = ({
  title,
  children,
  metaDescription,
}) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    {children}
  </>
);

export default HelmetLayout;
