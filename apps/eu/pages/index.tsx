import React from 'react';

import {AppCore} from '@nx-ioc/app-core';
import { EuContainerProvider } from '@nx-ioc/eu-container';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <EuContainerProvider>
        <AppCore route={''} />
    </EuContainerProvider>

  );
}

export default Index;
