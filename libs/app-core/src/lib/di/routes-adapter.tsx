import { useInjection } from '@nx-ioc/ioc';
import { WorldIdentifiers } from '@nx-ioc/world-container';
import Link from 'next/link';

const HomeRoute = () => {
  const MyModule: any = useInjection(WorldIdentifiers.MY_MODULE);

  return <MyModule />;
};

const BASE_ROUTES = {
  '': <HomeRoute />,
  home: <HomeRoute />,
};

/**
 * @description
 * Adapter for injected route
 * Naming for is not yet standardised - it should be addressed
 */
export const RoutesAdapter = ({ route }: any) => {
  const AdditionalRoutes: any = useInjection(WorldIdentifiers.ADDITONAL_ROUTES);

  const AllRoutes: any = {
    ...BASE_ROUTES,
    ...AdditionalRoutes,
  };

  return (
    <>
      <ul>
        {Object.keys(AllRoutes).map((route) => (
          <li key={route}>
            <Link href={`/${route}`}>
              <a>{route ? route : 'default'}</a>
            </Link>
          </li>
        ))}
      </ul>
      {AllRoutes[route] ? AllRoutes[route] : <h1>Unknown route: {route}</h1>}
    </>
  );
};
