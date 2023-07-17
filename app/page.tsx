import {allPosts} from "@/.contentlayer/generated"
import Link from "next/link"
import Image from "next/image";
import {GithubSocialIcon, LinkedIn} from "@/components/social-links";


export default function Home() {
    const buttonClassName = "px-10 py-5  bg-slate-100 dark:bg-slate-900 rounded-md mt-2 inline-block no-underline hover:underline underline-offset-[3px]"
    return (
        <div>
            <div className="flex flex-row relative justify-between w-full mt-10 items-center">

                <div>
                    <Image
                        src={"/avatar.png"}
                        alt="Andrey Fadeev photo"
                        width={120}
                        height={120}
                        className="rounded-full"
                    />
                </div>

                <div className="flex flex-col relative w-full ml-4">
                    <h1 className="font-extrabold text-2xl tracking-tight">
                        Andrey Fadeev
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Staff Software Engineer at Kroo Bank
                    </p>
                    <div className={"mt-2 flex gap-2 text-gray-600 dark:text-gray-400"}>
                        <LinkedIn/>
                        <GithubSocialIcon/>
                    </div>
                    {/*<p className="text-gray-600 dark:text-gray-400">*/}
                    {/*  All good things come to those who wait.*/}
                    {/*</p>*/}
                </div>
            </div>


            <div className="prose dark:prose-invert mt-10">
                <h2>About</h2>

                <p>
                    I'm interested in functional programming and web development. Currently, work as a backend developer using Clojure as the main
                    language, but I am also curious about full stack development.
                </p>

                <a className={buttonClassName}
                href={"/about"}>
                    Read more
                </a>


                <h2>Recent posts</h2>
                {allPosts.map((post) => (
                    <article key={post._id}>
                        <Link href={post.slug}
                              className={"text-yellow-600"}
                        >
                            <h3 className={"text-yellow-600"}>{post.title}</h3>
                        </Link>
                        {/*{post.description && <p>{post.description}</p>}*/}
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
