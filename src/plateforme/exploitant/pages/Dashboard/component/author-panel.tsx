import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export function AuthorPanel() {
  return (
    <div className="w-80 border-l p-6 hidden lg:block">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Alexander Mark" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          <span className="font-medium">Alexander Mark</span>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full">
          <span className="relative">
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
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
              className="h-5 w-5"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </span>
        </Button>
      </div>

      <div className="mt-12">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder.svg?height=64&width=64&text=GRRM" alt="George RR Martin" />
            <AvatarFallback>GM</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold">George RR Martin</h3>
            <p className="text-sm text-gray-500">author</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-8 text-sm">
          <p className="text-gray-700">
            "Fire and Blood" tells the story of the Targaryen dynasty in Westeros, chronicling the conquest of the Seven
            Kingdoms by House Targaryen. It also covers the Targaryen civil war known as the Dance of the Dragons.
          </p>
        </div>

        <div className="mt-12 flex justify-end gap-2">
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-gray-200">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-gray-200">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

