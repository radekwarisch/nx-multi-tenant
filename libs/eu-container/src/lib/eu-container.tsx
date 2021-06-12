import './eu-container.module.css';

import { CoreContainer } from '@nx-ioc/core-container';

/* eslint-disable-next-line */
export interface EuContainerProps {
  route: string;
}

export function EuContainer(props: EuContainerProps) {
  const { route } = props;

  return (
    <div>
      {!route || route === 'home' ? (
        <>
          <h1>Welcome to eu-container home!</h1>Inherited from{' '}
          <CoreContainer route={route} />
        </>
      ) : (
        <h1>Unknown route: {route}</h1>
      )}
    </div>
  );
}

export default EuContainer;
