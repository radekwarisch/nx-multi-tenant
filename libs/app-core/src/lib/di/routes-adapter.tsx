import * as R from 'ramda';
import { useInjection } from '@nx-ioc/di-common';
import { BindingsIdentifiers } from '@nx-ioc/di-bindings';
import Link from 'next/link';

const HomeRoute = () => {
  const MyModule: any = useInjection(BindingsIdentifiers.MY_MODULE);
  const MyCmpComposites: Array<any> = useInjection(BindingsIdentifiers.MY_CMP_COMPOSITES);

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
  const AdditionalRoutes: any = useInjection(BindingsIdentifiers.ADDITONAL_ROUTES);

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
