import { useRouter } from 'next/router'

const router = useRouter()

class Router {
  static push (path: string) {
    router.push(path)
  }
}

export default Router
export {
  Router
}
