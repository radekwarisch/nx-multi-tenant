import { CoreContainer } from '@nx-ioc/core-container'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
    <>
      <p>Injected route: {injected}</p>
      <CoreContainer route={String(injected)} />
    </>
  )
}

export default Post
