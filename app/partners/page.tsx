"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Award, Globe, TrendingUp, Users, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PartnersPage() {
  const router = useRouter()

  const handleBecomePartner = () => {
    alert("Thank you for your interest! Our partnership team will contact you within 24 hours.")
  }

  const handleViewProducts = () => {
    router.push("/products")
  }

  const handleContactPartnershipTeam = () => {
    router.push("/support")
  }

  const partners = [
    {
      name: "ELARI",
      country: "Russia",
      category: "Consumer Electronics & Smart Devices",
      description:
        "Based in Russia and established in 2012, Elari specializes in the creation and development of innovative, technologically advanced, designer goods and consumer electronics. In addition to anti-smart phones, Elari deals with the children's smart watch Tracker Fixitime, flash memory Elari SmartDrive, innovative Travel model and unique accessories for i-devices.",
      logo: "/images/partners/elari-logo-clear.png",
      partnership: "Authorized Distributor",
      since: "2020",
      specialties: ["Smart Watches", "Consumer Electronics", "i-Device Accessories", "Flash Memory Solutions"],
    },
    {
      name: "OLYMPIA",
      country: "Germany",
      category: "IT Accessories & Business Solutions",
      description:
        "Based in Germany and established in 1977, Olympia deals with IT Accessories and home business operations. Over the years, the traditional Olympia trademark has continually developed innovations for existing products ranges and introduced new products into the market.",
      logo: "/images/partners/olympia-logo-clear.png",
      partnership: "Premium Partner",
      since: "2019",
      specialties: ["IT Accessories", "Business Operations", "Office Solutions", "Traditional Technology"],
    },
    {
      name: "TREVI",
      country: "Italy",
      category: "Consumer Electronics & Audio",
      description:
        "Based in Italy and established in 1976, Trevi deals in Consumer Electronic Goods and offers state-of-the-art technological products and new ranges with best value in terms of quality, design and price.",
      logo: "/images/partners/trevi-logo-clear.png",
      partnership: "Certified Partner",
      since: "2021",
      specialties: ["Consumer Electronics", "Audio Products", "Quality Design", "Value Solutions"],
    },
    {
      name: "CTRONIQ",
      country: "United Kingdom",
      category: "Computing & Wearables",
      description:
        "Based in UK, Ctroniq focusses on the overall user experience to create products embedded with the best-performing technology, currently in our market. It deals with the product categories such as Mobility, Computing, Wearables and Accessories.",
      logo: "/images/partners/ctroniq-logo-clear.png",
      partnership: "Elite Partner",
      since: "2022",
      specialties: ["Mobility Solutions", "Computing", "Wearables", "User Experience"],
    },
    {
      name: "LINDY",
      country: "Germany",
      category: "Connection Technology & Cables",
      description:
        "Based in Germany and established in 1932, Lindy deals with high quality connection technology products. From the simplest USB Cables to the most advanced KVM switches; from network cabling solutions to the latest HDTV accessories, the LINDY name stands for product quality, choice, value for money and excellent customer service.",
      logo: "/images/partners/lindy-logo-clear.png",
      partnership: "Gold Partner",
      since: "2018",
      specialties: ["Connection Technology", "USB Cables", "KVM Switches", "Network Solutions"],
    },
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
            <Link href="/partners" className="text-sm font-medium text-orange-500">
              Our Partners
            </Link>
            <Link href="/support" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Support
            </Link>
            <Link href="/testimonials" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Testimonials
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleBecomePartner}>
            Become a Partner
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">Trusted Partnerships</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
                Our Strategic Partners
              </h1>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-xl mb-8">
                We collaborate with leading international technology brands to bring you the latest innovations and
                highest quality products. Our partnerships ensure authenticity, warranty coverage, and exceptional
                customer support across Europe and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600" onClick={handleBecomePartner}>
                  <Heart className="mr-2 h-4 w-4" />
                  Partner With Us
                </Button>
                <Button size="lg" variant="outline" onClick={handleViewProducts}>
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Brands Choose Zainab Star
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Our commitment to excellence makes us the preferred partner for leading technology brands
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Globe className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Regional Reach</h3>
                <p className="text-gray-600">Extensive distribution network across 15+ countries in MENA region</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Base</h3>
                <p className="text-gray-600">50,000+ active customers with high satisfaction and loyalty rates</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Focus</h3>
                <p className="text-gray-600">Consistent year-over-year growth with expanding market presence</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-gray-600">Award-winning customer service and technical support capabilities</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Trusted Partners</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Working with industry leaders from across Europe to deliver authentic, high-quality technology solutions
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner, index) => (
                <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 flex justify-center bg-white p-4 rounded-lg shadow-sm">
                      <Image
                        src={partner.logo || "/placeholder.svg"}
                        width="250"
                        height="100"
                        alt={`${partner.name} logo`}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                    <div className="flex justify-center mb-2">
                      <Badge className="bg-orange-100 text-orange-800">{partner.partnership}</Badge>
                    </div>
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {partner.country} • Partner since {partner.since}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <Badge variant="outline" className="text-xs">
                        {partner.category}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{partner.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-1">
                        {partner.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} variant="outline" className="text-xs bg-gray-50">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Authorized & Verified
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Success Stories */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Partnership Success Stories
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Real results from our strategic partnerships
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/images/partners/elari-logo-clear.png"
                      width="120"
                      height="60"
                      alt="ELARI"
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <CardTitle className="text-lg">ELARI Partnership</CardTitle>
                      <CardDescription>Smart Electronics Innovation</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "Our partnership with Zainab Star has enabled us to reach new markets across the MENA region. Their
                    commitment to customer education and premium service aligns perfectly with ELARI's innovative
                    approach to consumer electronics."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">250%</div>
                      <div className="text-sm text-gray-600">Sales Growth</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">95%</div>
                      <div className="text-sm text-gray-600">Customer Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/images/partners/lindy-logo-clear.png"
                      width="120"
                      height="60"
                      alt="LINDY"
                      className="h-12 w-auto object-contain"
                    />
                    <div>
                      <CardTitle className="text-lg">LINDY Partnership</CardTitle>
                      <CardDescription>Connection Technology Excellence</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    "Zainab Star's expertise in connection technology and their strong regional presence has made them
                    an invaluable partner for expanding LINDY's reach in emerging markets with our quality cable
                    solutions."
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-orange-600">180%</div>
                      <div className="text-sm text-gray-600">Market Expansion</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">98%</div>
                      <div className="text-sm text-gray-600">Partner Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Partnership Benefits</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                What our customers gain from our strategic partnerships
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentic Products</h3>
                <p className="text-gray-600">100% genuine products with full manufacturer warranty and support</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
                <p className="text-gray-600">First access to new product launches and cutting-edge innovations</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600">Certified technical support and training from manufacturer experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-amber-500">
          <div className="container px-4 md:px-6">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Interested in Partnership?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join our network of trusted partners and expand your reach across the MENA region
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-gray-100"
                  onClick={handleBecomePartner}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Become a Partner
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                  onClick={handleContactPartnershipTeam}
                >
                  Contact Partnership Team
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
                  <a href="mailto:info@zainabstar.com" className="hover:text-white transition-colors">
                    Email: info@zainabstar.com
                  </a>
                </li>
                <li>
                  <a href="tel:+97141234567" className="hover:text-white transition-colors">
                    Phone: +971 4 123 4567
                  </a>
                </li>
                <li>Address: Dubai, UAE</li>
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
