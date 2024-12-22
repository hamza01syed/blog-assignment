import Link from 'next/link';
import { posts } from '@/data/posts';

const Home = () => (
  <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome to the Blog</h1>
    <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Latest Blog Posts</h2>
    <ul className="space-y-4">
      {posts.map((post) => (
        <li
          key={post.id}
          className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <Link href={`/posts/${post.id}`}>
            <p className="text-lg font-medium text-blue-600 hover:text-blue-800 underline">
              {post.title}
            </p>
          </Link>
          <p className="text-gray-600 mt-2 text-sm line-clamp-2">{post.content}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
