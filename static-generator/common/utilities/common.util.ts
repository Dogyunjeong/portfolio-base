import { IMPORT_PATH } from '../../staticConfig'
export const setSrc = (src: string) => {
  if (src.startsWith('http')) {
    return src
  }
  return IMPORT_PATH[src]
}