import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import Image from "next/image";
import dayjs from "dayjs";
import {GithubComments} from "@/components/github-comments";

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
        <article className="py-6 prose dark:prose-invert prose-a:text-orange-600 dark:prose-a:text-yellow-600">
          <h1 className="mb-2 text-orange-600 dark:text-yellow-600 ">{post.title}</h1>

          <div className={"flex items-start justify-between w-full md:flex-row my-8 my-0"} >

            <div className={"flex items-center my-0"}>
              <Image
                  src={"/avatar.png"}
                  alt="Andrey Fadeev photo"
                  width={36}
                  height={36}
                  className="rounded-full my-0"
              />
              <div className={"ml-2 text-sm text-gray-600 dark:text-gray-400"}>
                <div className={"flex text-black dark:text-gray-200 font-bold"}>
                  Andrey Fadeev
                </div>
                {dayjs(post.date).format('MMMM D, YYYY')}
              </div>
            </div>

          </div>
          <Mdx code={post.body.code} />
        </article>
        <GithubComments/>
      </div>
  )
}
