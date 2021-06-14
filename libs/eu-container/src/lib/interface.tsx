import * as R from 'ramda';
import {
  extendToWorldContainer,
  WorldIdentifiers,
} from '@nx-ioc/world-container';
import { createContainer, InjectionProvider } from '@nx-ioc/ioc';
import { useState } from 'react';

const withTopSlot = (MyModule: any) => (props: any) => (
  <MyModule {...props} topSlot={<div>- dedicated for EU</div>} />
);

export const useWithCustomLogic1 = (opts: any) => {
  const [label] = useState('eu state label');

  return {
    ...opts,
    label
  }
}

export const extendToEuContainer = (container: any) => {
  const WorldRoutes = container.get(WorldIdentifiers.ADDITONAL_ROUTES);
  const WorldMyModule = container.get(WorldIdentifiers.MY_MODULE);
  const MyCmpComposites: Array<any> = container.get(WorldIdentifiers.MY_CMP_COMPOSITES);

  /**
   * @description
   * Replace first logic part
   */
  const [, useWithLogic2, MyCmpRender] = MyCmpComposites;

  container.unbind(WorldIdentifiers.ADDITONAL_ROUTES);
  container
    .bind(WorldIdentifiers.ADDITONAL_ROUTES)
    .toConstantValue({ ...WorldRoutes, privacy: <div>Eu-dedicated route</div> });

  container.unbind(WorldIdentifiers.MY_MODULE);
  container
    .bind(WorldIdentifiers.MY_MODULE)
    .toConstantValue(withTopSlot(WorldMyModule));

  container.unbind(WorldIdentifiers.MY_CMP_COMPOSITES);
  container.bind(WorldIdentifiers.MY_CMP_COMPOSITES).toConstantValue([useWithCustomLogic1, useWithLogic2, MyCmpRender]);

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
