import React from 'react';

import {WorldContainerProvider} from '@nx-ioc/world-container';
import {AppCore} from '@nx-ioc/app-core';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <WorldContainerProvider>
      <AppCore route={''} />
    </WorldContainerProvider>

  );
}

export default Index;
