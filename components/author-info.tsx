import Image from "next/image";
import {GithubSocialIcon, LinkedIn} from "@/components/social-links";

export function AuthorInfo() {
    return <div className="flex flex-row relative justify-between w-full mt-10 items-center">

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


}

