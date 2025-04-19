export type User = {
  uid: string
  displayName: string
  email: string
}

export type Comment = {
  author: User
  text: string
}

export type Post = {
  id: string
  title: string
  description: string
  imageUrl: string
  location: string
  author: User
  comments: Comment[]
}
