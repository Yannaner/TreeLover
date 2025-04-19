import { User, Post } from './types'

export const mockUsers: User[] = [
  { uid: '1', displayName: 'Alice', email: 'alice@example.com' },
  { uid: '2', displayName: 'Bob', email: 'bob@example.com' }
]

export const mockPosts: Post[] = [
  {
    id: '101',
    title: 'Majestic Oak',
    description: 'Found this beautiful oak tree in the park.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    location: 'Central Park, NY',
    author: mockUsers[0],
    comments: [
      { author: mockUsers[1], text: 'Wow, amazing find!' }
    ]
  },
  {
    id: '102',
    title: 'Cherry Blossom',
    description: 'Spring is here!',
    imageUrl: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    location: 'Tokyo, Japan',
    author: mockUsers[1],
    comments: []
  }
]
