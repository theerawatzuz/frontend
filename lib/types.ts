export interface Post {
  id: number
  author: string
  avatar: string
  category: string
  title: string
  content: string
  comments: number
  time: string
}

export interface User {
  id: number
  name: string
  avatar: string
  email?: string
}

export interface Category {
  id: number
  name: string
  color?: string
}

export interface Comment {
  id: number
  postId: number
  author: string
  fullName: string
  avatar: string
  content: string
  time: string
}
