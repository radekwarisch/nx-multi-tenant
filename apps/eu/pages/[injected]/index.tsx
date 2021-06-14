import { useRouter } from 'next/router'
import {AppCore} from '@nx-ioc/app-core';
import { EuContainerProvider } from '@nx-ioc/eu-container';

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
    <EuContainerProvider>
        <AppCore route={String(injected)} />
    </EuContainerProvider>
  )
}

export default Post
