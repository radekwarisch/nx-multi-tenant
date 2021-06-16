import { RoutesAdapter } from './di/routes-adapter';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface AppCoreProps {route: string}

export function AppCore(props: AppCoreProps) {
  const router = useRouter()
  const { injected } = router.query

  return (
    <div>
      <RoutesAdapter route={route} />
    </div>
  );
}

export default AppCore;
