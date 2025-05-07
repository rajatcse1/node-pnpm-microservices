import { Post } from '../src/types/post';
export const posts: Post[] = [
    {
      id: '1',
      title: 'First Post',
      content: 'This is the first post.',
      author: 'John Doe',
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Second Post',
      content: 'This is the second post.',
      author: 'Jane Smith',
      createdAt: new Date(),
    },
  ];