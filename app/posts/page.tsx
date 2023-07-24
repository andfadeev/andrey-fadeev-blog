import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { Metadata } from "next";
import { AuthorInfo } from "@/components/author-info";
import { Collection } from "immutable";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Andrey Fadeev | Posts",
    description: "Andrey Fadeev | Posts",
  };
}

export default function Posts() {
  const allPostsSorted = Collection(allPosts)
    .sortBy((post) => post.date)
    .reverse()
    .toJS();
  return (
    <>
      <AuthorInfo />
      <div className="max-w-none prose md:prose-lg dark:prose-invert">
        {/*  TODO: group by YYYY-MM*/}
        {allPostsSorted.map((post) => (
          <Link
            key={post._id}
            href={post.slug}
            className={"text-orange-600 dark:text-yellow-600"}
          >
            <h2 className={"text-orange-600 dark:text-yellow-600"}>
              {post.title}
            </h2>
          </Link>
        ))}
        <hr />
      </div>
    </>
  );
}
