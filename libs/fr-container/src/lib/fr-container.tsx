import './fr-container.module.css';

import {EuContainer} from '@nx-ioc/eu-container';

/* eslint-disable-next-line */
export interface FrContainerProps {}

export function FrContainer(props: FrContainerProps) {
  return (
    <div>
      <h1>Welcome to fr-container!</h1>
      Inherited from <EuContainer />
    </div>
  );
}

export default FrContainer;
