import { useRouter } from 'next/router'
import {AppCore, NoPageCtrl} from '@nx-ioc/app-core';
import { getPlContainer } from '@nx-ioc/pl-container';
import { InjectionProvider } from '@nx-ioc/di-common';

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
    <InjectionProvider container={getPlContainer()}>
      <AppCore route={String(injected)} />
    </InjectionProvider>
  )
}

export default Post
