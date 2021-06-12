import './pl-container.module.css';

import {EuContainer} from '@nx-ioc/eu-container';

/* eslint-disable-next-line */
export interface PlContainerProps {}

export function PlContainer(props: PlContainerProps) {
  return (
    <div>
      <h1>Welcome to pl-container!</h1>
      Inherited from <EuContainer />
    </div>
  );
}

export default PlContainer;
