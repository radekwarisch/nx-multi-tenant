import { useRouter } from 'next/router'
import {AppCore} from '@nx-ioc/app-core';
import { getWorldContainer } from '@nx-ioc/world-container';
import { InjectionProvider } from '@nx-ioc/di-common';

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
    <InjectionProvider container={getWorldContainer()}>
      <AppCore route={String(injected)} />
    </InjectionProvider>
  )
}

export default Post

