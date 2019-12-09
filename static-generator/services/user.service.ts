import * as userConfig from '../configs/user.config'
import UserTypes from '../types/user.type'

const testUser: { [key: string]: UserTypes.User } = {
  'by-tati-test-id': {
    name: 'by Tati',
    ID: 'by-tati-test-id',
  }
}

export class UserService {
  private _baseUrl: string
  private static instance: UserService
  private constructor (baseUrl: string) {
    this._baseUrl = baseUrl
  }
  static getInstance: () => UserService = () => {
    if (!UserService.instance) {
      UserService.instance = new UserService(userConfig.baseUrl)
    }
    return UserService.instance
  }

  static async getByID (ID: string): Promise<UserTypes.User> {
    return testUser[ID]
  }
}

export default UserService
