import * as R from 'ramda';
import { AdditionalRoutes } from './additional-routes';
import MyModule from './my-module';
import { createContainer, InjectionProvider } from '@nx-ioc/ioc';

/**
 * @description
 * Provides unique keys
 */

export const WorldIdentifiers = {
  ADDITONAL_ROUTES: Symbol.for('ADDITONAL_ROUTES'),
  MY_MODULE: Symbol.for('MY_MODULE'),
};

/**
 * @description
 * Provides base values to overwrite
 */

export const extendToWorldContainer = (container: any) => {
  container
    .bind(WorldIdentifiers.ADDITONAL_ROUTES)
    .toConstantValue(AdditionalRoutes);
  container.bind(WorldIdentifiers.MY_MODULE).toConstantValue(MyModule);

  return container;
};

const getWorldContainer = R.pipe(createContainer, extendToWorldContainer);

export const WorldContainerProvider = ({ children }: any) => {
  const container = getWorldContainer();

  return (
    <InjectionProvider container={container}>{children}</InjectionProvider>
  );
};
