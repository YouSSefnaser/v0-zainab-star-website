"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Filter, Grid, List, Search, Heart, Eye, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function ProductsPage() {
  const [wishlistCount, setWishlistCount] = useState(0)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsVisible(true)
    // Get category from URL params
    const category = searchParams.get("category")
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const addToWishlist = (productName: string) => {
    setWishlistCount((prev) => prev + 1)
    alert(`${productName} added to wishlist!`)
  }

  const handleViewWishlist = () => {
    alert(`Wishlist contains ${wishlistCount} items`)
  }

  const handleViewProduct = (productName: string) => {
    alert(`Viewing details for: ${productName}`)
  }

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSortBy("featured")
  }

  const handleInquireProduct = (productName: string) => {
    router.push(`/support?product=${encodeURIComponent(productName)}`)
  }

  const handleContactUs = () => {
    router.push("/support")
  }

  const products = [
    {
      id: 1,
      name: "MacBook Pro M3 16-inch",
      price: "Starting from $2,399",
      category: "laptops",
      rating: 4.9,
      reviews: 128,
      badge: "Best Seller",
      inStock: true,
      description:
        "The most powerful MacBook Pro ever, featuring the revolutionary M3 chip with 12-core CPU and 18-core GPU. Perfect for professional video editing, 3D rendering, and intensive creative workflows. Features a stunning 16-inch Liquid Retina XDR display with 1000 nits sustained brightness.",
      specs: ["M3 Pro Chip", "16GB Unified Memory", "512GB SSD", "16-inch Liquid Retina XDR"],
      features: [
        "Up to 22 hours battery life",
        "Three Thunderbolt 4 ports",
        "MagSafe 3 charging",
        "1080p FaceTime HD camera",
      ],
      image: "/images/macbook-pro-m3-16.png",
    },
    {
      id: 2,
      name: "Gaming Laptop RTX 4080",
      price: "Starting from $1,899",
      category: "gaming",
      rating: 4.8,
      reviews: 89,
      badge: "New Arrival",
      inStock: true,
      description:
        "Ultimate gaming performance with NVIDIA GeForce RTX 4080, Intel Core i7-13700HX, and 165Hz QHD display. Dominate every game with ray tracing and DLSS 3 technology. Advanced cooling system keeps temperatures low during intense gaming sessions.",
      specs: ["RTX 4080 16GB", "Intel i7-13700HX", "32GB DDR5", "165Hz QHD Display"],
      features: ["RGB Mechanical Keyboard", "Advanced Cooling System", "Wi-Fi 6E", "Thunderbolt 4"],
      image: "/images/gaming-laptop-rtx-4080.png",
    },
    {
      id: 3,
      name: "Gaming Headset Pro X",
      price: "Starting from $299",
      category: "audio",
      rating: 4.6,
      reviews: 167,
      badge: "Popular",
      inStock: true,
      description:
        "Professional gaming headset with 7.1 surround sound, active noise cancellation, and premium comfort. Crystal-clear communication and immersive audio experience for competitive gaming and entertainment.",
      specs: ["7.1 Surround Sound", "Active Noise Cancellation", "50mm Drivers", "Wireless & Wired"],
      features: [
        "40-hour battery life",
        "Quick charge 15min = 6hrs",
        "Detachable microphone",
        "Multi-platform compatibility",
      ],
      image: "/images/gaming-headset-pro-x.png",
    },
    {
      id: 4,
      name: '4K Gaming Monitor 32"',
      price: "Starting from $599",
      category: "monitors",
      rating: 4.8,
      reviews: 134,
      badge: "Editor's Choice",
      inStock: true,
      description:
        "Professional 4K gaming monitor with 144Hz refresh rate, HDR10 support, and ultra-low input lag. Perfect for competitive gaming and content creation with stunning color accuracy and smooth gameplay.",
      specs: ["4K UHD Resolution", "144Hz Refresh Rate", "1ms Response Time", "HDR10 Support"],
      features: ["G-Sync Compatible", "USB-C Hub", "Height Adjustable Stand", "Blue Light Filter"],
      image: "/images/4k-gaming-monitor-32.png",
    },
    {
      id: 5,
      name: "Mechanical Gaming Keyboard",
      price: "Starting from $149",
      category: "accessories",
      rating: 4.5,
      reviews: 98,
      badge: "Sale",
      inStock: true,
      description:
        "Premium mechanical gaming keyboard with Cherry MX switches, RGB backlighting, and programmable keys. Built for durability and performance with tactile feedback that enhances your gaming experience.",
      specs: ["Cherry MX Red Switches", "RGB Backlighting", "Aluminum Frame", "USB-C Connection"],
      features: ["Hot-swappable switches", "Programmable macros", "Media controls", "Detachable cable"],
      image: "/images/mechanical-gaming-keyboard.png",
    },
    {
      id: 6,
      name: "Wireless Gaming Mouse",
      price: "Starting from $89",
      category: "accessories",
      rating: 4.4,
      reviews: 76,
      badge: "New",
      inStock: true,
      description:
        "High-precision wireless gaming mouse with 25,600 DPI sensor, customizable RGB lighting, and ergonomic design. Ultra-fast wireless connectivity with zero lag for competitive gaming.",
      specs: ["25,600 DPI Sensor", "Wireless 2.4GHz", "RGB Lighting", "Ergonomic Design"],
      features: ["70-hour battery life", "6 programmable buttons", "On-the-fly DPI switching", "Lightweight 65g"],
      image: "/images/wireless-gaming-mouse.png",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 transform transition-all duration-800 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
            <div className="animate-spin-slow">
              <Star className="h-8 w-8 text-orange-500" />
            </div>
            <span className="text-2xl font-bold text-gray-900 glitch-text">Zainab Star</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products", active: true },
              { name: "About Us", href: "/about" },
              { name: "Our Partners", href: "/partners" },
              { name: "Support", href: "/support" },
              { name: "Testimonials", href: "/testimonials" },
            ].map((item, index) => (
              <div
                key={item.name}
                className={`transform transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-110 relative group ${
                    item.active ? "text-orange-500" : "hover:text-orange-500"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                      item.active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hover:scale-110 transition-transform duration-300">
              <Button variant="outline" size="sm" onClick={handleViewWishlist}>
                <Heart className="h-4 w-4 mr-2" />
                Wishlist
                {wishlistCount > 0 && <Badge className="ml-2 bg-red-500 text-white text-xs">{wishlistCount}</Badge>}
              </Button>
            </div>
            <div className="relative hover:scale-110 transition-transform duration-300">
              <Button
                className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                onClick={handleContactUs}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-r from-orange-50 to-amber-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div
                className="w-full h-full animate-pulse"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fb923c' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat",
                }}
              />
            </div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div
              className={`text-center transform transition-all duration-800 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Our Products
              </h1>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Discover our comprehensive range of premium technology products
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 border-b bg-white/80 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div
              className={`flex flex-col md:flex-row gap-4 items-center justify-between transform transition-all duration-600 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 transition-all duration-300 focus:ring-2 focus:ring-orange-500/20"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px] transition-all duration-300 hover:border-orange-300">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="laptops">Laptops</SelectItem>
                    <SelectItem value="gaming">Gaming</SelectItem>
                    <SelectItem value="audio">Audio</SelectItem>
                    <SelectItem value="monitors">Monitors</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[180px] transition-all duration-300 hover:border-orange-300">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <div className="hover:scale-105 transition-transform duration-300">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-orange-50 transition-all duration-300 bg-transparent"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>
                <div className="flex border rounded-md overflow-hidden">
                  <div className="hover:scale-95 transition-transform duration-200">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      className="border-r rounded-none"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="hover:scale-95 transition-transform duration-200">
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-none"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div
              className={`grid gap-6 ${viewMode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"} transform transition-all duration-600 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`group animate-fade-in-up hover:scale-103 hover:rotate-1 transition-all duration-500 card-hover`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card
                    className={`group hover:shadow-xl transition-all duration-500 overflow-hidden bg-white/90 backdrop-blur-sm border-0 ${viewMode === "list" ? "flex flex-row" : ""}`}
                  >
                    <div className={`relative overflow-hidden ${viewMode === "list" ? "w-1/3" : ""}`}>
                      <div className="relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          width="350"
                          height="250"
                          alt={product.name}
                          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
                            viewMode === "list" ? "aspect-square" : "aspect-[4/3] w-full"
                          }`}
                        />

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex space-x-2">
                            <div className="hover:scale-110 transition-transform duration-300">
                              <Button
                                size="sm"
                                variant="secondary"
                                className="bg-white/90 hover:bg-white"
                                onClick={() => handleViewProduct(product.name)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </div>
                            <div className="hover:scale-110 transition-transform duration-300">
                              <Button
                                size="sm"
                                variant="secondary"
                                className="bg-white/90 hover:bg-white"
                                onClick={() => addToWishlist(product.name)}
                              >
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>

                        <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600 animate-pulse">
                          {product.badge}
                        </Badge>
                      </div>
                    </div>

                    <div className={`p-4 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                      <div>
                        <div className="mb-2">
                          <Badge variant="outline" className="text-xs capitalize">
                            {product.category}
                          </Badge>
                        </div>

                        <h3
                          className={`font-semibold mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300 ${
                            viewMode === "list" ? "text-xl" : "text-lg"
                          }`}
                        >
                          {product.name}
                        </h3>

                        <p
                          className={`text-gray-600 mb-3 leading-relaxed ${
                            viewMode === "list" ? "line-clamp-3 text-sm" : "line-clamp-2 text-sm"
                          }`}
                        >
                          {product.description}
                        </p>

                        {/* Specs */}
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1">
                            {product.specs.slice(0, viewMode === "list" ? 4 : 2).map((spec, specIndex) => (
                              <Badge key={specIndex} variant="outline" className="text-xs bg-gray-50">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                                <Star
                                  className={`h-4 w-4 ${
                                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                                  }`}
                                />
                              </div>
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 ml-2">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <span
                              className={`font-bold text-orange-600 ${viewMode === "list" ? "text-xl" : "text-lg"}`}
                            >
                              {product.price}
                            </span>
                          </div>
                        </div>

                        <div className={`flex gap-2 ${viewMode === "list" ? "flex-row" : "flex-col sm:flex-row"}`}>
                          <div className="flex-1 hover:scale-105 transition-transform duration-300">
                            <Button
                              size="sm"
                              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 btn-hover-effect"
                              onClick={() => handleInquireProduct(product.name)}
                            >
                              <Phone className="h-4 w-4 mr-2" />
                              Inquire Now
                            </Button>
                          </div>
                          <div className="hover:scale-105 transition-transform duration-300">
                            <Button
                              variant="outline"
                              size="sm"
                              className="hover:bg-orange-50 transition-all duration-300 bg-transparent"
                              onClick={() => handleViewProduct(product.name)}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            {/* No products found */}
            {filteredProducts.length === 0 && (
              <div className={`text-center py-12 animate-fade-in-up ${isVisible ? "opacity-100" : "opacity-0"}`}>
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  className="hover:bg-orange-50 transition-all duration-300 bg-transparent"
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div
                className={`flex justify-center mt-12 animate-fade-in-up ${isVisible ? "opacity-100" : "opacity-0"}`}
                style={{ animationDelay: "300ms" }}
              >
                <div className="flex items-center space-x-2">
                  <div className="hover:scale-105 transition-transform duration-300">
                    <Button
                      variant="outline"
                      disabled
                      className="hover:bg-orange-50 transition-all duration-300 bg-transparent"
                    >
                      Previous
                    </Button>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <Button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300">1</Button>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <Button variant="outline" className="hover:bg-orange-50 transition-all duration-300 bg-transparent">
                      2
                    </Button>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <Button variant="outline" className="hover:bg-orange-50 transition-all duration-300 bg-transparent">
                      3
                    </Button>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <Button variant="outline" className="hover:bg-orange-50 transition-all duration-300 bg-transparent">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <div className="animate-spin-slow">
                  <Star className="h-8 w-8 text-orange-500" />
                </div>
                <span className="text-2xl font-bold">Zainab Star</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading technology platform showcasing premium solutions across the Middle East and Africa.
              </p>
            </div>

            {[
              {
                title: "Products",
                links: [
                  { name: "Laptops", action: () => setSelectedCategory("laptops") },
                  { name: "Gaming Equipment", action: () => setSelectedCategory("gaming") },
                  { name: "Audio & Accessories", action: () => setSelectedCategory("audio") },
                  { name: "Monitors", action: () => setSelectedCategory("monitors") },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", href: "/about" },
                  { name: "Our Partners", href: "/partners" },
                  { name: "Testimonials", href: "/testimonials" },
                  { name: "Support", href: "/support" },
                ],
              },
              {
                title: "Contact",
                links: [
                  { name: "Email: info@zainabstar.com", href: "mailto:info@zainabstar.com" },
                  { name: "Phone: +971 4 123 4567", href: "tel:+97141234567" },
                  { name: "Address: Dubai, UAE", action: () => alert("Opening map...") },
                ],
              },
            ].map((section, index) => (
              <div key={section.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hover:translate-x-1 transition-transform duration-300">
                      {link.href ? (
                        link.href.startsWith("mailto:") || link.href.startsWith("tel:") ? (
                          <a href={link.href} className="hover:text-white transition-colors duration-300">
                            {link.name}
                          </a>
                        ) : (
                          <Link href={link.href} className="hover:text-white transition-colors duration-300">
                            {link.name}
                          </Link>
                        )
                      ) : (
                        <button
                          onClick={link.action}
                          className="hover:text-white transition-colors duration-300 text-left"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 animate-fade-in"
            style={{ animationDelay: "400ms" }}
          >
            <p>&copy; {new Date().getFullYear()} Zainab Star. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
