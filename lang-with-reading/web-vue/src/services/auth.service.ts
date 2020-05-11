import AuthTypes from '../types/auth.type'
import firebase from '../utilities/firebase.util'
class AuthService {
  static currentUser = async (): Promise<AuthTypes.User | null> => {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          return resolve(null)
        }
        return resolve({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          profileImgUrl: user.photoURL,
        })
      })
    })
  }

  static isLoggedIn = async (): Promise<boolean> => {
    const user: AuthTypes.User | null = await AuthService.currentUser()
    return !!user
  }
}

export default AuthService
