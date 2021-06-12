import './eu-container.module.css';

import {CoreContainer} from '@nx-ioc/core-container';

/* eslint-disable-next-line */
export interface EuContainerProps {}

export function EuContainer(props: EuContainerProps) {
  return (
    <div>
      <h1>Welcome to eu-container!</h1>
      Inherited from <CoreContainer />
    </div>
  );
}

export default EuContainer;
