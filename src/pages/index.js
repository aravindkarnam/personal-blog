import * as React from "react"
import { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai"
import { ImSpinner7 } from "react-icons/im"
import { HiOutlineAcademicCap } from "react-icons/hi2"
import { BsBriefcase } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    // Send a POST request to your Google Apps Script web app
    const formData = new FormData()
    formData.append("email", email)
    const urlEncodedData = new URLSearchParams(formData).toString()
    setLoading(true)
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzbdiyZlj7SVuIlAr9D27bWuOTbCB3JNmwAZ1GoRHqF5UUwaSb_ydK3XtZWWiLmShcKBA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlEncodedData,
        mode: "no-cors", // Allow cross-origin request
      }
    )
    response
      .text()
      .then(() => {
        setSubscribed(true)
        setLoading(false)
      })
      .catch(() => alert("There was an error registering your email"))
  }

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <div className="sm:px-8 mt-24 md:mt-28">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                {/* Articles */}
                <ol
                  className="flex flex-col gap-16"
                  style={{ listStyle: `none` }}
                >
                  {posts.map(post => {
                    const title = post.frontmatter.title || post.fields.slug
                    return (
                      <li key={post.fields.slug}>
                        <article
                          className="group relative flex flex-col items-start"
                          itemScope
                          itemType="http://schema.org/Article"
                        >
                          <header>
                            <time
                              className="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
                              datetime="2022-09-05"
                            >
                              <span
                                className="absolute inset-y-0 left-0 flex items-center"
                                aria-hidden="true"
                              >
                                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                              </span>
                              {post.frontmatter.date}
                            </time>
                            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></div>
                              <Link to={post.fields.slug} itemProp="url">
                                <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
                                <span
                                  itemProp="headline"
                                  className="relative z-10"
                                >
                                  {title}
                                </span>
                              </Link>
                            </h2>
                          </header>
                          <section>
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  post.frontmatter.description || post.excerpt,
                              }}
                              itemProp="description"
                              className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400"
                            />
                            <div
                              aria-hidden="true"
                              className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
                            >
                              Read article
                              <svg
                                viewBox="0 0 16 16"
                                fill="none"
                                aria-hidden="true"
                                className="ml-1 h-4 w-4 stroke-current"
                              >
                                <path
                                  d="M6.75 5.75 9.25 8l-2.5 2.25"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                          </section>
                        </article>
                      </li>
                    )
                  })}
                </ol>
                <div className="space-y-10 lg:pl-16 xl:pl-24">
                  {/* <form
                    onSubmit={handleSubmit}
                    className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
                  >
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <AiOutlineMail className="h-5 w-5 flex-none fill" />
                      <span className="ml-3">Stay up to date</span>
                    </h2>
                    {subscribed === false ? (
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Get notified when I publish something new, and
                        unsubscribe at any time.
                      </p>
                    ) : (
                      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Thanks for subscribing. You'll get notified when I
                        publish something new!
                      </p>
                    )}
                    {!subscribed && (
                      <div className="mt-6 flex">
                        <input
                          placeholder="Email address"
                          aria-label="Email address"
                          required=""
                          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                          type="email"
                          onChange={e => setEmail(e.target.value)}
                        />
                        <button
                          className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none "
                          type="submit"
                          disabled={loading}
                        >
                          {loading === false ? (
                            "Join"
                          ) : (
                            <ImSpinner7 className="animate-spin h-5 w-5" />
                          )}
                        </button>
                      </div>
                    )}
                  </form> */}
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <BsBriefcase className="h-5 w-5 flex-none" />
                      <span className="ml-3">Work</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <StaticImage
                            className="rounded-full h-9 w-9"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            src="../images/urbanpiper.png"
                            width={30}
                            height={30}
                            quality={95}
                            alt="Company logo"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            UrbanPiper
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Product manager & developer
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="Sep 2019 until Present"
                          >
                            <time datetime="2019">Sep 2019</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2023">Present</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <StaticImage
                            className="rounded-full h-9 w-9"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            src="../images/judicial-branch.png"
                            width={30}
                            height={30}
                            quality={95}
                            alt="Company logo"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Judicial branch of Arizona, Maricopa county
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Consultant
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="Mar 2018 until Jun 2019"
                          >
                            <time datetime="2018">Mar 2018</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2019">Jun 2019</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <StaticImage
                            className="rounded-full h-9 w-9"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            src="../images/kpmg.jpeg"
                            width={26}
                            height={26}
                            quality={95}
                            alt="Company logo"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            KPMG US
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Consultant
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="Dec 2016 until Feb 2018"
                          >
                            <time datetime="2016">Dec 2016</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2018">Feb 2018</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <StaticImage
                            className="rounded-full h-9 w-9"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            src="../images/interstate21.png"
                            width={30}
                            height={30}
                            quality={95}
                            alt="Company logo"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Interstate 21
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Intern
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="2008 until 2011"
                          >
                            <time datetime="2018">Aug 2016</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2011">Dec 2016</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <StaticImage
                            className="rounded-full h-9 w-9"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            src="../images/csus.jpeg"
                            width={30}
                            height={30}
                            quality={95}
                            alt="Company logo"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">Company</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Housing & Residential Life, CSU
                          </dd>
                          <dt className="sr-only">Role</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Student assistant
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="Mar 2015 until Aug 2016"
                          >
                            <time datetime="2015">Mar 2015</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2016">Aug 2016</time>
                          </dd>
                        </dl>
                      </li>
                    </ol>
                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
                      href="/Aravind_CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV
                      <AiOutlineDownload className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      <HiOutlineAcademicCap className="h-5 w-5 flex-none" />
                      <span className="ml-3">Education</span>
                    </h2>
                    <ol className="mt-6 space-y-4">
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <StaticImage
                            className="rounded-full h-9 w-9"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            src="../images/csus.jpeg"
                            width={30}
                            height={30}
                            quality={95}
                            alt="University logo"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">University</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            California State University, Sacramento
                          </dd>
                          <dt className="sr-only">Degree</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Masters in Computer Engineering
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="Sep 2019 until Present"
                          >
                            <time datetime="2019">Jan 2015</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2023">May 2017</time>
                          </dd>
                        </dl>
                      </li>
                      <li className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                          <StaticImage
                            className="rounded-full h-9 w-9"
                            layout="fixed"
                            formats={["auto", "webp", "avif"]}
                            src="../images/svu.jpeg"
                            width={30}
                            height={30}
                            quality={95}
                            alt="University logo"
                          />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                          <dt className="sr-only">University</dt>
                          <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Sri venkateswara University, Tirupati
                          </dd>
                          <dt className="sr-only">Degree</dt>
                          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                            Bachelor of Technology, Electronics Instrumentation
                            & Control Engineering
                          </dd>
                          <dt className="sr-only">Date</dt>
                          <dd
                            className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                            aria-label="Mar 2018 until Jun 2019"
                          >
                            <time datetime="2018">Sept 2009</time>{" "}
                            <span aria-hidden="true">—</span>{" "}
                            <time datetime="2019">May 2013</time>
                          </dd>
                        </dl>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ data }) => {
  const pageTitle =  `Home`
  return <Seo pageTitle={pageTitle} />
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
