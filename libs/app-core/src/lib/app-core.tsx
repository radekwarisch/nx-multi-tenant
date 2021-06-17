import { RoutesAdapter } from './di/routes-adapter';

/* eslint-disable-next-line */
export interface AppCoreProps {route: string}

export function AppCore({route}: AppCoreProps) {
  return (
    <div>
      <RoutesAdapter route={route} />
    </div>
  );
}

export default AppCore;
