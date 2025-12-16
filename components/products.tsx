"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import productsData from "../products.json"

// Type definition for product from JSON
type Product = {
  name: string
  path: string
}

// Map category keys to display names
const categoryNames: Record<string, string> = {
  epices: "Épices",
  legumes: "Légumes",
  fruits: "Fruits",
  boisson: "Boissons",
  commerce_general: "Commerce Général",
}

const ITEMS_PER_PAGE = 12

export default function Products() {
  // Get categories from JSON keys
  const categories = Object.keys(productsData) as Array<keyof typeof productsData>
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])
  const [currentPage, setCurrentPage] = useState(1)

  // Reset pagination when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory])

  // Get current products based on category
  const currentCategoryProducts = productsData[activeCategory as keyof typeof productsData] || []

  // Pagination logic
  const totalPages = Math.ceil(currentCategoryProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProducts = currentCategoryProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to top of product section smoothly
      const section = document.getElementById("products")
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  // Helper to format image path
  const getImagePath = (path: string) => {
    return path.replace("public/", "/")
  }

  return (
    <section id="products" className="section-padding bg-gray-light">
      <div className="max-content">
        <div className="text-center mb-12">
          <h2 className="text-green mb-4">Nos Produits</h2>
          <p className="text-lg text-foreground/70">
            Une gamme complète de produits frais et naturels
          </p>
        </div>

        <Tabs
          defaultValue={categories[0]}
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8 overflow-x-auto pb-4">
            <TabsList className="h-auto flex-wrap justify-center gap-2 bg-transparent p-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white px-6 py-3 rounded-full border border-green/20 text-lg transition-colors hover:bg-green-50"
                >
                  {categoryNames[category] || category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((product: Product, index: number) => (
                  <div
                    key={`${product.name}-${index}`}
                    className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100"
                  >
                    <div className="relative h-80 overflow-hidden bg-white p-2 flex items-center justify-center">
                      <img
                        src={getImagePath(product.path)}
                        alt={product.name}
                        className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 text-center border-t border-gray-100">
                      <h3 className="font-semibold text-lg text-foreground truncate" title={product.name}>
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          handlePageChange(currentPage - 1)
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault()
                            handlePageChange(page)
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          handlePageChange(currentPage + 1)
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
