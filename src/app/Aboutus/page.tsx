import {  Mail, MapPin, Phone} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import placeholder from "../About us/placeholder.svg"

export default function Bookifyus() {
  const currentYear = new Date().getFullYear()
  const foundingYear = currentYear - 1

  return (
    <div className="flex min-h-screen flex-col">
    
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to Bookify
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                  Welcome to Bookify, a cozy haven for book lovers, thinkers, and dreamers. 
                  Since 2024, we’ve been dedicated to fostering a love for literature by 
                  offering a thoughtfully curated selection of books that inspire, educate, and entertain.


                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#offerings"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                  >
                    Explore Books
                  </Link>
                  <Link
                    href="#about"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src={placeholder}
                width={550}
                height={550}
                alt="Books on a shelf"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="mission" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Mission</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Creating a Community of Readers</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our mission is to create a vibrant community of readers and book lovers. We aim to provide a diverse
                  selection of books that cater to every taste, from timeless classics to the latest bestsellers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src={placeholder}
                width={400}
                height={400}
                alt="Bookstore interior"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Our Story</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">A Passion for Books</h2>
                  <p className="text-gray-600">
                    Founded in {foundingYear}, Bookify started as a small passion project and has grown into a beloved
                    marketplace for readers worldwide. We are dedicated to curating an exceptional collection that not
                    only includes popular titles but also hidden gems waiting to be discovered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offerings" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">What We Offer</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Discover Your Next Favorite Book</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Bookify, we're committed to providing an exceptional book shopping experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Wide Selection</h3>
                <p className="text-sm text-gray-600 text-center">
                  Explore a vast array of genres, including fiction, non-fiction, fantasy, and more.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Personalized Recommendations</h3>
                <p className="text-sm text-gray-600 text-center">
                  Our team is passionate about books and is here to help you find your next favorite read.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 shadow-sm">
                <div className="p-3 rounded-full bg-blue-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-800"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Community Engagement</h3>
                <p className="text-sm text-gray-600 text-center">
                  Join our book clubs, author events, and community discussions to connect with fellow readers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Us</h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Bookify, we're more than just a bookstore; we're a community of readers. Whether you're a lifelong
                bibliophile or just starting your reading journey, we invite you to explore our collection and share
                your love of books with us.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="grid gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm"
                />
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              <p className="text-xs text-gray-500">Join our newsletter to stay updated on new arrivals and events.</p>
            </div>
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="text-sm text-gray-600">contact@bookify.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="text-sm text-gray-600">123 Book Street, Reading, CA</span>
              </div>
            </div>
          </div>
        </section>
      </main>
  
    </div>
  )
}

