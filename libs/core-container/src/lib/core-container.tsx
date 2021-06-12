import './core-container.module.css';

/* eslint-disable-next-line */
export interface CoreContainerProps {route: string}

export function CoreContainer(props: CoreContainerProps) {
  const {route} = props;

  return (
    <div>
      {!route || route === 'home' ? <h1>Welcome to core-container home!</h1> : <h1>Unknown route: {route}</h1>}
    </div>
  );
}

export default CoreContainer;
