import uuidv5 from 'uuid/v5'
import config from '../../configs'

const uuidGeneratorV5 = (): string => {
  return uuidv5(config.DNS, uuidv5.DNS)
}

export default uuidGeneratorV5
export {
  uuidGeneratorV5 as gUuidV5
}