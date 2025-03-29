"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import dynamic from "next/dynamic"
import {
  CheckCircle,
  Server,
  Shield,
  Zap,
  Clock,
  Menu,
  Check,
  ChevronDown,
  Sparkles,
  Star,
  ArrowRight,
  LightbulbIcon,
  CreditCard,
  Gift,
  Cpu,
  Rocket,
  Award,
  TrendingUp,
  Wifi,
  Heart,
  Globe,
  HeadphonesIcon,
  BoltIcon,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  LockIcon,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"

// Wrap the entire page with dynamic import with ssr disabled to fix hydration issues
const LandingPageContent = dynamic(() => Promise.resolve(LandingPageComponent), {
  ssr: false,
})

export default function LandingPage() {
  return <LandingPageContent />
}

function LandingPageComponent() {
  const [expandedFeatures, setExpandedFeatures] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  
  // Additional features for each plan
  const additionalFeatures = [
    [
      "20 Business emails",
      "Weekly backups",
      "WordPress vulnerabilities",
      "WordPress auto updates",
      "Standard WordPress accel",
      "Unlimited bandwidth",
      "Unlimited MYSQL databases",
      "Free WordPress Course"
    ],
    [
      "20 Business emails",
      "Weekly backups",
      "WordPress vulnerabilities",
      "WordPress auto updates",
      "Standard WordPress accel",
      "Unlimited bandwidth",
      "Free WordPress Course",
      "Unlimited MYSQL databases"
    ],
    [
      "Free WordPress Course",
      "Unlimited free SSL",
      "Unlimited Sub-domains",
      "50 Business emails",
      "Weekly backups",
      "WordPress vulnerabilities",
      "WordPress auto updates",
      "Standard WordPress accel",
      "Unlimited bandwidth",
      "Free wordpress Course"
    ]
  ];

  const toggleFeatures = (index: number) => {
    setExpandedFeatures(expandedFeatures === index ? null : index);
  };

  // Add useEffect for typing animation
  useEffect(() => {
    const inputField = document.getElementById("domain-query") as HTMLInputElement;
    if (!inputField) return;
    
    const placeholderText = "Enter domain name";
    let i = 0;
    let typingInterval: NodeJS.Timeout;
    
    function typePlaceholder() {
      if (i < placeholderText.length) {
        inputField.placeholder += placeholderText.charAt(i);
        i++;
        typingInterval = setTimeout(typePlaceholder, 100);
      } else {
        setTimeout(() => {
          inputField.placeholder = "";
          i = 0;
          typePlaceholder();
        }, 1500); // Pause before restarting
      }
    }
    
    // Start typing effect
    typePlaceholder();
    
    // Clean up interval on component unmount
    return () => {
      clearTimeout(typingInterval);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Enhanced Welcome Notification */}
      {showNotification && (
        <div className="fixed top-16 inset-x-0 z-50 flex justify-center p-4 pointer-events-none">
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-6 py-4 rounded-xl shadow-xl flex items-center space-x-4 max-w-md mx-auto pointer-events-auto overflow-hidden">
            {/* Animated sparkles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-white/30"
                  style={{
                    width: `${8 + Math.random() * 12}px`,
                    height: `${8 + Math.random() * 12}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float-upward ${3 + Math.random() * 2}s infinite ease-in-out`,
                    animationDelay: `${Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Shimmering border */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-yellow-400/0 opacity-50" 
              style={{
                animation: "shimmer 2s infinite linear",
                backgroundSize: "200% 100%"
              }}></div>
            
            {/* Icon */}
            <div className="h-12 w-12 relative flex-shrink-0 bg-white/20 rounded-full flex items-center justify-center">
              <Sparkles className="h-7 w-7 text-yellow-300 animate-pulse" />
            </div>
            
            {/* Content */}
            <div className="flex-1 relative">
              <h4 className="font-bold text-lg">Welcome to our new website! 🎉</h4>
              <p className="text-sm text-indigo-100 mt-1">We've transformed our online experience just for you. Enjoy faster hosting, better service, and amazing deals!</p>
            </div>
            
            {/* Close button */}
            <button 
              onClick={() => setShowNotification(false)}
              className="flex-shrink-0 text-indigo-100 hover:text-white relative group"
              aria-label="Close notification"
            >
              <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/20 transition-all scale-0 group-hover:scale-100"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 relative" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="https://rodlinehost.com" className="flex items-center">
              <Image 
                src="/images/Rodline-1.png" 
                alt="RodLine Hosting Logo" 
                width={180} 
                height={50} 
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Domain <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="https://www.rodlinehost.com/r/cart.php?a=add&domain=register">Register a Domain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://www.rodlinehost.com/r/cart.php?a=add&domain=transfer">Transfer a Domain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://www.rodlinehost.com/r/cart.php?a=add&domain=register">Domain Pricing</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Hosting <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/shared-hosting">Shared Hosting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/reseller-hosting">Reseller Hosting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/student-hosting">Student Hosting</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Services <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="https://rodlinetz.com">Premium Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://rodline.store">Plugins and Themes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="https://rodline.co.tz">Hire a Developer</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex" asChild>
              <Link href="">
                <span>Get Started</span>
                <span className="sr-only">Get Started</span>
              </Link>
            </Button>
            <Button variant="outline" className="hidden md:inline-flex group border-primary" asChild>
              <Link href="https://www.rodlinehost.com/r/index.php?rp=/login">
                <span className="text-primary group-hover:text-white">Client Area</span>
                <span className="sr-only">Go to client area</span>
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-gray-200">
            <div className="container py-4 space-y-4">
              <Link 
                href="/" 
                className="block py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="py-2">
                <div className="flex items-center justify-between text-base font-medium mb-2">
                  <span>Domain</span>
                </div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/register-domain" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register a Domain
                  </Link>
                  <Link 
                    href="/transfer-domain" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Transfer a Domain
                  </Link>
                  <Link 
                    href="/domain-pricing" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Domain Pricing
                  </Link>
                </div>
              </div>
              
              <div className="py-2">
                <div className="flex items-center justify-between text-base font-medium mb-2">
                  <span>Hosting</span>
                </div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/shared-hosting" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Shared Hosting
                  </Link>
                  <Link 
                    href="/reseller-hosting" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Reseller Hosting
                  </Link>
                  <Link 
                    href="/student-hosting" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Student Hosting
                  </Link>
                </div>
              </div>
              
              <div className="py-2">
                <div className="flex items-center justify-between text-base font-medium mb-2">
                  <span>Services</span>
                </div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/premium-courses" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Premium Courses
                  </Link>
                  <Link 
                    href="/plugins-themes" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Plugins and Themes
                  </Link>
                  <Link 
                    href="/hire-developer" 
                    className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hire a Developer
                  </Link>
                </div>
              </div>
              
              <Link 
                href="#contact" 
                className="block py-2 text-base font-medium hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <Button className="w-full" asChild>
                  <Link 
                    href="/signup"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Get Started</span>
                  </Link>
                </Button>
                <Button variant="outline" className="w-full group border-primary" asChild>
                  <Link 
                    href="/client-area"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-primary group-hover:text-white">Client Area</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/255769500302" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
        >
          <path d="M17.6 6.3A8.3 8.3 0 0 0 3.6 16.4l-1.1 4.1 4.2-1.1a8.3 8.3 0 0 0 4 1c4.6 0 8.4-3.7 8.4-8.3a8.3 8.3 0 0 0-1.5-4.8zm-5.8 12.7c-1.2 0-2.3-.3-3.3-.9l-.3-.1-2.7.8.7-2.8v-.3c-.7-1.2-1-2.5-1-3.9 0-4 3.3-7.3 7.4-7.3 2 0 3.8.7 5.2 2.2 1.4 1.4 2.1 3.3 2.1 5.3 0 4-3.3 7-7.1 7zm4-5.1c-.3-.1-.9-.5-1-.6-.2-.1-.3-.1-.4.1-.2.2-.5.6-.7.8-.1.1-.2.1-.4 0-.8-.4-1.4-.7-2-1.5-.1-.2 0-.3.1-.3l.5-.6v-.3c0-.2-.3-.8-.5-1-.1-.2-.3-.2-.4-.2h-.4c-.1 0-.3.1-.5.3-.5.5-.7 1.1-.7 1.8 0 1.1.8 2.1 1 2.3.1.1 1.7 2.6 4.1 3.6.4.2.8.3 1.2.4.5.1.9.1 1.2.1.4-.1 1.1-.5 1.3-1 .2-.5.2-1 .1-1 0-.1-.2-.1-.4-.2z" fill="currentColor"/>
        </svg>
      </a>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          <div className="container relative px-4 py-16 md:py-20 lg:py-24 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              
              {/* Left Content */}
              <div className="max-w-xl">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 bg-opacity-20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-5 w-5 text-yellow-300 mr-2" />
                  <span className="font-medium text-white text-sm">New Customer Offer: 15% Off First 3 Months</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Supercharge Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
                    Online Presence
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-indigo-100 mb-8">
                  Launch your website with our lightning-fast hosting.
                  99.9% uptime guarantee, superior performance, and
                  24/7 expert support.
                </p>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Find Your Perfect Domain</h3>
                  <form 
                    action="https://www.rodlinehost.com/r/cart.php?a=add&domain=register" 
                    method="post"
                    className="flex flex-col md:flex-row gap-2"
                    
                  >
                    <div className="flex-1 relative">
                      <input 
                        type="text" 
                        name="query"
                        id="domain-query"
                        placeholder="" 
                        className="w-full h-12 pl-4 pr-10 rounded-lg bg-white bg-opacity-20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 border border-transparent"
                      />
                      <Globe className="absolute right-3 top-3 h-6 w-6 text-indigo-200 pointer-events-none" />
                    </div>
                    <button 
                      type="submit"
                      className="h-12 px-6 font-medium rounded-lg bg-yellow-400 text-indigo-900 hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-indigo-600 flex items-center justify-center"
                    >
                      Search Domain
                    </button>
                  </form>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div className="text-center">
                      <span className="block text-indigo-100">.com</span>
                      <span className="font-medium">Tsh 40,000/=</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-indigo-100">.org</span>
                      <span className="font-medium">Tsh 35,000/=</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-indigo-100">.shop</span>
                      <span className="font-medium">Tsh 12,000/=</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-indigo-100">.co.tz</span>
                      <span className="font-medium">Tsh 25,000/=</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    href="#pricing" 
                    className="px-8 py-4 font-semibold rounded-lg bg-white text-indigo-700 hover:bg-opacity-90 transition-colors shadow-lg flex items-center justify-center"
                  >
                    Get Started Today <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                  <Link 
                    href="#pricing" 
                    className="px-8 py-4 font-semibold rounded-lg border-2 border-white border-opacity-30 hover:border-opacity-50 transition-colors flex items-center justify-center"
                  >
                    View Plans
                  </Link>
                </div>
                
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex -space-x-2">
                    {['JS', 'KL', 'MT', 'AR'].map((initial, i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium bg-indigo-500 border-2 border-indigo-600" 
                        style={{ zIndex: 4 - i }}
                      >
                        {initial}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium bg-indigo-500 border-2 border-indigo-600">
                      500+
                    </div>
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className="h-5 w-5 text-yellow-400" />
                      ))}
                      <span className="ml-2 font-semibold">4.9/5 ratings</span>
                    </div>
                    <span className="text-indigo-200">Happy customers</span>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Server Illustration */}
              <div className="hidden lg:flex justify-end">
                <div className="relative w-full max-w-lg">
                  {/* Server Tower */}
                  <div className="absolute top-0 right-0 w-48 h-80 bg-blue-800 rounded-lg shadow-xl overflow-hidden border-4 border-blue-700">
                    <div className="h-8 w-full bg-blue-900 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                        <BoltIcon className="h-4 w-4 text-yellow-400" />
                      </div>
                    </div>
                    <div className="p-3 space-y-4">
                      {[1, 2, 3].map(row => (
                        <div key={row} className="h-10 w-full bg-blue-700 rounded-md flex items-center px-3">
                          <div className="w-full flex items-center justify-between">
                            <div className="w-24 h-2 bg-blue-600 rounded-full"></div>
                            <div className="flex space-x-1">
                              {[1, 2, 3].map(dot => (
                                <div key={dot} className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="h-24 w-full rounded-md overflow-hidden">
                        <div className="h-full w-full border-4 border-blue-600 rounded-md flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-yellow-400 border-4 border-dashed border-blue-500 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Monitor */}
                  <div className="absolute left-0 bottom-0 w-72 h-56">
                    <div className="relative h-full">
                      {/* Monitor Screen */}
                      <div className="w-full h-48 bg-blue-100 rounded-lg overflow-hidden border-8 border-blue-800">
                        <div className="w-full h-full bg-blue-50 p-3">
                          <div className="w-16 h-3 rounded-md bg-orange-400 mb-3"></div>
                          <div className="w-24 h-5 rounded-md bg-yellow-400 mb-5"></div>
                          <div className="space-y-2">
                            <div className="w-full h-2 rounded-full bg-blue-200"></div>
                            <div className="w-full h-2 rounded-full bg-blue-200"></div>
                            <div className="w-2/3 h-2 rounded-full bg-blue-200"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Monitor Stand */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-10">
                        <div className="w-10 h-6 mx-auto bg-blue-900 rounded-t-sm"></div>
                        <div className="w-24 h-4 bg-blue-900 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Device */}
                  <div className="absolute right-10 bottom-8 w-12 h-20 bg-blue-800 rounded-xl border-2 border-blue-700 p-1">
                    <div className="w-full h-full bg-blue-50 rounded-lg flex flex-col items-center justify-between p-1">
                      <div className="w-3 h-1 rounded-full bg-blue-300"></div>
                      <div className="space-y-1">
                        {[1, 2, 3].map(dot => (
                          <div key={dot} className="w-6 h-0.5 rounded-full bg-orange-400"></div>
                        ))}
                      </div>
                      <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                    </div>
                  </div>
                  
                  {/* Cloud Element */}
                  <div className="absolute -top-10 left-10">
                    <div className="relative">
                      <div className="w-20 h-12 bg-indigo-400 rounded-full"></div>
                      <div className="absolute -top-4 left-10 w-16 h-10 bg-purple-400 rounded-full"></div>
                      <div className="absolute -top-8 left-4 w-12 h-8 bg-indigo-300 rounded-full"></div>
                      <div className="absolute -right-8 -bottom-4 w-8 h-14 bg-yellow-400 transform rotate-45 rounded-t-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="container mx-auto px-4 py-6 border-t border-white border-opacity-10">
            <div className="flex flex-wrap justify-center md:justify-between gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
                <span>Free Domain</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
                <span>Free SSL Certificate</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="relative w-full py-16 bg-gradient-to-b from-indigo-50/50 to-white">
          <div className="container px-4 md:px-6 relative">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3">
                <Sparkles className="w-4 h-4 mr-2" />
                Save up to 70% today
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Select a hosting plan that fits your needs
              </h2>
              <p className="mt-3 text-gray-600">
                All plans include 24/7 support, free migration, and a 30-day money-back guarantee
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Pricing Tiers */}
                  <div className="grid md:grid-cols-3 gap-6 md:gap-4">
                    {/* Starter Plan */}
                    <div className="flex flex-col h-full p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all">
                      <div className="mb-5">
                        <h3 className="text-lg font-semibold">Starter Cloud</h3>
                        <p className="text-sm text-gray-500 mt-1">Perfect for personal sites</p>
                      </div>
                      
                      <div className="mb-5">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">TZS 99,000</span>
                          <span className="text-sm text-gray-500 ml-1">/year</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">TZS 8,250/month, billed annually</p>
                      </div>

                      <Button size="lg" className="mb-5 bg-indigo-600 hover:bg-indigo-700" asChild>
                        <Link href="https://www.rodlinehost.com/r/index.php?rp=/store/shared-hosting/starter-plan">
                          Buy This Plan
                        </Link>
                      </Button>
                      
                      <p className="text-sm font-medium mb-4">Top features:</p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>10 websites</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>30 GB NVMe storage</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>~25,000 visits monthly</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>Free website migration</span>
                        </li>
                      </ul>
                      
                      <Button 
                        variant="ghost" 
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 mt-auto"
                        onClick={() => toggleFeatures(0)}
                      >
                        See all features <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Business Plan */}
                    <div className="flex flex-col h-full p-6 bg-indigo-50 rounded-xl border-2 border-indigo-500 shadow-lg relative">
                      <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                        MOST POPULAR
                      </div>
                      
                      <div className="mb-5">
                        <h3 className="text-lg font-semibold">Business Cloud</h3>
                        <p className="text-sm text-gray-500 mt-1">Best for growing businesses</p>
                      </div>

                      <div className="mb-5">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">TZS 149,000</span>
                          <span className="text-sm text-gray-500 ml-1">/year</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">TZS 12,417/month, billed annually</p>
                      </div>

                      <Button size="lg" className="mb-5 bg-indigo-600 hover:bg-indigo-700" asChild>
                        <Link href="https://www.rodlinehost.com/r/store/shared-hosting/business-plan">
                          Buy This Plan
                        </Link>
                      </Button>
                      
                      <p className="text-sm font-medium mb-4">Top features:</p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>30 websites</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>50 GB NVMe storage</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>Free Domain</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>~50,000 visits monthly</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>Free automatic migration</span>
                        </li>
                      </ul>

                      <Button
                        variant="ghost" 
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 mt-auto"
                        onClick={() => toggleFeatures(1)}
                      >
                        See all features <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    {/* Economic Plan */}
                    <div className="flex flex-col h-full p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-indigo-500 hover:shadow-md transition-all">
                      <div className="mb-5">
                        <h3 className="text-lg font-semibold">Economic Cloud</h3>
                        <p className="text-sm text-gray-500 mt-1">For high-traffic websites</p>
                      </div>
                      
                      <div className="mb-5">
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">TZS 189,000</span>
                          <span className="text-sm text-gray-500 ml-1">/year</span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">TZS 15,750/month, billed annually</p>
                      </div>

                      <Button size="lg" className="mb-5 bg-indigo-600 hover:bg-indigo-700" asChild>
                        <Link href="https://www.rodlinehost.com/r/index.php?rp=/store/shared-hosting/economic-plan">
                          Buy This Plan
                        </Link>
                      </Button>
                      
                      <p className="text-sm font-medium mb-4">Top features:</p>
                      <ul className="space-y-2 mb-6 flex-grow">
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>50 websites</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>100 GB NVMe storage</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>Free Domain</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>~100,000 visits monthly</span>
                        </li>
                        <li className="flex text-sm">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                          <span>Unlimited MYSQL Databases</span>
                        </li>
                      </ul>
                      
                      <Button 
                        variant="ghost" 
                        className="text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 mt-auto"
                        onClick={() => toggleFeatures(2)}
                      >
                        See all features <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">Free SSL Certificate</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">99.9% Uptime Guarantee</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm">24/7 Expert Support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="h-5 w-5 text-green-500" />
                        <span className="text-sm">30-Day Money Back</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Popup */}
        {expandedFeatures !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center" onClick={() => setExpandedFeatures(null)}>
            <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100 max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">
                  {expandedFeatures === 0 ? "Starter Cloud" : 
                   expandedFeatures === 1 ? "Business Cloud" : 
                   "Economic Cloud"} - All Features
                </h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full" 
                  onClick={() => setExpandedFeatures(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">Core Features</h4>
                  <ul className="space-y-3">
                    {expandedFeatures === 0 ? (
                      [
                        "10 websites",
                        "30 GB NVMe storage",
                        "No Domain",
                        "~25,000 visits monthly",
                        "400,000 files and directories",
                        "Free pre-built templates",
                        "Free website migration",
                        "Unlimited free SSL"
                      ]
                    ) : expandedFeatures === 1 ? (
                      [
                        "30 websites",
                        "50 GB NVMe storage",
                        "Free Domain",
                        "~50,000 visits monthly",
                        "600,000 files and directories",
                        "Free pre-built templates",
                        "Free automatic website migration",
                        "Unlimited free SSL"
                      ]
                    ) : (
                      [
                        "50 websites",
                        "100 GB NVMEs Storage",
                        "Free Domain",
                        "~100,000 visits monthly",
                        "900,000 files and directories",
                        "Free pre-built templates",
                        "Free automatic website migration",
                        "Unlimited MYSQL Databases"
                      ]
                    ).map((feature, j) => (
                      <li key={j} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4 text-lg">WordPress Features</h4>
                  <ul className="space-y-3">
                    {expandedFeatures !== null && additionalFeatures[expandedFeatures].map((feature, j) => (
                      <li key={j} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                <p className="text-sm text-gray-500">Questions? Contact our sales team at <a href="mailto:info@rodline.co.tz" className="text-indigo-600 hover:underline">info@rodline.co.tz</a></p>
                
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => setExpandedFeatures(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Features Section */}
        <section id="features" className="w-full py-12 bg-gradient-to-r from-indigo-50/30 to-blue-50/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                Features
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold">
                  Everything you need to succeed online
                </h2>
              <p className="mt-3 max-w-2xl mx-auto text-gray-600">
                  Our hosting platform is designed to provide you with all the tools and resources you need to build and
                  grow your online presence.
                </p>
              </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* Feature Card 1 - Lightning Fast */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Lightning Fast Performance</h3>
                  <p className="text-gray-600">
                    SSD storage and optimized servers ensure your website loads quickly for visitors from anywhere in the world.
                  </p>
                </div>
              </div>
              
              {/* Feature Card 2 - Security */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Advanced Security</h3>
                  <p className="text-gray-600">
                    Free SSL certificates, DDoS protection, and regular backups keep your website safe and secure.
                  </p>
                </div>
              </div>
              
              {/* Feature Card 3 - Global CDN */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Global CDN</h3>
                  <p className="text-gray-600">
                    Content delivery network ensures your website loads quickly for visitors from anywhere in the world.
                  </p>
                </div>
              </div>
              
              {/* Feature Card 4 - Scalable Resources */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <Server className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Scalable Resources</h3>
                  <p className="text-gray-600">
                    Easily upgrade your hosting plan as your website grows, with no downtime or technical hassle.
                  </p>
                </div>
              </div>
              
              {/* Feature Card 5 - Uptime */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">99.9% Uptime Guarantee</h3>
                  <p className="text-gray-600">
                    We guarantee your website will be available 99.9% of the time, or you get compensated.
                  </p>
                </div>
              </div>
              
              {/* Feature Card 6 - Support */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                    <HeadphonesIcon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">24/7 Expert Support</h3>
                  <p className="text-gray-600">
                    Our technical support team is available around the clock to help you with any issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reseller Section */}
        <section id="reseller" className="w-full py-8 md:py-12 lg:py-16 bg-gradient-to-b from-white to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-3 text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a1033]">
                Become a Reseller with your brand
              </h2>
              <p className="max-w-[800px] text-lg text-muted-foreground md:text-xl">
                Start making money online by reselling Cpanel servers from us at affordable pricing.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Starter Reseller Plan */}
              <div className="relative group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted hover:border-primary/50 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#0a1033]">Starter Reseller plan</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-muted-foreground line-through">From Tsh55000</span>
            <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Save 18%</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-[#0a1033]">Tsh</span>
            <span className="text-6xl font-bold text-[#0a1033]">45,000</span>
            <span className="text-lg text-muted-foreground">/mo</span>
          </div>
        </div>

        <Button className="w-full bg-[#0a1033] hover:bg-[#0a1033]/90 mb-8">
          Get Started
        </Button>

        <ul className="space-y-3">
          <li className="flex items-center justify-center text-sm">20 CPanel Accounts</li>
          <li className="flex items-center justify-center text-sm">50 GB NVMe Storage</li>
          <li className="flex items-center justify-center text-sm">2 Cores | 2GB RAM (per cPanel account)</li>
          <li className="flex items-center justify-center text-sm">Custom Nameservers Available</li>
          <li className="flex items-center justify-center text-sm">Whitelabel / Unbranded</li>
          <li className="flex items-center justify-center text-sm">Free SSL Certificates</li>
          <li className="flex items-center justify-center text-sm">Free Reseller Migration</li>
          <li className="flex items-center justify-center text-sm">Sell Domain Names</li>
          <li className="flex items-center justify-center text-sm">30 Day Retention Backups 1x Daily</li>
        </ul>
      </div>

      {/* Business Shared Hosting - Most Popular */}
      <div className="relative group rounded-2xl border-2 border-primary p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50">
        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-[#ff0066] text-white text-sm font-medium">
          Most Popular
        </div>
        
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#0a1033]">Business Shared Hosting</h3>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-[#0a1033]">Tsh</span>
            <span className="text-6xl font-bold text-[#0a1033]">89,000</span>
            <span className="text-lg text-muted-foreground">/mo</span>
          </div>
        </div>

        <Button className="w-full bg-[#0066ff] hover:bg-[#0066ff]/90 mb-8">
          Get Started
        </Button>

        <ul className="space-y-3">
          <li className="flex items-center justify-center text-sm">50 CPanel Accounts</li>
          <li className="flex items-center justify-center text-sm">Unlimited NVMe Storage</li>
          <li className="flex items-center justify-center text-sm">2 Cores | 2GB RAM (per cPanel account)</li>
          <li className="flex items-center justify-center text-sm">Custom Nameservers Available</li>
          <li className="flex items-center justify-center text-sm">Whitelabel / Unbranded</li>
          <li className="flex items-center justify-center text-sm">Free SSL Certificates</li>
          <li className="flex items-center justify-center text-sm">Free Reseller Migration</li>
          <li className="flex items-center justify-center text-sm">Sell Domain Names</li>
          <li className="flex items-center justify-center text-sm">30 Day Retention Backups 1x Daily</li>
        </ul>
      </div>

      {/* Business Shared Hosting - Premium */}
      <div className="relative group rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-muted hover:border-primary/50 backdrop-blur-sm bg-white/50 dark:bg-gray-950/50">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#0a1033]">Business Shared Hosting</h3>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-4xl font-bold text-[#0a1033]">Tsh</span>
            <span className="text-6xl font-bold text-[#0a1033]">370,000</span>
            <span className="text-lg text-muted-foreground">/mo</span>
          </div>
        </div>

        <Button className="w-full bg-[#0a1033] hover:bg-[#0a1033]/90 mb-8">
          Get Started
        </Button>

        <ul className="space-y-3">
          <li className="flex items-center justify-center text-sm">100 CPanel Accounts</li>
          <li className="flex items-center justify-center text-sm">Unlimited NVMe Storage</li>
          <li className="flex items-center justify-center text-sm">4 Cores | 4GB RAM (per cPanel account)</li>
          <li className="flex items-center justify-center text-sm">Custom Nameservers Available</li>
          <li className="flex items-center justify-center text-sm">Whitelabel / Unbranded</li>
          <li className="flex items-center justify-center text-sm">Free SSL Certificates</li>
          <li className="flex items-center justify-center text-sm">Free Reseller Migration</li>
          <li className="flex items-center justify-center text-sm">Sell Domain Names</li>
          <li className="flex items-center justify-center text-sm">30 Day Retention Backups 1x Daily</li>
        </ul>
      </div>
    </div>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        {/* Main Footer */}
        <div className="container px-4 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">
                  <span className="text-primary">Rod</span>
                  <span className="text-secondary">Line</span> Hosting
                </span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Providing reliable web hosting solutions since 2015. Our mission is to empower businesses and individuals with fast, secure, and scalable hosting services.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">123 Hosting Street, Dar es Salaam, Tanzania</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">+255 769 500 302</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">info@rodline.co.tz</span>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Link href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Shared Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Reseller Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Student Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    WordPress Hosting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Domain Registration
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    SSL Certificates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Knowledge Base
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Live Chat
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Submit Ticket
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    System Status
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-muted">
          <div className="container px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h4 className="font-semibold text-lg mb-2">Subscribe to our newsletter</h4>
                <p className="text-muted-foreground text-sm">Get the latest news and offers delivered to your inbox.</p>
              </div>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-l-md border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-muted bg-muted/30">
          <div className="container px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left text-sm text-muted-foreground">
                © {new Date().getFullYear()} RodLine Hosting. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end gap-6">
                <div className="flex items-center gap-2">
                  <LockIcon className="h-4 w-4 text-green-500" />
                  <span className="text-xs">Secure Payment</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image src="/visa.svg" alt="Visa" width={32} height={20} />
                  <Image src="/mastercard.svg" alt="Mastercard" width={32} height={20} />
                  <Image src="/paypal.svg" alt="PayPal" width={32} height={20} />
                  <Image src="/mpesa.svg" alt="M-Pesa" width={32} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

{/* Add the animations to global style */}
<style jsx global>{`
  @keyframes float-upward {
    0% { transform: translateY(20px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(-20px); opacity: 0; }
  }
  
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`}</style>

