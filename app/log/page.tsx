import { getAllPosts, Post } from '@/lib/posts'

export default function LogPage() {
  const posts: Post[] = getAllPosts()
  return (
    <div>
      <h1>Log Entries</h1>
      {posts.length === 0 ? (
        <p>No posts yet. Add to content/posts/</p>
      ) : (
        <ul>
          {posts.map(post => (
            <li key={post.slug}>
              <a href={`/posts/${post.slug}`}>{post.title}</a> ({post.date})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}