import * as R from 'ramda';
import {BindingsIdentifiers} from '@nx-ioc/di-bindings';
import { getEuContainer } from '@nx-ioc/eu-container';
import { Container } from 'inversify';

const withBottomSlot = (MyModule: any) => (props: any) => <MyModule {...props} bottomSlot={<div>- dedicated for PL</div>} />

export const extendToPlContainer = (container: any) => {
  // keep old container as parent

  const newContainer = new Container();

  newContainer.parent = container;

  const EuRoutes = container.get(BindingsIdentifiers.ADDITONAL_ROUTES);
  const EuMyModule = container.get(BindingsIdentifiers.MY_MODULE);

  container.unbind(BindingsIdentifiers.ADDITONAL_ROUTES);
  container.bind(BindingsIdentifiers.ADDITONAL_ROUTES).toConstantValue(
    {...EuRoutes, 'pl-privacy': <div>Pl-dedicated route</div>}
  );

  container.unbind(BindingsIdentifiers.MY_MODULE);
  container.bind(BindingsIdentifiers.MY_MODULE).toConstantValue(withBottomSlot(EuMyModule));

  return container;
};

// consider exposing container vs exposing function
// function could be better testable

export const getPlContainer = R.pipe(
  getEuContainer,
  extendToPlContainer
);
