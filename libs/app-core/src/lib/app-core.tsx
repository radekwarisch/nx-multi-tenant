import { RoutesAdapter } from './di/routes-adapter';

/* eslint-disable-next-line */
export interface AppCoreProps {route: string}

export function AppCore(props: AppCoreProps) {
  const {route} = props;

  return (
    <div>
      <RoutesAdapter route={route} />
    </div>
  );
}

export default AppCore;
