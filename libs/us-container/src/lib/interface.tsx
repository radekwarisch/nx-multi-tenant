import * as R from 'ramda';
import {
  getWorldContainer,
} from '@nx-ioc/world-container';
import {BindingsIdentifiers,} from '@nx-ioc/di-bindings';
import { useState } from 'react';

const withTopSlot = (MyModule: any) => (props: any) => (
  <MyModule {...props} topSlot={<div>- dedicated for US</div>} />
);

export const useWithCustomLogic1 = (opts: any) => {
  const [label] = useState('us state label');

  return {
    ...opts,
    label
  }
}

export const extendToUsContainer = (container: any) => {
  const WorldRoutes = container.get(BindingsIdentifiers.ADDITONAL_ROUTES);
  const WorldMyModule = container.get(BindingsIdentifiers.MY_MODULE);
  const MyCmpComposites: Array<any> = container.get(BindingsIdentifiers.MY_CMP_COMPOSITES);

  /**
   * @description
   * Replace first logic part
   */
  const [, useWithLogic2, MyCmpRender] = MyCmpComposites;

  container.unbind(BindingsIdentifiers.ADDITONAL_ROUTES);
  container
    .bind(BindingsIdentifiers.ADDITONAL_ROUTES)
    .toConstantValue({ ...WorldRoutes, privacy: <div>Us-dedicated route</div> });

  container.unbind(BindingsIdentifiers.MY_MODULE);
  container
    .bind(BindingsIdentifiers.MY_MODULE)
    .toConstantValue(withTopSlot(WorldMyModule));

  container.unbind(BindingsIdentifiers.MY_CMP_COMPOSITES);
  container.bind(BindingsIdentifiers.MY_CMP_COMPOSITES).toConstantValue([useWithCustomLogic1, useWithLogic2, MyCmpRender]);

  return container;
};

export const getUsContainer = R.pipe(
  getWorldContainer,
  extendToUsContainer
);
