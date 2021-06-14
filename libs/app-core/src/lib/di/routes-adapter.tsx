import * as R from 'ramda';
import { useInjection } from '@nx-ioc/ioc';
import { WorldIdentifiers } from '@nx-ioc/world-container';
import Link from 'next/link';
import { useWithLogic1, MyCmpRender } from '../../../../world-container/src/lib/my-cmp';

const HomeRoute = () => {
  const MyModule: any = useInjection(WorldIdentifiers.MY_MODULE);
  const MyCmpComposites: Array<any> = useInjection(WorldIdentifiers.MY_CMP_COMPOSITES);

  const [useWithLogic1, useWithLogic2, MyCmpRender] = MyCmpComposites;

  const MyCmp: any = R.pipe(useWithLogic1, useWithLogic2, MyCmpRender);

  return (<><MyCmp propsLabel={'original props label'} /><MyModule /></>);
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
