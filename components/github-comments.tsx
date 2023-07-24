"use client";

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";

export function GithubComments() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className={"mt-2"}>
      <Giscus
        id="comments"
        repo="andfadeev/andrey-fadeev-blog"
        repoId="R_kgDOJ8HU2Q"
        category="Announcements"
        categoryId="DIC_kwDOJ8HU2c4CX-es"
        mapping="url"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={currentTheme}
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
