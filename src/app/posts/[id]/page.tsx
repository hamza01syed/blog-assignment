import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { posts } from '../../data/posts';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<{ id: string; title: string; content: string } | null>(null);

  useEffect(() => {
    if (id) {
      const fetchedPost = posts.find((p) => p.id === id);
      setPost(fetchedPost || null);
    }
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
