import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-green-500">Get in Touch</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Let&apos;s Start a New Project Together</h2>
                <p className="max-w-[900px]">
                  Have a project in mind? We would love to hear about your ideas and goals. Let&apos;s discuss and make
                  something great together.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-green-500 shadow transition-colors hover:bg-gray-100 hover:text-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-green-500 text-white">
        <p className="text-xs">© 2024 SaaS Analytics. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
