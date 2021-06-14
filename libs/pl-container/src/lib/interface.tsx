import * as R from 'ramda';
import {
  extendToWorldContainer,
  WorldIdentifiers,
} from '@nx-ioc/world-container';
import {extendToEuContainer} from '@nx-ioc/eu-container'
import { createContainer, InjectionProvider } from '@nx-ioc/ioc';

const withBottomSlot = (MyModule: any) => (props: any) => <MyModule {...props} bottomSlot={<div>- dedicated for PL</div>} />

export const extendToPlContainer = (container: any) => {
  const EuRoutes = container.get(WorldIdentifiers.ADDITONAL_ROUTES);
  const EuMyModule = container.get(WorldIdentifiers.MY_MODULE);

  container.unbind(WorldIdentifiers.ADDITONAL_ROUTES);
  container.bind(WorldIdentifiers.ADDITONAL_ROUTES).toConstantValue(
    {...EuRoutes, 'pl-privacy': <div>Pl-dedicated route</div>}
  );

  container.unbind(WorldIdentifiers.MY_MODULE);
  container.bind(WorldIdentifiers.MY_MODULE).toConstantValue(withBottomSlot(EuMyModule));

  return container;
};

const getPlContainer = R.pipe(
  createContainer,
  extendToWorldContainer,
  extendToEuContainer,
  extendToPlContainer
);

export const PlContainerProvider = ({ children }: any) => {
  const container = getPlContainer();

  return (
    <InjectionProvider container={container}>{children}</InjectionProvider>
  );
};
