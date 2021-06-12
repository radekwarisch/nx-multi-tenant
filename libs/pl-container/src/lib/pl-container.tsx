import './pl-container.module.css';

import { EuContainer } from '@nx-ioc/eu-container';

/* eslint-disable-next-line */
export interface PlContainerProps {
  route: string;
}

export function PlContainer(props: PlContainerProps) {
  const { route } = props;

  return (
    <div>
      {!route || route === 'home' ? (
        <>
          <h1>Welcome to pl-container home!</h1>Inherited from{' '}
          <EuContainer route={route} />
        </>
      ) : route === 'custom-route' ? (
        <h1>This route exists only on PL market</h1>
      ) : (
        <h1>Unknown route: {route}</h1>
      )}
    </div>
  );
}

export default PlContainer;
