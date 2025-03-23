import { cn } from "@/lib/utils"

interface BookCardProps {
  title: string
  publisher: string
  coverColor: string
  featured?: boolean
}

export function BookCard({ title, publisher, coverColor, featured }: BookCardProps) {
  return (
    <div className="flex flex-col gap-2 min-w-[180px]">
      <div
        className={cn(
          "relative w-[180px] h-[260px] rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl",
          featured ? "w-[180px] h-[260px]" : "",
        )}
      >
        <div className={cn("absolute inset-0", coverColor)}>
          <img
            src={`/placeholder.svg?height=260&width=180&text=${encodeURIComponent(title)}`}
            alt={title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>
      <div className="mt-2 w-[180px]">
        <h3 className="font-medium text-sm text-wrap">{title}</h3>
        <p className="text-xs text-gray-500">{publisher}</p>
      </div>
    </div>
  )
}

