"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, MapPin, Calendar, ThumbsUp, Users, Award } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function TestimonialsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const handleWriteReview = () => {
    alert("Thank you for wanting to share your experience! Our review form will open shortly.")
  }

  const handleUploadPhotos = () => {
    alert("Photo upload feature coming soon! You can attach photos to your review.")
  }

  const handleLoadMore = () => {
    alert("Loading more reviews...")
    setCurrentPage((prev) => prev + 1)
  }

  const handleHelpfulClick = (reviewId: number, reviewerName: string) => {
    alert(`Thank you for marking ${reviewerName}'s review as helpful!`)
  }

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      location: "Dubai, UAE",
      role: "Software Engineer",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent service and high-quality products. My gaming laptop arrived quickly and works perfectly! The customer support team was incredibly helpful throughout the entire process.",
      product: "Gaming Laptop RTX 4080",
      verified: true,
      helpful: 24,
      avatar: "/images/testimonials/professional-man-avatar.png",
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      location: "Cairo, Egypt",
      role: "Business Owner",
      rating: 5,
      date: "1 month ago",
      comment:
        "Outstanding customer support. They helped me choose the perfect laptop for my business needs. The delivery was fast and the product exceeded my expectations.",
      product: "MacBook Pro M3",
      verified: true,
      helpful: 18,
      avatar: "/images/testimonials/professional-woman-avatar.png",
    },
    {
      id: 3,
      name: "Omar Benali",
      location: "Casablanca, Morocco",
      role: "Graphic Designer",
      rating: 5,
      date: "3 weeks ago",
      comment:
        "Great prices and authentic products. Zainab Star is my go-to for all tech purchases. The quality is consistently excellent and shipping is reliable.",
      product: "4K Design Monitor",
      verified: true,
      helpful: 31,
      avatar: "/images/testimonials/professional-man-avatar.png",
    },
    {
      id: 4,
      name: "Sarah Al-Mahmoud",
      location: "Riyadh, Saudi Arabia",
      role: "Marketing Manager",
      rating: 5,
      date: "2 months ago",
      comment:
        "Professional service from start to finish. The team was knowledgeable and helped me find exactly what I needed for my home office setup.",
      product: "Complete Office Setup",
      verified: true,
      helpful: 15,
      avatar: "/images/testimonials/professional-woman-avatar.png",
    },
    {
      id: 5,
      name: "Khalid Al-Rashid",
      location: "Kuwait City, Kuwait",
      role: "Student",
      rating: 4,
      date: "1 week ago",
      comment:
        "Good experience overall. The laptop I ordered arrived on time and in perfect condition. Customer service was responsive when I had questions.",
      product: "Student Laptop Package",
      verified: true,
      helpful: 12,
      avatar: "/images/testimonials/professional-man-avatar.png",
    },
    {
      id: 6,
      name: "Layla Mansouri",
      location: "Tunis, Tunisia",
      role: "Content Creator",
      rating: 5,
      date: "3 months ago",
      comment:
        "Amazing quality and fast shipping! The gaming setup I purchased has transformed my content creation workflow. Highly recommend Zainab Star!",
      product: "Gaming & Streaming Setup",
      verified: true,
      helpful: 28,
      avatar: "/images/testimonials/professional-woman-avatar.png",
    },
    {
      id: 7,
      name: "Hassan Al-Farisi",
      location: "Doha, Qatar",
      role: "IT Manager",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Purchased multiple laptops for our office. Excellent bulk pricing and professional handling. The team made the entire process seamless.",
      product: "Bulk Laptop Order",
      verified: true,
      helpful: 22,
      avatar: "/images/testimonials/professional-man-avatar.png",
    },
    {
      id: 8,
      name: "Amina Khoury",
      location: "Beirut, Lebanon",
      role: "Photographer",
      rating: 5,
      date: "1 month ago",
      comment:
        "The MacBook Pro I ordered is perfect for my photography work. Fast delivery and excellent packaging. Will definitely order again!",
      product: "MacBook Pro 16-inch",
      verified: true,
      helpful: 19,
      avatar: "/images/testimonials/professional-woman-avatar.png",
    },
  ]

  const stats = [
    { label: "Total Reviews", value: "12,500+", icon: Users },
    { label: "Average Rating", value: "4.9/5", icon: Star },
    { label: "Verified Purchases", value: "98%", icon: Award },
    { label: "Response Rate", value: "100%", icon: ThumbsUp },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-gray-900">Zainab Star</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-orange-500 transition-colors">
              About Us
            </Link>
            <Link href="/partners" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Our Partners
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Support
            </Link>
            <Link href="/testimonials" className="text-sm font-medium text-orange-500">
              Testimonials
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleWriteReview}>
            Write Review
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">Customer Reviews</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
                What Our Customers Say
              </h1>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-xl mb-8">
                Read authentic reviews from satisfied customers across the Middle East and Africa. Their experiences
                speak to our commitment to excellence and customer satisfaction.
              </p>
              <div className="flex items-center justify-center space-x-2 mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <span className="text-gray-600">out of 5 stars</span>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <stat.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Customer Stories</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Detailed experiences from our valued customers
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/images/testimonials/professional-man-avatar.png" />
                      <AvatarFallback>AH</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-semibold">Ahmed Hassan</h3>
                        <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>Dubai, UAE</span>
                        <span>•</span>
                        <span>Software Engineer</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">2 weeks ago</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-8 w-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "I've been a customer of Zainab Star for over two years now, and they never disappoint. Recently
                    purchased a high-end gaming laptop for both work and gaming. The entire process was seamless - from
                    browsing their website to receiving the product. The laptop arrived perfectly packaged and
                    configured exactly as requested. Their technical support team even followed up to ensure everything
                    was working perfectly. This level of service is rare in the tech industry."
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-medium">Gaming Laptop RTX 4080</span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleHelpfulClick(1, "Ahmed Hassan")}
                        className="flex items-center space-x-1 hover:text-orange-600 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span>24 people found this helpful</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/images/testimonials/professional-woman-avatar.png" />
                      <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-xl font-semibold">Fatima Al-Zahra</h3>
                        <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <MapPin className="h-4 w-4" />
                        <span>Cairo, Egypt</span>
                        <span>•</span>
                        <span>Business Owner</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">1 month ago</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-8 w-8 text-orange-500 mb-4" />
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "As a business owner, I needed reliable technology solutions for my growing company. Zainab Star's
                    business consultation service was invaluable. They helped me choose the right laptops for my team,
                    provided bulk pricing, and even offered extended warranty options. The delivery was coordinated
                    perfectly, and all devices came pre-configured with our business software. Their ongoing support has
                    been exceptional, making them a true technology partner for our business."
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="font-medium">Business Laptop Package</span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleHelpfulClick(2, "Fatima Al-Zahra")}
                        className="flex items-center space-x-1 hover:text-orange-600 transition-colors"
                      >
                        <ThumbsUp className="h-4 w-4" />
                        <span>18 people found this helpful</span>
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* All Reviews */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Customer Reviews</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Authentic feedback from our customers across the region
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          {testimonial.verified && (
                            <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                          <MapPin className="h-3 w-3" />
                          <span>{testimonial.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <div className="flex items-center space-x-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            <span>{testimonial.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4 text-sm">"{testimonial.comment}"</p>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <span className="font-medium">{testimonial.product}</span>
                      <button
                        onClick={() => handleHelpfulClick(testimonial.id, testimonial.name)}
                        className="flex items-center space-x-1 hover:text-orange-600 transition-colors"
                      >
                        <ThumbsUp className="h-3 w-3" />
                        <span>{testimonial.helpful}</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load More Reviews
              </Button>
            </div>
          </div>
        </section>

        {/* Write Review CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="container px-4 md:px-6">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Share Your Experience
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Help other customers by sharing your experience with Zainab Star
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  onClick={handleWriteReview}
                >
                  Write a Review
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                  onClick={handleUploadPhotos}
                >
                  Upload Photos
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold">Zainab Star</span>
              </div>
              <p className="text-gray-400 mb-4">
                Leading technology platform providing premium solutions across the Middle East and Africa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Smart Devices
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Gaming Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-white transition-colors">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="mailto:info@head-links.com" className="hover:text-white transition-colors">
                    Email: info@head-links.com
                  </a>
                </li>
                <li>
                  <a href="tel:+971564554437" className="hover:text-white transition-colors">
                    Phone: +971 56 455 4437
                  </a>
                </li>
                <li>Address: 201 BB03 Bay Square, Business Bay, Dubai, UAE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zainab Star. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
