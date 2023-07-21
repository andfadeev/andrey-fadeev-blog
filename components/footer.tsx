import {GithubSocialIcon, LinkedIn} from "@/components/social-links";

export const Footer = () => {
    return <footer className="flex justify-between container mx-auto py-2 text-gray-400 tracking-tight m-2">
        <p className="py-2 text-gray-600 dark:text-gray-400">
            © 2023{" "}
            <a
                className="hover:underline hover:text-black dark:hover:text-white underline-offset-[3px]"
                href="/"
            >
                Andrey Fadeev
            </a>
        </p>
        <ul className="flex items-center py-2 gap-2">
            <li>
                <LinkedIn/>
            </li>
            <li>
                <GithubSocialIcon/>
            </li>
        </ul>
    </footer>
}