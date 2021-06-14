import { useRouter } from 'next/router'
import {AppCore} from '@nx-ioc/app-core';
import { PlContainerProvider } from '@nx-ioc/pl-container';

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
        <PlContainerProvider>
          <AppCore route={String(injected)} />
        </PlContainerProvider>
  )
}

export default Post
