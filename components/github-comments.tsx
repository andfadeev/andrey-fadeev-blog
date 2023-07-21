"use client"

import { useTheme } from "next-themes"
import Giscus from "@giscus/react";

export function GithubComments() {
  const { theme, systemTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
      <Giscus
          id="comments"
          repo="andfadeev/andrey-fadeev-blog"
          repoId="R_kgDOJ8HU2Q"
          category="Announcements"
          categoryId="DIC_kwDOJ8HU2c4CX-es"
          mapping="url"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="bottom"
          theme={currentTheme}
          lang="en"
          loading="lazy"
      />
  )
}