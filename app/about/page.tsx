import { Metadata } from "next";
import { AuthorInfo } from "@/components/author-info";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Andrey Fadeev | About",
    description: "Andrey Fadeev | About",
  };
}

export default function About() {
  return (
    <>
      <AuthorInfo />
      <div className="max-w-none prose md:prose-lg dark:prose-invert mt-10">
        <p>Not much here yet 🥸</p>
        <hr />
      </div>
    </>
  );
}
