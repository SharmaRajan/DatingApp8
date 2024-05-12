//export type Root = IMember[]

import { IPhoto } from "./iphoto"

export interface IMember {
  id: number
  userName: string
  age: number
  photoUrl: string
  knownAs: string
  createdOn: string
  lastActive: string
  gender: string
  introduction: string
  lookingFor: string
  interests: string
  city: string
  country: string
  photos: IPhoto[]
}


