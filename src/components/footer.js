import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { Link } from "gatsby"

const Footer = ({title}) => {
  return (
    <footer className="mt-8 md:mt-16 lg:mt-32 flex-none">
      <div className="sm:px-8">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="flex flex-wrap justify-center items-center  gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    <div className="flex rounded-full border border-zinc-700 dark:border-zinc-50 p-1">
                      <StaticImage
                        className="rounded-full"
                        layout="fixed"
                        formats={["auto", "webp", "avif"]}
                        src="../images/profile-pic.png"
                        width={30}
                        height={30}
                        quality={95}
                        alt="Profile picture"
                      />
                    </div>
                    <Link
                      className="dark:text-white text-2xl font-bold ml-2 text-center"
                      to="/"
                    >
                      {title}
                    </Link>
                  </div>
                  <p className="text-sm text-zinc-400 dark:text-zinc-500 text-center">
                    My views shared here are not endorsed by my employers or
                    associates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
