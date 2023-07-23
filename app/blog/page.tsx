import {allPosts} from "@/.contentlayer/generated"
import Link from "next/link"
import {Metadata} from "next";
import {AuthorInfo} from "@/components/author-info";
import {Collection} from "immutable";

export async function generateMetadata(): Promise<Metadata> {

    return {
        title: "Andrey Fadeev | Blog",
        description: "Andrey Fadeev | Blog"
    }
}

export default function Blog() {
    const allPostsSorted =
        Collection(allPosts)
            .sortBy(post => post.date)
            .reverse()
            .toJS()
    return (
        <><AuthorInfo/>
            <div className="max-w-none prose dark:prose-invert">
                {allPostsSorted.map((post) => (
                    <article key={post._id}>
                        {/*<span className={'p-10 bg-amber-950 rounded-md'}>2023</span>*/}
                        <Link href={post.slug}
                              className={"text-orange-600 dark:text-yellow-600"}
                        >
                            <h3 className={"text-orange-600 dark:text-yellow-600"}>{post.title}</h3>
                        </Link>
                        {/*{post.description && <p>{post.description}</p>}*/}
                    </article>
                ))}
            </div>
        </>
    )
}
