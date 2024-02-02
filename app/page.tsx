import Footer from '@/components/footer'
import { Header } from '@/components/header'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export default function Page() {
  return (
    <div>
      <Header />
    <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to Acme Agency</h1>
                <p className="max-w-[600px]">We provide the best creative solutions for your business.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-green-500 shadow transition-colors hover:bg-gray-100 hover:text-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Learn More
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-white hover:text-green-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Services</h2>
              <p className="mx-auto max-w-[700px]">
                We offer a wide range of creative services to help your business grow.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs">
                Subscribe to get our latest updates and news.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h2>
              <p className="max-w-[600px]">
                We have worked with some of the best brands in the world. Here are some of our best works.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height={310}
                src="/placeholder.svg"
                width={550}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Brand Design</h3>
                      <p>We create unique brand identities that stand out in the market.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Web Development</h3>
                      <p>We build responsive and user-friendly websites for your business.</p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Digital Marketing</h3>
                      <p>We help your business reach a wider audience with our digital marketing strategies.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        </main>
      <Footer />
    </div>
  )
}
