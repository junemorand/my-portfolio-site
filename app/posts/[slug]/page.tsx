import { getPostBySlug } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) return <div>Post not found</div>

  return (
    <article>
      <h1>{post.data.title}</h1>
      <time>{post.data.date}</time>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}