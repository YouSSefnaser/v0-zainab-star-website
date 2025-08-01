"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Laptop,
  Gamepad2,
  Headphones,
  Monitor,
  ArrowRight,
  Shield,
  Truck,
  Award,
  Users,
  Heart,
  Eye,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [wishlistCount, setWishlistCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const addToWishlist = (productName: string) => {
    setWishlistCount((prev) => prev + 1)
    alert(`${productName} added to wishlist!`)
  }

  const handleContactUs = () => {
    router.push("/support")
  }

  const handleViewProducts = () => {
    router.push("/products")
  }

  const handleViewCatalog = () => {
    router.push("/products")
  }

  const handleViewWishlist = () => {
    alert(`Wishlist contains ${wishlistCount} items`)
  }

  const handleCategoryClick = (category: string) => {
    router.push(`/products?category=${category.toLowerCase().replace(/\s+/g, "-")}`)
  }

  const handleViewProduct = (productName: string) => {
    alert(`Viewing details for: ${productName}`)
  }

  const handleInquireProduct = (productName: string) => {
    router.push(`/support?product=${encodeURIComponent(productName)}`)
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 animate-gradient-shift"></div>
        <div className="absolute inset-0 opacity-30">
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
          <div className="flex items-center space-x-3 group hover:scale-105 transition-transform duration-300">
            {/* Official Logo with Beautiful Effects */}
            <div className="relative">
              {/* Multiple glowing layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 rounded-xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 animate-pulse animation-delay-1000"></div>

              {/* Logo container */}
              <div className="relative bg-white rounded-xl p-2 shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-orange-100 group-hover:border-orange-200">
                <Image
                  src="/images/zainab-star-logo.png"
                  width="120"
                  height="40"
                  alt="Zainab Star Logo"
                  className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* Sparkle effects */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-70"></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-500 opacity-70"></div>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {["Home", "Products", "About Us", "Our Partners", "Support", "Testimonials"].map((item, index) => (
              <div
                key={item}
                className={`transform transition-all duration-500 ${
                  isVisible ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm font-medium hover:text-orange-500 transition-all duration-300 hover:scale-110 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
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
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-100 parallax-bg"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div
                    className={`transform transition-all duration-800 ${
                      isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                    }`}
                  >
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 animate-pulse">
                      Leading Tech Solutions in MENA
                    </Badge>
                  </div>

                  <h1
                    className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent transform transition-all duration-1000 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  >
                    Premium Technology Solutions for the Modern World
                  </h1>

                  <p
                    className={`max-w-[600px] text-gray-600 md:text-xl transform transition-all duration-1000 ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: "400ms" }}
                  >
                    Discover cutting-edge laptops, gaming equipment, monitors, and IT services. Zainab Star showcases
                    excellence across the Middle East and Africa.
                  </p>
                </div>

                <div
                  className={`flex flex-col gap-2 min-[400px]:flex-row transform transition-all duration-1000 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 btn-hover-effect"
                      onClick={handleViewProducts}
                    >
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="hover:scale-110 transition-transform duration-300">
                    <Button
                      variant="outline"
                      size="lg"
                      className="hover:bg-orange-50 transition-all duration-300 bg-transparent"
                      onClick={handleViewCatalog}
                    >
                      View Catalog
                    </Button>
                  </div>
                </div>

                <div
                  className={`flex items-center space-x-4 text-sm text-gray-600 transform transition-all duration-1000 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  {[
                    { icon: Shield, text: "Warranty Protected", color: "text-green-500" },
                    { icon: Truck, text: "Fast Delivery", color: "text-blue-500" },
                    { icon: Award, text: "Certified Quality", color: "text-purple-500" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center hover:scale-110 transition-transform duration-300">
                      <item.icon className={`h-4 w-4 mr-1 ${item.color}`} />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`flex items-center justify-center transform transition-all duration-1000 ${
                  isVisible ? "scale-100 opacity-100 rotate-0" : "scale-80 opacity-0 rotate-12"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="hover:scale-105 hover:rotate-1 transition-all duration-500 card-hover">
                  <Image
                    src="/images/team-member.png"
                    width="600"
                    height="400"
                    alt="Zainab Star Technology Expert"
                    className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl hover:shadow-orange-500/25 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-16 lg:py-24 relative">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our Product Categories
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions designed to meet your every need
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Laptop,
                  title: "Laptops & Computers",
                  description:
                    "High-performance laptops and desktop computers for work, gaming, and creativity. From ultrabooks to gaming rigs, we showcase the perfect machine for every need.",
                  color: "orange",
                  image: "/images/macbook-pro-m3-16.png",
                  category: "laptops",
                },
                {
                  icon: Gamepad2,
                  title: "Gaming Equipment",
                  description:
                    "Professional gaming gear and accessories for the ultimate gaming experience. Dominate your games with premium gaming hardware and peripherals.",
                  color: "purple",
                  image: "/images/gaming-laptop-rtx-4080.png",
                  category: "gaming",
                },
                {
                  icon: Headphones,
                  title: "Audio & Accessories",
                  description:
                    "Premium headphones, keyboards, mice and tech accessories for enhanced productivity. Crystal-clear audio and precision control for work and entertainment.",
                  color: "green",
                  image: "/images/gaming-headset-pro-x.png",
                  category: "audio",
                },
                {
                  icon: Monitor,
                  title: "Monitors & Displays",
                  description:
                    "High-resolution monitors and displays for professional and gaming applications. From 4K displays to ultra-wide gaming monitors.",
                  color: "blue",
                  image: "/images/4k-gaming-monitor-32.png",
                  category: "monitors",
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className={`group cursor-pointer animate-fade-in-up hover:scale-105 hover:rotate-1 transition-all duration-500 card-hover`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-500 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        width="400"
                        height="200"
                        alt={category.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
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

                    <CardHeader className="text-center">
                      <div
                        className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${category.color}-100 group-hover:bg-${category.color}-200 transition-all duration-300 hover:rotate-12`}
                      >
                        <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                      </div>
                      <CardTitle className="group-hover:text-orange-600 transition-colors duration-300">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{category.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="hover:scale-105 transition-transform duration-300">
                        <Button
                          variant="outline"
                          className={`w-full group-hover:bg-${category.color}-50 bg-transparent transition-all duration-300 hover:shadow-md btn-hover-effect`}
                          onClick={() => handleCategoryClick(category.category)}
                        >
                          Explore {category.title.split(" ")[0]}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 lg:py-24 bg-gray-50/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Discover our most popular and highly-rated technology products
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "MacBook Pro M3 16-inch",
                  price: "Starting from $2,399",
                  rating: 4.9,
                  reviews: 128,
                  badge: "Best Seller",
                  description:
                    "The most powerful MacBook Pro ever, featuring the revolutionary M3 chip with 12-core CPU and 18-core GPU. Perfect for professional video editing, 3D rendering, and intensive creative workflows.",
                  specs: ["M3 Pro Chip", "16GB Unified Memory", "512GB SSD", "16-inch Liquid Retina XDR"],
                  image: "/images/macbook-pro-m3-16.png",
                },
                {
                  name: "Gaming Laptop RTX 4080",
                  price: "Starting from $1,899",
                  rating: 4.8,
                  reviews: 89,
                  badge: "New Arrival",
                  description:
                    "Ultimate gaming performance with NVIDIA GeForce RTX 4080, Intel Core i7-13700HX, and 165Hz display. Dominate every game with ray tracing and DLSS 3 technology.",
                  specs: ["RTX 4080 16GB", "Intel i7-13700HX", "32GB DDR5", "165Hz QHD Display"],
                  image: "/images/gaming-laptop-rtx-4080.png",
                },
                {
                  name: "Gaming Headset Pro X",
                  price: "Starting from $299",
                  rating: 4.7,
                  reviews: 167,
                  badge: "Popular",
                  description:
                    "Professional gaming headset with 7.1 surround sound, noise cancellation, and premium comfort. Crystal-clear communication and immersive audio experience.",
                  specs: ["7.1 Surround Sound", "Noise Cancellation", "50mm Drivers", "Wireless & Wired"],
                  image: "/images/gaming-headset-pro-x.png",
                },
                {
                  name: '4K Gaming Monitor 32"',
                  price: "Starting from $599",
                  rating: 4.8,
                  reviews: 134,
                  badge: "Editor's Choice",
                  description:
                    "Professional 4K gaming monitor with 144Hz refresh rate, HDR10 support, and ultra-low input lag. Perfect for competitive gaming and content creation.",
                  specs: ["4K UHD Resolution", "144Hz Refresh Rate", "1ms Response Time", "HDR10 Support"],
                  image: "/images/4k-gaming-monitor-32.png",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className={`group animate-fade-in-up hover:scale-103 hover:rotate-1 transition-all duration-500 card-hover`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-500 overflow-hidden bg-white/90 backdrop-blur-sm border-0">
                    <CardHeader className="p-0 relative overflow-hidden">
                      <div className="relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          width="350"
                          height="250"
                          alt={product.name}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
                          <button onClick={() => handleViewProduct(product.name)}>
                            <Eye className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                        <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-600 animate-pulse">
                          {product.badge}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`animate-fade-in`} style={{ animationDelay: `${i * 100}ms` }}>
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

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-orange-600">{product.price}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <div className="flex-1 hover:scale-105 transition-transform duration-300">
                          <Button
                            size="sm"
                            className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 btn-hover-effect"
                            onClick={() => handleInquireProduct(product.name)}
                          >
                            Inquire Now
                          </Button>
                        </div>
                        <div className="hover:scale-110 transition-transform duration-300">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addToWishlist(product.name)}
                            className="hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-all duration-300"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="hover:scale-105 transition-transform duration-300">
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 bg-transparent btn-hover-effect"
                  onClick={handleViewProducts}
                >
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Zainab Star?</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                We're committed to delivering exceptional technology solutions with unmatched service
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Shield,
                  title: "Quality Guarantee",
                  description:
                    "All products come with comprehensive warranty and quality assurance. We stand behind every product we showcase with full manufacturer support.",
                  color: "orange",
                },
                {
                  icon: Truck,
                  title: "Fast Delivery",
                  description:
                    "Quick and secure shipping across the Middle East and Africa. Same-day delivery available in major cities with real-time tracking.",
                  color: "blue",
                },
                {
                  icon: Users,
                  title: "Expert Support",
                  description:
                    "24/7 technical support and customer service from our expert team. Certified technicians ready to help with any technical issues.",
                  color: "green",
                },
                {
                  icon: Award,
                  title: "Trusted Brand",
                  description:
                    "Years of experience serving customers with premium technology solutions. Award-winning customer service and industry recognition.",
                  color: "purple",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`text-center group animate-fade-in-up hover:scale-105 hover:-translate-y-2 transition-all duration-500`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${feature.color}-100 group-hover:bg-${feature.color}-200 transition-all duration-300 hover:rotate-12`}
                  >
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials Preview */}
        <section className="py-16 lg:py-24 bg-gray-50/50 backdrop-blur-sm">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Hear from satisfied customers across the Middle East and Africa
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Ahmed Hassan",
                  location: "Dubai, UAE",
                  rating: 5,
                  comment:
                    "Excellent service and high-quality products. My gaming laptop arrived quickly and works perfectly! The customer support team was incredibly helpful throughout the entire process.",
                  image: "/images/testimonials/professional-man-avatar.png",
                },
                {
                  name: "Fatima Al-Zahra",
                  location: "Cairo, Egypt",
                  rating: 5,
                  comment:
                    "Outstanding customer support. They helped me choose the perfect laptop for my business needs. The delivery was fast and the product exceeded my expectations.",
                  image: "/images/testimonials/professional-woman-avatar.png",
                },
                {
                  name: "Omar Benali",
                  location: "Casablanca, Morocco",
                  rating: 5,
                  comment:
                    "Great prices and authentic products. Zainab Star is my go-to for all tech purchases. The quality is consistently excellent and shipping is reliable.",
                  image: "/images/testimonials/professional-man-avatar.png",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`animate-fade-in-up hover:scale-103 hover:rotate-1 transition-all duration-500 card-hover`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="p-6 hover:shadow-xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        width="50"
                        height="50"
                        alt={testimonial.name}
                        className="rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed">"{testimonial.comment}"</p>
                  </Card>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <div className="hover:scale-105 transition-transform duration-300">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:bg-orange-50 hover:border-orange-300 transition-all duration-300 bg-transparent btn-hover-effect"
                >
                  <Link href="/testimonials">
                    Read More Reviews
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-amber-500 relative overflow-hidden animate-fade-in">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div
                className="w-full h-full animate-pulse"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: "repeat",
                }}
              />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center text-white animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Ready to Explore Our Tech?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join thousands of satisfied customers and discover the latest in technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="hover:scale-105 hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-orange-600 hover:bg-gray-100 transition-all duration-300 btn-hover-effect"
                    onClick={handleViewProducts}
                  >
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="hover:scale-105 transition-transform duration-300">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent transition-all duration-300"
                    onClick={handleContactUs}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-4 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src="/images/zainab-star-logo.png"
                      width="120"
                      height="40"
                      alt="Zainab Star Logo"
                      className="h-8 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Leading technology platform showcasing premium solutions across the Middle East and Africa.
              </p>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "Instagram"].map((social, index) => (
                  <div key={social} className="hover:scale-120 hover:-translate-y-1 transition-all duration-300">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      onClick={() => alert(`Opening ${social} page...`)}
                    >
                      {social}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "Products",
                links: [
                  { name: "Laptops", href: "/products?category=laptops" },
                  { name: "Gaming Equipment", href: "/products?category=gaming" },
                  { name: "Audio & Accessories", href: "/products?category=audio" },
                  { name: "Monitors", href: "/products?category=monitors" },
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
                  { name: "Email: info@head-links.com", href: "mailto:info@head-links.com" },
                  { name: "Phone: +971 56 455 4437", href: "tel:+971564554437" },
                  { name: "Address: 201 BB03 Bay Square, Business Bay, Dubai, UAE", href: "#" },
                ],
              },
            ].map((section, index) => (
              <div key={section.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-400">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hover:translate-x-1 transition-transform duration-300">
                      {section.title === "Contact" && (link.name.includes("Email") || link.name.includes("Phone")) ? (
                        <a href={link.href} className="hover:text-white transition-colors duration-300">
                          {link.name}
                        </a>
                      ) : section.title === "Contact" ? (
                        <span>{link.name}</span>
                      ) : (
                        <Link href={link.href} className="hover:text-white transition-colors duration-300">
                          {link.name}
                        </Link>
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
