"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  Star,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Shield,
  Headphones,
  Search,
  FileText,
  Video,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function SupportPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "",
    orderNumber: "",
    message: "",
  })

  const [searchQuery, setSearchQuery] = useState("")

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      alert("Please fill in all required fields")
      return
    }
    alert(
      `Thank you ${formData.firstName}! Your support request has been submitted. We'll get back to you within 24 hours.`,
    )
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      category: "",
      orderNumber: "",
      message: "",
    })
  }

  const handlePhoneSupport = () => {
    window.open("tel:+971564554437", "_self")
  }

  const handleStartChat = () => {
    alert("Starting live chat... Our support team will be with you shortly!")
  }

  const handleEmailSupport = () => {
    window.open("mailto:info@head-links.com", "_self")
  }

  const handleScheduleCall = () => {
    alert("Redirecting to video call scheduling... Please select your preferred time slot.")
  }

  const handleContactSupport = () => {
    alert("Opening contact form...")
  }

  const faqs = [
    {
      question: "What warranty coverage do you provide?",
      answer:
        "All our products come with manufacturer warranty. Laptops and computers typically have 1-2 years warranty, while accessories have 6-12 months. We also offer extended warranty options for additional peace of mind.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to all countries across the Middle East and Africa. Shipping times vary by location: UAE (1-2 days), GCC countries (2-3 days), other MENA countries (3-7 days). Free shipping is available for orders above $200.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "We offer a 14-day return policy for unopened items in original packaging. For defective products, we provide free exchanges within 30 days. Custom-configured items may have different return policies.",
    },
    {
      question: "Do you provide technical support?",
      answer:
        "Yes, we offer comprehensive technical support including setup assistance, troubleshooting, and maintenance guidance. Our certified technicians are available 24/7 via phone, email, and live chat.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and cash on delivery (available in select cities). All transactions are secured with SSL encryption.",
    },
    {
      question: "Do you offer bulk discounts for businesses?",
      answer:
        "Yes, we provide special pricing for bulk orders and corporate clients. Contact our business sales team for customized quotes and volume discounts. We also offer flexible payment terms for registered businesses.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
            <Link href="/support" className="text-sm font-medium text-orange-500">
              Support
            </Link>
            <Link href="/testimonials" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Testimonials
            </Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600" onClick={handleContactSupport}>
            Contact Support
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mb-4">24/7 Support Available</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6">
                How Can We Help You?
              </h1>
              <p className="max-w-3xl mx-auto text-gray-600 md:text-xl mb-8">
                Our dedicated support team is here to assist you with any questions, technical issues, or concerns. Get
                the help you need, when you need it.
              </p>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Search for help..."
                    className="pl-10 h-12 text-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Information</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Reach out to us through any of these channels
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us directly</p>
                <a href="tel:+971564554437" className="font-semibold text-orange-600 hover:text-orange-700">
                  +971 56 455 4437
                </a>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us a message</p>
                <a href="mailto:info@head-links.com" className="font-semibold text-blue-600 hover:text-blue-700">
                  info@head-links.com
                </a>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-gray-600 mb-4">Visit our office</p>
                <p className="font-semibold text-green-600">
                  201 BB03 Bay Square
                  <br />
                  Business Bay, Dubai, UAE
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card
                className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={handlePhoneSupport}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Phone className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our experts</p>
                <p className="font-semibold text-orange-600 mb-2">+971 56 455 4437</p>
                <Badge variant="outline" className="text-xs">
                  24/7 Available
                </Badge>
              </Card>

              <Card
                className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={handleStartChat}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <MessageCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Instant messaging support</p>
                <Button className="bg-blue-500 hover:bg-blue-600 mb-2" onClick={handleStartChat}>
                  Start Chat
                </Button>
                <Badge variant="outline" className="text-xs">
                  Avg. 2 min response
                </Badge>
              </Card>

              <Card
                className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={handleEmailSupport}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Mail className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Detailed assistance via email</p>
                <p className="font-semibold text-green-600 mb-2">info@head-links.com</p>
                <Badge variant="outline" className="text-xs">
                  24h response time
                </Badge>
              </Card>

              <Card
                className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={handleScheduleCall}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Video className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Support</h3>
                <p className="text-gray-600 mb-4">Screen sharing assistance</p>
                <Button variant="outline" className="mb-2 bg-transparent" onClick={handleScheduleCall}>
                  Schedule Call
                </Button>
                <Badge variant="outline" className="text-xs">
                  By appointment
                </Badge>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Categories</h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">Find help for your specific needs</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card
                className="group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => alert("Opening Technical Support section...")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
                    <Headphones className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle>Technical Support</CardTitle>
                  <CardDescription>
                    Hardware troubleshooting, software installation, and performance optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Device setup and configuration</li>
                    <li>• Performance troubleshooting</li>
                    <li>• Software installation help</li>
                    <li>• Hardware diagnostics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => alert("Opening Warranty & Returns section...")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Warranty & Returns</CardTitle>
                  <CardDescription>Warranty claims, product returns, exchanges, and repair services</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Warranty claim processing</li>
                    <li>• Return authorization</li>
                    <li>• Product exchanges</li>
                    <li>• Repair service coordination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => alert("Opening Order Support section...")}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Order Support</CardTitle>
                  <CardDescription>
                    Order tracking, shipping information, payment issues, and delivery support
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Order status tracking</li>
                    <li>• Shipping and delivery</li>
                    <li>• Payment processing</li>
                    <li>• Invoice and receipts</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-gray-600 md:text-xl max-w-3xl mx-auto">Find quick answers to common questions</p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              {filteredFaqs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No FAQs found matching your search.</p>
                  <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Still Need Help?</h2>
                <p className="mt-4 text-gray-600 md:text-xl">
                  Send us a message and we'll get back to you within 24 hours
                </p>
              </div>
              <Card className="p-8">
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmitForm()
                  }}
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-2 block">First Name *</label>
                      <Input
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Last Name *</label>
                      <Input
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Support Category</label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="warranty">Warranty & Returns</SelectItem>
                        <SelectItem value="order">Order Support</SelectItem>
                        <SelectItem value="billing">Billing & Payment</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Order Number (if applicable)</label>
                    <Input
                      placeholder="Enter your order number"
                      value={formData.orderNumber}
                      onChange={(e) => handleInputChange("orderNumber", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      placeholder="Describe your issue or question in detail..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600" size="lg">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Support Hours</h2>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                <Card className="p-6 text-center">
                  <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-600">24/7 - Always available</p>
                </Card>
                <Card className="p-6 text-center">
                  <MessageCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
                  <p className="text-gray-600">24/7 - Instant responses</p>
                </Card>
                <Card className="p-6 text-center">
                  <Mail className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email Support</h3>
                  <p className="text-gray-600">24h response guarantee</p>
                </Card>
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
