"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { posts } from '@/data/posts';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<{ id: string; title: string; content: string } | null>(null);
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  useEffect(() => {
    if (id) {
      const fetchedPost = posts.find((p) => p.id === id);
      setPost(fetchedPost || null);
    }
  }, [id]);

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 md:mt-24 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg leading-relaxed">{post.content}</p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h2>
        <ul className="space-y-2">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded shadow text-gray-700"
              >
                {comment}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </ul>

        <div className="mt-6">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addComment}
            className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-600 transition-colors"
          >
            Add Comment
          </button>
        </div>
      </section>
    </div>
  );
};

export default Post;
