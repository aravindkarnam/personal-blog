import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import {BsArrowLeft} from "react-icons/bs"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <main className="flex-auto">
        <div className="sm:px-8 mt-16 lg:mt-24">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="xl:relative">
                  <div className="mx-auto max-w-2xl">
                    <Link
                      type="button"
                      to="/"
                      aria-label="Go back to articles"
                      className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
                    >
                      <BsArrowLeft/>
                    </Link>
                    <article itemScope itemType="http://schema.org/Article">
                      <header className="flex flex-col">
                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                          {post.frontmatter.title}
                        </h1>
                        <time
                          datetime="2022-09-05"
                          className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                        >
                          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                          <span className="ml-3">{post.frontmatter.date}</span>
                        </time>
                      </header>
                      <section
                        className="mt-8 prose dark:prose-invert"
                        data-mdx-content="true"
                        dangerouslySetInnerHTML={{ __html: post.html }}
                        itemProp="articleBody"
                      />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
