"use client"
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import BookCard from "@/components/BookCard"
import { fetchFeaturedBooks } from '@/lib/utils'
import { SkeletonCard } from "@/components/skeleton"

const queryClient = new QueryClient()

export default function FeaturedBooks() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Featured />
    </QueryClientProvider>
  )
}

function Featured() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['books'],
    queryFn: fetchFeaturedBooks
  })

  if (isPending) {
    return <SkeletonCard />
  }

  if (isError) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl md:text-4xl font-light font-serif tracking-tight text-gray-900 mb-6 text-left">
        Featured Books
      </h2>

      <div className="flex flex-row gap-6 justify-center flex-wrap">
        {data.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </div>
    </div>
  )
}



