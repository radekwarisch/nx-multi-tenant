import * as R from 'ramda';
import { AdditionalRoutes } from './additional-routes';
import MyModule from './my-module';
import { createContainer } from '@nx-ioc/di-common';
import MyCmpComposites from './my-cmp';
import {BindingsIdentifiers} from '@nx-ioc/di-bindings';

/**
 * @description
 * Provides base values to overwrite
 */

export const extendToWorldContainer = (container: any) => {
  container
    .bind(BindingsIdentifiers.ADDITONAL_ROUTES)
    .toConstantValue(AdditionalRoutes);
  container.bind(BindingsIdentifiers.MY_MODULE).toConstantValue(MyModule);
  container.bind(BindingsIdentifiers.MY_CMP_COMPOSITES).toConstantValue(MyCmpComposites);

  return container;
};

export const getWorldContainer = R.pipe(createContainer, extendToWorldContainer);
