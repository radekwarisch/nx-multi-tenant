import { WorldContainerProvider } from '@nx-ioc/world-container'
import { useRouter } from 'next/router'
import {AppCore} from '@nx-ioc/app-core';

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
    <WorldContainerProvider>
      <AppCore route={String(injected)} />
    </WorldContainerProvider>
  )
}

export default Post
