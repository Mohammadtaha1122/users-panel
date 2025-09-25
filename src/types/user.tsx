export interface UserAddress {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  country:string
}


export interface User {
  id: number
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  image: string
  address: UserAddress
  gender: string
  birthDate: string
  phone: string
  role: string
}