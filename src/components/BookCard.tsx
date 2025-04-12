"use client"

import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import type { BookResponse } from "../types"

export default function BookCard({ book }: { book: BookResponse }) {
  return (
    <Link href={`/books/${book.id}`}>
      <Card className="w-[350px] cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105">
        <CardHeader>
          <CardTitle>{book.author}</CardTitle>
          <CardDescription>{book.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <img
            className="w-full h-48 md:h-64 object-cover rounded"
            src={book.image_data || "/fallback.jpg"}
            alt={book.title}
            onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
          />
        </CardContent>
        <CardFooter>
          <p className="text-base font-medium text-gray-800">
            ${parseFloat(book.price.toString()).toFixed(2)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  )
}
