"use client"
import { cn } from "@/components/lib/utils"
import { Check } from "lucide-react"

interface CategorySelectorProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string) => void
}

export function CategorySelector({
    categories,
    selectedCategory,
    onSelectCategory
} : CategorySelectorProps) {
    return (
        <>
            <p className="text-sm text-muted-foreground mb-2">
                Choisissez la catégorie qui correspond le mieux à vos fichiers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 bg-gray-50 border border-dashed border-2 border-gray-300 rounded-sm p-6">
                {categories.slice(1).map((category) => (
                    <div
                        key={category}
                        className={cn(
                            "relative flex flex-col items-center justify-center p-2 pr-4 border rounded-md cursor-pointer transition-all bg-white",
                            "hover:bg-accent/50",
                            selectedCategory === category ? "border-red-400 text-red-400" : "border-border",
                        )}
                        onClick={() => onSelectCategory(category)}
                    >
                        {selectedCategory === category && (
                            <div className="absolute top-1 right-1 h-4 w-4 rounded-full bg-red-400 flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                            </div>
                        )}
                        <span className="text-sm font-normal">{category}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

