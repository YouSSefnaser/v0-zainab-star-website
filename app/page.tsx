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
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" us", "").replace(/\s+/g, "-")}`}
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
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width=\'60\'
 height=\'60\'
 viewBox=\'0 0 60 60\'
 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\'
 fillRule=\'evenodd\'%3E%3Cg fill=\'%23fb923c\'
 fillOpacity=\'0.1\'%3E%3Ccircle cx=\'30\'
 cy=\'30\'
 r=\'2\'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E" )`,
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
                      <CardDescription className="text-sm leading-relaxed text-gray-500">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center pb-6">
                      <Button
                        variant="outline"
                        className="hover:bg-orange-50 transition-all duration-300"
                        onClick={() => handleCategoryClick(category.category)}
                      >
                        View {category.title}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="animate-fade-in-left">
                <Image
                  src="/images/company-journey.png"
                  width="600"
                  height="400"
                  alt="About Zainab Star"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 animate-fade-in-right">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Our Story</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
                  Pioneering Technology in the MENA Region
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Zainab Star is a leading technology provider dedicated to bringing the latest innovations to the Middle
                  East and Africa. With a focus on quality, reliability, and customer satisfaction, we strive to empower
                  businesses and individuals with cutting-edge solutions.
                </p>
                <Link
                  href="/about"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Partners Section */}
        <section className="py-16 lg:py-24 relative">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Our Valued Partners
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Collaborating with industry leaders to bring you the best technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center items-center">
              {[
                { src: "/images/partners/ctroniq-logo.png", alt: "Ctronics Logo" },
                { src: "/images/partners/elari-logo.png", alt: "Elari Logo" },
                { src: "/images/partners/lindy-logo.png", alt: "Lindy Logo" },
                { src: "/images/partners/olympia-logo.png", alt: "Olympia Logo" },
                { src: "/images/partners/trevi-logo.png", alt: "Trevi Logo" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Image src={partner.src} width="120" height="60" alt={partner.alt} className="object-contain" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12 animate-fade-in-up">
              <Link
                href="/partners"
                className="inline-flex h-10 items-center justify-center rounded-md bg-orange-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-950 disabled:pointer-events-none disabled:opacity-50"
              >
                View All Partners
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-yellow-50 relative">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Hear directly from our satisfied customers about their experience with Zainab Star.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="animate-fade-in-up hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/testimonials/professional-man-avatar.png"
                      width="64"
                      height="64"
                      alt="Client Avatar"
                      className="rounded-full mr-4 border-2 border-orange-300"
                    />
                    <div>
                      <p className="font-semibold text-lg">Ahmed Al-Farsi</p>
                      <p className="text-sm text-gray-500">CEO, Tech Solutions Inc.</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Zainab Star has consistently provided us with top-notch IT solutions. Their expertise and customer
                    service are unparalleled. Highly recommended!"
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: "100ms" }}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/testimonials/professional-woman-avatar.png"
                      width="64"
                      height="64"
                      alt="Client Avatar"
                      className="rounded-full mr-4 border-2 border-yellow-300"
                    />
                    <div>
                      <p className="font-semibold text-lg">Fatima Zahra</p>
                      <p className="text-sm text-gray-500">Marketing Director, Innovate Corp.</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "The gaming equipment we sourced from Zainab Star transformed our e-sports arena. Quality products
                    and excellent support. A true partner!"
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-fade-in-up hover:shadow-xl transition-shadow duration-300" style={{ animationDelay: "200ms" }}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src="/images/testimonials/professional-man-avatar.png"
                      width="64"
                      height="64"
                      alt="Client Avatar"
                      className="rounded-full mr-4 border-2 border-amber-300"
                    />
                    <div>
                      <p className="font-semibold text-lg">Omar Abdullah</p>
                      <p className="text-sm text-gray-500">IT Manager, Global Enterprises</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "Their range of monitors and accessories is impressive. Zainab Star helped us set up our new office
                    with the best display solutions. Fantastic service!"
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 animate-fade-in-up">
              <Link
                href="/testimonials"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950 disabled:pointer-events-none disabled:opacity-50"
              >
                Read All Testimonials
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-100 to-gray-200 relative">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 animate-fade-in-left">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Get in Touch</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
                  Have Questions? We\"re Here to Help.
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Whether you need assistance with product selection, technical support, or partnership inquiries, our
                  team is ready to provide expert guidance.
                </p>
                <Button
                  className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-950 disabled:pointer-events-none disabled:opacity-50"
                  onClick={handleContactUs}
                >
                  Contact Our Team
                </Button>
              </div>
              <div className="animate-fade-in-right">
                <Image
                  src="/images/partnership-success.png"
                  width="600"
                  height="400"
                  alt="Contact Us"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Zainab Star</h3>
            <p className="text-gray-400">
              Your trusted partner for cutting-edge technology solutions in the MENA region.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.007 3.792.052 1.01.045 1.79.204 2.428.465.66.275 1.21.593 1.77.96.472.308.864.696 1.272 1.104.408.408.796.904 1.104 1.272.367.56.69 1.118.96 1.77.262.638.42 1.418.465 2.428.045 1.008.052 1.358.052 3.792s-.007 2.784-.052 3.792c-.045 1.01-.204 1.79-.465 2.428-.275.66-.593 1.21-.96 1.77-.308.472-.696.864-1.104 1.272-.408.408-.904.796-1.272 1.104-.56.367-1.118.69-1.77.96-.638.262-1.418.42-2.428.465-1.008.045-1.358.052-3.792.052s-2.784-.007-3.792-.052c-1.01-.045-1.79-.204-2.428-.465-.66-.275-1.21-.593-1.77-.96-.308-.472-.696-.864-1.104-1.272-.408-.408-.796-.904-1.272-1.104-.367-.56-.69-1.118-.96-1.77-.262-.638-.42-1.418-.465-2.428-.045-1.008-.052-1.358-.052-3.792s.007-2.784.052-3.792c.045-1.01.204 1.79.465 2.428.275-.66.593-1.21.96-1.77.308-.472.696-.864 1.104-1.272.408-.408.904-.796 1.272-1.104.56-.367 1.118-.69 1.77-.96.638-.262 1.418-.42 2.428-.465C9.536 2.007 9.886 2 12.315 2zm0 2.16c-2.18 0-2.448.01-3.298.05-.84.038-1.45.175-1.898.344-.466.18-.79.35-1.01.57-.22.22-.39.534-.57.99-.178.448-.315 1.058-.354 1.898-.04 2.15-.04 2.418-.04 3.258 0 .84.01 1.108.04 3.298.038.84.175 1.45.344 1.898.18.466.35.79.57 1.01.22.22.534.39.99.57.448.178 1.058.315 1.898.354 2.15.04 2.418.04 3.258.04s1.108-.01 3.298-.04c.84-.038 1.45-.175 1.898-.344.466-.18.79-.35 1.01-.57.22-.22.39-.534.57-.99.178-.448.315-1.058.354-1.898.04-2.15.04-2.418.04-3.258 0-.84-.01-1.108-.04-3.298-.038-.84-.175-1.45-.344-1.898-.18-.466-.35-.79-.57-1.01-.22-.22-.534-.39-.99-.57-.448-.178-1.058-.315-1.898-.354C14.763 4.16 14.495 4.16 12.315 4.16zm0 3.615a4.545 4.545 0 100 9.09 4.545 4.545 0 000-9.09zm0 7.47a2.925 2.925 0 110-5.85 2.925 2.925 0 010 5.85z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M.05 13.916c0-1.412.63-2.73 1.688-3.916 1.058-1.186 2.42-2.12 4.08-2.794C7.49 6.63 9.3 6.25 11.25 6.25c1.95 0 3.76.38 5.482 1.046 1.66.674 3.022 1.608 4.08 2.794 1.058 1.186 1.688 2.504 1.688 3.916 0 1.412-.63 2.73-1.688 3.916-1.058 1.186-2.42 2.12-4.08-2.794C.68 16.646.05 15.328.05 13.916zM12 18.25c-3.45 0-6.25-2.8-6.25-6.25S8.55 5.75 12 5.75s6.25 2.8 6.25 6.25-2.8 6.25-6.25 6.25z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <p className="text-gray-400">
              123 Tech Avenue, Innovation City, MENA Region
            </p>
            <p className="text-gray-400">
              Email: info@zainabstar.com
            </p>
            <p className="text-gray-400">
              Phone: +971 50 123 4567
            </p>
          </div>
        </div>
        <div className="container px-4 md:px-6 text-center text-gray-500 mt-8 border-t border-gray-700 pt-8">
          &copy; 2024 Zainab Star. All rights reserved.
        </div>
      </footer>
    </div>
  )
  
}
