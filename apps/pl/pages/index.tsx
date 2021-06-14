import React from 'react';

import {AppCore} from '@nx-ioc/app-core';
import { PlContainerProvider } from '@nx-ioc/pl-container';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (

        <PlContainerProvider>
          <AppCore route={''} />
        </PlContainerProvider>

  );
}

export default Index;
