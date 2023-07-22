import {allPosts} from "@/.contentlayer/generated"
import Link from "next/link"
import {AuthorInfo} from "@/components/author-info";
import {Metadata} from "next";
import {Collection} from "immutable";

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: "Andrey Fadeev | Home",
        description: "Andrey Fadeev | Home"
    }
}

export default function Home() {
    const allPostsSorted =
        Collection(allPosts)
            .sortBy(post => post.date)
            .reverse()
            .take(5)
            .toJS()
    const buttonClassName = "px-10 py-5  bg-slate-100 dark:bg-slate-900 rounded-md mt-2 inline-block no-underline hover:underline underline-offset-[3px]"
    return (
        <div>
            <AuthorInfo/>
            <div className="max-w-none prose dark:prose-invert mt-10">
                <h2>About</h2>

                <p>
                    I&apos;m interested in functional programming and web development. Currently, work as a backend developer using Clojure as the main
                    language, but I am also curious about full stack development.
                </p>

                <a className={buttonClassName}
                href={"/about"}>
                    Read more
                </a>

                <h2>Recent posts</h2>
                {allPostsSorted.map((post) => (
                    <article key={post._id}>
                        <Link href={post.slug}
                              className={"text-orange-600 dark:text-yellow-600 "}>
                            {/*{post.title}*/}
                            <h4 className={"text-orange-600 dark:text-yellow-600"}>
                                {post.title}
                            </h4>
                        </Link>
                    </article>
                ))}

                <a className={buttonClassName}
                   href={"/blog"}>
                    View all posts
                </a>
            </div>
        </div>
    )
}
