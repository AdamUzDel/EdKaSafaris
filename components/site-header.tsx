"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // For header background change
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // For scroll-to-top button
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-sm flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span className="hidden sm:inline">info@edkasafaris.com</span>
            <a href="mailto:info@edkasafaris.com" className="sm:hidden">
              Email
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">+256-752195226</span>
            <a href="tel:+256752195226" className="sm:hidden">
              Call
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://twitter.com" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </Link>
          <Link href="https://facebook.com" aria-label="Facebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled ? "bg-white shadow-md" : "bg-white shadow-sm",
        )}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/EdkasafarisLogo-icon.png?height=50&width=50"
              alt="Edka Safaris Logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-green-700">Edka Safaris & Adventures</h1>
              <p className="text-xs text-gray-600">Your travel. Our passion</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/tours" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Tours
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Inquire Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Inquire About Our Tours</DialogTitle>
                  <DialogDescription>
                    Have questions about our safari tours? Send us a message and we&apos;ll get back to you shortly.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-name">Full Name</Label>
                      <Input id="inquiry-name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="inquiry-email">Email Address</Label>
                      <Input id="inquiry-email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-subject">Subject</Label>
                    <Input id="inquiry-subject" placeholder="Tour Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-message">Your Message</Label>
                    <Textarea
                      id="inquiry-message"
                      placeholder="I&apos;m interested in your safari tours and would like to know more about..."
                      rows={5}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Send Inquiry</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile Menu Button - Animated Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "rotate-45 translate-y-1.5" : "",
              )}
            ></span>
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-800 my-1 transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "opacity-0" : "opacity-100",
              )}
            ></span>
            <span
              className={cn(
                "block w-6 h-0.5 bg-gray-800 transition-all duration-300 ease-in-out",
                mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : "",
              )}
            ></span>
          </button>
        </div>

        {/* Mobile Menu - Animated Slide Down */}
        <div
          className={cn(
            "md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="container mx-auto px-4 py-4">
            {/* Row layout for primary navigation */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Link
                href="/"
                className="mobile-menu-item font-medium text-gray-700 hover:text-green-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-50 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="mobile-menu-item font-medium text-gray-700 hover:text-green-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-50 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/tours"
                className="mobile-menu-item font-medium text-gray-700 hover:text-green-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-50 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                href="/contact"
                className="mobile-menu-item font-medium text-gray-700 hover:text-green-600 transition-colors py-2 px-3 rounded-md hover:bg-gray-50 flex items-center justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full">Inquire Now</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Inquire About Our Tours</DialogTitle>
                  <DialogDescription>
                    Have questions about our safari tours? Send us a message and we&apos;ll get back to you shortly.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="mobile-inquiry-name">Full Name</Label>
                      <Input id="mobile-inquiry-name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mobile-inquiry-email">Email Address</Label>
                      <Input id="mobile-inquiry-email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile-inquiry-subject">Subject</Label>
                    <Input id="mobile-inquiry-subject" placeholder="Tour Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile-inquiry-message">Your Message</Label>
                    <Textarea
                      id="mobile-inquiry-message"
                      placeholder="I&apos;m interested in your safari tours and would like to know more about..."
                      rows={5}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Send Inquiry</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 hover:bg-green-700",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        )}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>
    </>
  )
}

