import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import {Metadata} from "next";

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "Andrey Fadeev | Blog",
    description: "Andrey Fadeev | Blog"
  }
}

export default function Blog() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}
                className={"text-orange-600 dark:text-yellow-600"}
          >
            <h3 className={"text-orange-600 dark:text-yellow-600"}>{post.title}</h3>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
