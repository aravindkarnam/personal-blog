import * as React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "./darkModeToggle"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = <></>
  } else {
    header = (
      <Link className="dark:text-white text-2xl font-bold" to="/">
        {title}
      </Link>
    )
  }
  return (
    // Parent container
    <div
      className="flex h-full bg-zinc-50 dark:bg-black"
      data-is-root-path={isRootPath}
    >
      <div className="flex w-full">
        {/* Parent container ends */}
        {/* No content */}
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"></div>
          </div>
        </div>
        {/*Main content*/}
        <div className="relative flex w-full flex-col">
          {/*master navigation*/}
          <header className="relative z-50 flex flex-none flex-col">
            <div className="top-0 z-10 h-16 pt-6">
              <div className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full">
                <div className="mx-auto w-full max-w-7xl lg:px-8">
                  <div className="relative px-4 sm:px-8 lg:px-12">
                    <div className="mx-auto max-w-2xl lg:max-w-5xl">
                      <div className="relative flex gap-4">
                        <div className="flex flex-1 px-2 py-1">{header}</div>
                        {/* <div
                          class="flex flex-1 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition
        dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 dark:text-white justify-center md:justify-center"
                        >
                          Use this for top nav when necessary
                        </div> */}
                        <DarkModeToggle className="flex justify-end md:flex-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="flex flex-col justify-center mt-8">
            {children}
          </main>
          <Footer title={title} />
        </div>
      </div>
    </div>
  )
}

export default Layout
