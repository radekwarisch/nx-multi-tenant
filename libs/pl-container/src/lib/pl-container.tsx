import './pl-container.module.css';

import {EuContainer} from '@nx-ioc/eu-container';

/* eslint-disable-next-line */
export interface PlContainerProps {route: string}

const routeMap: Record<string, string> = {
  'glowna': 'home'
}

export function PlContainer(props: PlContainerProps) {
  const {route} = props;

  return (
    <div>
      {!route || route === 'glowna' ? <h1>Welcome to pl-container glowna!</h1> : <h1>Unknown route: {route}</h1>}
      Inherited from <EuContainer route={routeMap[route]} />
    </div>
  );

}

export default PlContainer;
