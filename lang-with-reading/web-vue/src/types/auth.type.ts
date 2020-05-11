namespace AuthTypes {
  export interface User {
    id: string
    name: string | null,
    email: string | null,
    profileImgUrl?: string | null
  }
}

export default AuthTypes
