import { PlContainer } from '@nx-ioc/pl-container'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
    <>
      <p>Injected route: {injected}</p>
      <PlContainer route={String(injected)} />
    </>
  )
}

export default Post
