"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BookCard } from "./book-card"

export function BookCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)

  const books = [
    {
      id: 1,
      title: "Beauty and the Beast",
      publisher: "Disney",
      coverColor: "bg-blue-900",
    },
    {
      id: 2,
      title: "Fire and Blood - A Game of Thrones series",
      publisher: "George R.R. Martin",
      coverColor: "bg-red-600",
      featured: true,
    },
    {
      id: 3,
      title: "The Chronicles of Narnia",
      publisher: "C.S. Lewis",
      coverColor: "bg-gray-800",
    },
    {
      id: 4,
      title: "Deadpool Samurai edition",
      publisher: "Marvel",
      coverColor: "bg-red-700",
    },
    {
      id: 5,
      title: "A Lord of the Rings",
      publisher: "The Hobbit",
      coverColor: "bg-green-800",
    },
  ]

  return (
    <div className="mt-8">
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 px-2 -mx-2 scrollbar-hide">
          {books.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              publisher={book.publisher}
              coverColor={book.coverColor}
              featured={book.featured}
            />
          ))}
        </div>

        <div className="absolute right-0 bottom-0 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8 border-gray-200"
            onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-8 w-8 border-gray-200"
            onClick={() => setActiveIndex(Math.min(books.length - 1, activeIndex + 1))}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

