export interface IUser {
  id?: number
  username: string
  name?: string
  loginType?: string
  password?: string
  email?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
}