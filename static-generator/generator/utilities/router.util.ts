import { useRouter as nextUseRouter, NextRouter } from 'next/router'
import TemplateTypes from '../types/template.type'
class Router {
  private static _router: NextRouter
  private static _instance: Router
  private constructor () {
  }

  static getInstance () {
    if (!Router._instance) {
      Router._instance = new Router()
    }
    Router._router = nextUseRouter()
    return Router._instance
  }

  public push (path: string) {
    Router._router.push(path)
  }

  get query (): { [key: string]: string | string[] } {
    return Router._router.query
  }

  get pageConfig (): TemplateTypes.PageConfig {
    const pageConfig: TemplateTypes.PageConfig = Router._router.query
    return pageConfig
  }
}

const useRouter = (): Router => {
  return Router.getInstance()
}

export default Router
export {
  Router,
  useRouter,
  nextUseRouter
}
