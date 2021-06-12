import { EuContainer } from '@nx-ioc/eu-container'
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { injected } = router.query

  return (
    <>
      <p>Injected route: {injected}</p>
      <EuContainer route={String(injected)} />
    </>
  )
}

export default Post
