import * as R from 'ramda';
import {
  extendToWorldContainer,
  WorldIdentifiers,
} from '@nx-ioc/world-container';
import { createContainer, InjectionProvider } from '@nx-ioc/ioc';

const withTopSlot = (MyModule: any) => (props: any) => (
  <MyModule {...props} topSlot={<div>- dedicated for EU</div>} />
);

export const extendToEuContainer = (container: any) => {
  const WorldRoutes = container.get(WorldIdentifiers.ADDITONAL_ROUTES);
  const WorldMyModule = container.get(WorldIdentifiers.MY_MODULE);

  container.unbind(WorldIdentifiers.ADDITONAL_ROUTES);
  container
    .bind(WorldIdentifiers.ADDITONAL_ROUTES)
    .toConstantValue({ ...WorldRoutes, privacy: <div>Eu-dedicated route</div> });

  container.unbind(WorldIdentifiers.MY_MODULE);
  container
    .bind(WorldIdentifiers.MY_MODULE)
    .toConstantValue(withTopSlot(WorldMyModule));

  return container;
};

const getEuContainer = R.pipe(
  createContainer,
  extendToWorldContainer,
  extendToEuContainer
);

export const EuContainerProvider = ({ children }: any) => {
  const container = getEuContainer();

  return (
    <InjectionProvider container={container}>{children}</InjectionProvider>
  );
};
