interface User {
  name: string,
  tell: number,
}

export interface message {
  from: User,
  to: User,
  text: string,
  time: string
} 