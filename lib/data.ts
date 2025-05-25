import type { Post, Comment, User } from "./types"

export const posts: Post[] = [
  {
    id: 1,
    author: "Wittawat",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "History",
    title: "The Beginning of the End of the World",
    content:
      "The afterlife sitcom The Good Place comes to its culmination, the show's two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer...",
    comments: 32,
    time: "2h ago",
  },
  {
    id: 2,
    author: "Zach",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "History",
    title: "The Big Short War",
    content:
      "Tall, athletic, handsome with cerulean eyes, he was the kind of hyper-ambitious kid other kids loved to hate and just the type to make a big wager with no margin for error. But on the night before the S.A.T., his father took pity on him and canceled the bet. \"I would've...",
    comments: 4,
    time: "4h ago",
  },
  {
    id: 3,
    author: "Nicholas",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "Exercise",
    title: "The Mental Health Benefits of Exercise",
    content:
      "You already know that exercise is good for your body. But did you know it can also boost your mood, improve your sleep, and help you deal with depression, anxiety, stress, and more?",
    comments: 32,
    time: "6h ago",
  },
  {
    id: 4,
    author: "Carl",
    avatar: "/placeholder.svg?height=32&width=32",
    category: "History",
    title: "What Makes a Man Betray His Country?",
    content:
      "The life of Adolf Tolkachev, Soviet dissident and CIA spy. Excerpted from The Billion Dollar Spy: A True Story of Cold War Espionage",
    comments: 32,
    time: "8h ago",
  },
]

export const users: User[] = [
  { id: 1, name: "Wittawat", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 2, name: "Zach", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 3, name: "Nicholas", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 4, name: "Carl", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 5, name: "Anonymous User", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 6, name: "Jane Smith", avatar: "/placeholder.svg?height=40&width=40" },
  { id: 7, name: "Mike Johnson", avatar: "/placeholder.svg?height=40&width=40" },
]

export const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    author: users[4],
    content:
      "This is such an insightful perspective on The Good Place! I never thought about it this way before. The philosophical implications are really fascinating.",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    postId: 1,
    author: users[5],
    content:
      "I completely agree with your analysis. The show really does make you think about what it means to live a meaningful life.",
    createdAt: "2024-01-15T09:15:00Z",
  },
  {
    id: 3,
    postId: 1,
    author: users[6],
    content:
      "Great post! I've been thinking about this topic a lot lately. The way the show handles existential questions is brilliant.",
    createdAt: "2024-01-15T08:45:00Z",
  },
  {
    id: 4,
    postId: 2,
    author: users[3],
    content: "This story sounds incredible. I need to read more about this historical period.",
    createdAt: "2024-01-14T16:20:00Z",
  },
  {
    id: 5,
    postId: 3,
    author: users[1],
    content:
      "Exercise has definitely helped my mental health too. Thanks for sharing this information - it's really valuable.",
    createdAt: "2024-01-14T14:10:00Z",
  },
]

export const categories = [
  { id: 1, name: "History" },
  { id: 2, name: "Exercise" },
  { id: 3, name: "Technology" },
  { id: 4, name: "Science" },
]
