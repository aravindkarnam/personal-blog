/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {FiLinkedin,FiGithub ,FiTwitter} from "react-icons/fi";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="flex flex-col justify-center items-center  dark:text-white">
      <div className="flex rounded-full border border-zinc-700 dark:border-zinc-50 p-2">
        <StaticImage
          className="rounded-full"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile-pic.jpeg"
          width={125}
          height={125}
          quality={95}
          alt="Profile picture"
        />
      </div>
      <div className="flex flex-col">
        <p className="flex items-center justify-center text-2xl font-extrabold mt-2 text-center">
          {author?.name || ""}
        </p>
        <p className="flex items-center justify-center text-base font-light mt-2 text-center mx-8">
          {author?.summary || ""}
        </p>
      </div>
      <div className="flex flex-row flex-wrap my-4 items-center justify-center">
        <a
          className="flex h-auto group rounded-full bg-white/90 px-3 py-2 m-2 shadow-lg text-sm font-light
       shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition
        dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          href={`https://twitter.com/${social?.twitter || ``}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter className="m-1"/><p className="px-1">{social?.twitter || ``}</p>
        </a>
        <a
          className="flex h-auto group rounded-full bg-white/90 px-3 py-2 m-2 shadow-lg text-sm font-light
       shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition
        dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          href={`https://github.com/${social?.github || ``}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub  className="m-1" /><p className="px-1">{social?.github || ``}</p>
        </a>
        <a
          className="flex h-auto group rounded-full bg-white/90 px-3 py-2 m-2 shadow-lg text-sm font-light
       shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition
        dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          href={`https://linkedin.com/in/${social?.linkedin || ``}`}
          target="_blank"
          rel="noopener noreferrer"
        >
         <FiLinkedin  className="m-1"/><p className="px-1"> {social?.linkedin || ``}</p>
        </a>
      </div>
    </div>
  )
}

export default Bio
