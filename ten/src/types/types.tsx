export interface User {
  id: number,
  name: string,
  address: Address
}
export interface Address{
  street: string,
  suite: string,
  city: string,
}
export interface Todo {
  id: number,
  title: string,
  completed: boolean
}
