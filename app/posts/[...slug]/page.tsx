import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import Image from "next/image";
import dayjs from "dayjs";
import {GithubComments} from "@/components/github-comments";
import {DonateButton} from "@/components/donate-button";

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}


export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
      <div>
        <article className="py-6 max-w-none prose md:prose-lg dark:prose-invert prose-a:text-orange-600 dark:prose-a:text-yellow-600">
          <h1 className="mb-4 md:mb-4 text-orange-600 dark:text-yellow-600">
            {post.title}
          </h1>
          <div className={"flex sm:flex items-center justify-between w-full my-0 md:my-0 "} >
            <div className={"hidden sm:flex items-center my-0 md:my-0"}>
              <Image
                  src={"/avatar.png"}
                  alt="Andrey Fadeev photo"
                  width={40}
                  height={40}
                  className="rounded-md my-0 md:my-0 h-[40px] w-[40px]"
              />
              <div className={"flex-col justify-between ml-2 text-sm text-gray-600 dark:text-gray-400"}>
                <div className={"flex text-black dark:text-gray-200 font-bold"}>
                  Andrey Fadeev
                </div>
                {dayjs(post.date).format('MMMM D, YYYY')}
              </div>
            </div>
            <DonateButton/>
          </div>
          <Mdx code={post.body.code} />
        </article>
        <GithubComments/>
      </div>
  )
}
