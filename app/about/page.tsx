"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter()

  const handleContactUs = () => {
    router.push("/support")
  }

  const handleShopNow = () => {
    router.push("/products")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3 group">
            {/* Official Logo with Effects */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative bg-white rounded-xl p-2 shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110">
                <Image
                  src="/images/zainab-star-logo.png"
                  width="120"
                  height="40"
                  alt="Zainab Star Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium text-orange-500">
              About Us
            </Link>
            <Link href="/partners" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Our Partners
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Support
            </Link>
            <Link href="/testimonials" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Testimonials
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleContactUs}>
            Contact Us
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 animate-pulse">
                    About Zainab Star
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Pioneering Technology Solutions Across MENA
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Since our founding, Zainab Star has been at the forefront of delivering cutting-edge technology
                    solutions to customers across the Middle East and Africa. We're committed to excellence, innovation,
                    and customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative group">
                  {/* Glowing effect around the image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <Image
                    src="/images/partnership-success.png"
                    width="600"
                    height="400"
                    alt="Zainab Star Team"
                    className="relative aspect-video overflow-hidden rounded-xl object-cover shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="p-8 border-2 border-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition-colors duration-300">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    To democratize access to premium technology solutions across the Middle East and Africa, empowering
                    individuals and businesses with the tools they need to thrive in the digital age. We strive to
                    bridge the technology gap by providing high-quality products, exceptional service, and innovative
                    solutions that drive progress and prosperity in our communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-2 border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition-colors duration-300">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">
                    To become the most trusted and innovative technology platform in the MENA region, recognized for our
                    commitment to quality, customer satisfaction, and technological advancement. We envision a future
                    where cutting-edge technology is accessible to everyone, fostering innovation, creativity, and
                    economic growth across our markets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-24 bg-gray-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23fb923c' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            />
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                From humble beginnings to regional leadership in technology solutions
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Founded on Innovation</h3>
                  <p className="leading-relaxed text-black">
                    Zainab Star was founded with a simple yet powerful vision: to make premium technology accessible to
                    everyone across the Middle East and Africa. What started as a small technology retailer has grown
                    into a comprehensive platform serving thousands of customers across multiple countries.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Commitment to Excellence</h3>
                  <p className="leading-relaxed text-black">
                    Our commitment to quality and customer satisfaction has been the cornerstone of our growth. We
                    carefully curate our product selection, partner with leading global brands, and maintain rigorous
                    quality standards to ensure our customers receive only the best technology solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">Regional Expansion</h3>
                  <p className="leading-relaxed text-black">
                    Today, Zainab Star serves customers across the UAE beyond. Our regional presence allows us to understand local needs while leveraging global technology trends to deliver solutions that truly make a difference.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <Image
                    src="/images/zainab-star-logo.png"
                    width="600"
                    height="500"
                    alt="Our Journey"
                    className="relative rounded-xl object-cover shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Official Logo Section */}
            <div className="text-center py-16">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Brand Identity</h3>
                <div className="relative group">
                  {/* Animated background effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-700 animate-pulse animation-delay-2000"></div>

                  {/* Logo container */}
                  <div className="relative bg-white rounded-2xl p-12 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 border border-orange-100 hover:border-orange-200">
                    <div className="relative">
                      {/* Glowing effect behind logo */}
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>

                      {/* Main logo */}
                      <Image
                        src="/images/zainab-star-logo.png"
                        width="500"
                        height="200"
                        alt="Zainab Star Official Logo"
                        className="relative w-full max-w-md mx-auto h-auto object-contain hover:scale-105 transition-transform duration-500"
                      />

                      {/* Sparkle effects */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-orange-400 rounded-full animate-ping animation-delay-1000"></div>
                      <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping animation-delay-2000"></div>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Our logo represents our commitment to bringing together the best in electronics and gadgets,
                  symbolizing the connection between cutting-edge technology and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                The principles that guide everything we do at Zainab Star
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors duration-300 hover:rotate-12">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  Quality First
                </h3>
                <p className="text-gray-600">
                  We never compromise on quality. Every product we offer meets our rigorous standards for excellence.
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300 hover:rotate-12">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Customer Centric
                </h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. Their success is our success.
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300 hover:rotate-12">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors duration-300">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  We embrace cutting-edge technology and continuously evolve to meet changing needs.
                </p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300 hover:rotate-12">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  Trust & Integrity
                </h3>
                <p className="text-gray-600">
                  We build lasting relationships through transparency, honesty, and reliable service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-amber-500 relative overflow-hidden">
          {/* Animated background */}
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
            <div className="text-center text-white mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto">
                Proud to serve our growing community across the MENA region
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                { value: "50,000+", label: "Happy Customers" },
                { value: "15+", label: "Countries Served" },
                { value: "10,000+", label: "Products Available" },
                { value: "99.5%", label: "Customer Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center text-white group hover:scale-110 transition-transform duration-300"
                >
                  <div className="text-4xl font-bold mb-2 group-hover:text-yellow-200 transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Meet Our Leadership Team
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Experienced professionals driving innovation and excellence
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Al-Mahmoud",
                  role: "Chief Executive Officer",
                  bio: "15+ years in technology leadership across MENA region",
                  image: "/images/sarah-al-mahmoud-ceo.png",
                },
                {
                  name: "Ahmed Hassan",
                  role: "Chief Technology Officer",
                  bio: "Expert in emerging technologies and digital transformation",
                  image: "/images/ahmed-hassan-cto.png",
                },
                {
                  name: "Fatima Benali",
                  role: "Head of Customer Experience",
                  bio: "Passionate about delivering exceptional customer service",
                  image: "/images/fatima-benali-cx.png",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="mb-4 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <Image
                      src={member.image || "/placeholder.svg"}
                      width="150"
                      height="150"
                      alt={member.name}
                      className="relative rounded-full mx-auto object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1 hover:text-orange-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Ready to Experience Excellence?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers and discover why Zainab Star is the trusted choice for technology
                solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                  onClick={handleShopNow}
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-orange-50 hover:scale-105 transition-all duration-300 bg-transparent"
                  onClick={handleContactUs}
                >
                  Contact Us
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
