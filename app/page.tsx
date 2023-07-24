import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { AuthorInfo } from "@/components/author-info";
import { Metadata } from "next";
import { Collection } from "immutable";
import { HomePageButton } from "@/components/home-page-button";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Andrey Fadeev | Home",
    description: "Andrey Fadeev | Home",
  };
}

export default function Home() {
  const allPostsSorted = Collection(allPosts)
    .sortBy((post) => post.date)
    .reverse()
    .take(5)
    .toJS();
  const buttonClassName =
    "px-10 py-5  bg-slate-100 dark:bg-slate-900 rounded-md mt-2 inline-block no-underline hover:underline underline-offset-[3px]";
  return (
    <div>
      <AuthorInfo />
      <div className="max-w-none prose md:prose-lg dark:prose-invert mt-10">
        {/*<h2>About</h2>*/}

        <p>
          I&apos;m interested in functional programming and web development.
          Currently, work as a backend developer using Clojure as the main
          language, but I am also curious about full stack development.
        </p>

        <HomePageButton href="/about" title={"Read more"} />

        <hr />

        {/*<h2>Recent posts</h2>*/}
        {allPostsSorted.map((post) => (
          <Link
            key={post._id}
            href={post.slug}
            className={"text-orange-600 dark:text-yellow-600 "}
          >
            <h2 className={"text-orange-600 dark:text-yellow-600"}>
              {post.title}
            </h2>
          </Link>
        ))}

        <HomePageButton href="/posts" title={"View all posts"} />
        <hr />
      </div>
    </div>
  );
}
