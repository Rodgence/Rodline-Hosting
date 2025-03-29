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
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Wrap the entire page with dynamic import with ssr disabled to fix hydration issues
const LandingPageContent = dynamic(() => Promise.resolve(LandingPageComponent), {
  ssr: false,
})

export default function LandingPage() {
  return <LandingPageContent />
}

function LandingPageComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Server className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">
              <span className="text-primary">Rod</span>
              <span className="text-secondary">Line</span> Hosting
            </span>
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
                  <Link href="/register-domain">Register a Domain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/transfer-domain">Transfer a Domain</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/domain-pricing">Domain Pricing</Link>
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
                  <Link href="/premium-courses">Premium Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/plugins-themes">Plugins and Themes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/hire-developer">Hire a Developer</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden md:inline-flex" asChild>
              <Link href="/signup">
                <span>Get Started</span>
                <span className="sr-only">Get Started</span>
              </Link>
            </Button>
            <Button variant="outline" className="hidden md:inline-flex group border-primary" asChild>
              <Link href="/client-area">
                <span className="text-primary group-hover:text-white">Client Area</span>
                <span className="sr-only">Go to client area</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-background via-blue-50/50 to-violet-50/50 dark:from-background dark:via-blue-950/10 dark:to-violet-950/10 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute top-60 right-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Animated floating elements */}
              <div className="absolute top-20 left-[20%] w-12 h-12 rounded-full border border-primary/20 animate-float"></div>
              <div className="absolute top-40 right-[30%] w-8 h-8 rounded-full border border-secondary/20 animate-float animation-delay-1000"></div>
              <div className="absolute bottom-32 left-[40%] w-16 h-16 rounded-full border border-blue-500/20 animate-float animation-delay-2000"></div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 relative">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary animate-shimmer">
                    <Sparkles className="h-3.5 w-3.5 mr-2" />
                    <span>New Customer Offer: 75% Off First 3 Months</span>
                  </div>
                  
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-violet-600 leading-[1.1]">
                    Supercharge Your Online Presence
                  </h1>
                  
                  <p className="max-w-[600px] text-lg sm:text-xl text-muted-foreground md:text-2xl mt-4">
                    Launch your website with our lightning-fast hosting. 99.9% uptime guarantee, superior performance, and 24/7 expert support.
                  </p>
                </div>
                
                {/* Domain search bar */}
                <div className="mt-8 max-w-3xl">
                  <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-2 shadow-lg border border-gray-200 dark:bg-gray-900/80 dark:border-gray-800">
                    <h3 className="text-lg font-semibold px-3 py-2">Find Your Perfect Domain</h3>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-grow">
                        <input 
                          type="text" 
                          placeholder="Enter your domain name" 
                          className="w-full h-12 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                          <Globe className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <Button size="lg" className="w-full h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white">
                          Search Domain
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 px-3 py-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <span className="text-primary font-medium">.com</span>
                        <span>$9.99</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-primary font-medium">.org</span>
                        <span>$8.99</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-primary font-medium">.net</span>
                        <span>$10.99</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-primary font-medium">.io</span>
                        <span>$29.99</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-6">
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white font-medium">
                    <Link href="/signup">
                      Get Started Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href="#pricing">
                      View Plans
                    </Link>
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/80 to-blue-600/80 flex items-center justify-center text-xs font-bold text-white border-2 border-white">
                          {['JS', 'KL', 'MT', 'AR'][i]}
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-bold">500+</span> Happy customers
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-medium">4.9/5 ratings</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Free Domain</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Free SSL Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                </div>
              </div>
              
              {/* Right side with illustration */}
              <div className="relative flex items-center justify-center">
                <div className="relative z-10 w-full max-w-[550px] h-[550px] perspective-1000">
                  <div className="absolute inset-0 animate-float">
                    {/* Hosting Infrastructure Illustration */}
                    <div className="relative flex items-center justify-center">
                      {/* Server Tower */}
                      <div className="absolute -left-10 sm:-left-20 md:-left-32 top-10 w-[100px] sm:w-[130px] md:w-[160px] animate-float scale-75 sm:scale-90 md:scale-100">
                        <div className="w-full bg-blue-800 rounded-xl h-[180px] sm:h-[210px] md:h-[240px] relative overflow-hidden shadow-xl">
                          <div className="absolute top-0 left-0 w-full h-8 bg-blue-900"></div>
                          <div className="absolute top-12 left-0 w-full h-36 flex flex-col gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3">
                            <div className="h-6 sm:h-7 md:h-8 bg-blue-700/50 rounded-lg flex items-center justify-center">
                              <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-orange-400"></div>
                                ))}
                              </div>
                            </div>
                            <div className="h-6 sm:h-7 md:h-8 bg-blue-700/50 rounded-lg flex items-center justify-center">
                              <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-orange-400"></div>
                                ))}
                              </div>
                            </div>
                            <div className="h-6 sm:h-7 md:h-8 bg-blue-700/50 rounded-lg flex items-center justify-center">
                              <div className="flex gap-1">
                                {[...Array(3)].map((_, i) => (
                                  <div key={i} className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-orange-400"></div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-800/20 to-transparent"></div>
                          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 rounded-full bg-blue-200 flex items-center justify-center">
                            <Zap className="h-3 sm:h-3.5 md:h-4 w-3 sm:w-3.5 md:w-4 text-blue-800" />
                          </div>
                        </div>
                      </div>

                      {/* Cloud with Download Icon */}
                      <div className="absolute -top-16 sm:-top-16 md:-top-20 left-20 sm:left-24 md:left-28 animate-float animation-delay-2000 scale-75 sm:scale-90 md:scale-100">
                        <div className="relative">
                          <div className="w-24 sm:w-28 md:w-32 h-16 sm:h-16 md:h-20 bg-blue-600 rounded-full"></div>
                          <div className="absolute top-6 -left-8 w-16 sm:w-16 md:w-20 h-12 sm:h-12 md:h-16 bg-violet-400 rounded-full"></div>
                          <div className="absolute top-2 left-10 w-20 sm:w-20 md:w-24 h-12 sm:h-12 md:h-14 bg-violet-500 rounded-full"></div>
                          <div className="absolute top-8 sm:top-9 md:top-10 left-24 flex items-center justify-center w-10 sm:w-10 md:w-12 h-16 sm:h-16 md:h-20">
                            <div className="w-8 sm:w-8 md:w-10 h-14 sm:h-14 md:h-16 bg-yellow-400 clip-arrow-down rounded transform rotate-12 shadow-lg"></div>
                          </div>
                        </div>
                      </div>

                      {/* Computer Display */}
                      <div className="relative top-10 animate-float animation-delay-1000 scale-75 sm:scale-90 md:scale-100">
                        <div className="w-[200px] sm:w-[240px] md:w-[280px] h-[150px] sm:h-[180px] md:h-[200px] bg-blue-700 rounded-xl relative shadow-xl">
                          <div className="absolute inset-2 bg-white/90 rounded-lg flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full p-3 sm:p-3.5 md:p-4">
                              <div className="h-3 sm:h-3.5 md:h-4 w-16 sm:w-18 md:w-20 bg-orange-400 rounded mb-2 sm:mb-2.5 md:mb-3"></div>
                              <div className="h-12 sm:h-14 md:h-16 w-full bg-blue-100 rounded flex items-center justify-center">
                                <div className="w-12 sm:w-14 md:w-16 h-6 sm:h-7 md:h-8 bg-yellow-400 rounded"></div>
                              </div>
                              <div className="h-3 sm:h-3.5 md:h-4 w-full bg-gray-200 rounded mt-2 sm:mt-2.5 md:mt-3"></div>
                              <div className="h-3 sm:h-3.5 md:h-4 w-3/4 bg-gray-200 rounded mt-1.5 sm:mt-1.75 md:mt-2"></div>
                            </div>
                          </div>
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 sm:w-18 md:w-20 h-5 sm:h-5.5 md:h-6 bg-blue-900 rounded"></div>
                        </div>
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 sm:w-36 md:w-40 h-3 sm:h-3.5 md:h-4 bg-blue-950 rounded-sm"></div>
                        <div className="absolute -bottom-18 left-1/2 -translate-x-1/2 w-[80px] sm:w-[90px] md:w-[100px] h-[40px] sm:h-[48px] md:h-[55px] flex items-end">
                          <div className="w-full h-3 sm:h-3.5 md:h-4 bg-blue-800 rounded-t"></div>
                        </div>
                      </div>

                      {/* Smartphone - hide on smallest screens */}
                      <div className="absolute right-0 sm:right-0 md:right-0 top-20 animate-float animation-delay-3000 scale-75 sm:scale-90 md:scale-100 hidden sm:block">
                        <div className="w-[60px] sm:w-[70px] md:w-[80px] h-[120px] sm:h-[140px] md:h-[160px] bg-blue-600 rounded-xl shadow-lg relative">
                          <div className="absolute inset-1 rounded-lg bg-white/90 flex flex-col">
                            <div className="h-1.5 sm:h-1.75 md:h-2 bg-blue-200 rounded-t-lg"></div>
                            <div className="flex-grow p-1.5 sm:p-1.75 md:p-2">
                              <div className="w-full h-2 sm:h-2.5 md:h-3 bg-gray-200 rounded mb-1"></div>
                              <div className="w-full h-2 sm:h-2.5 md:h-3 bg-gray-200 rounded mb-1"></div>
                              <div className="w-3/4 h-2 sm:h-2.5 md:h-3 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Router/Modem - hide on smallest screens */}
                      <div className="absolute right-5 sm:right-8 md:right-10 bottom-5 sm:bottom-8 md:bottom-10 animate-float animation-delay-4000 scale-75 sm:scale-90 md:scale-100 hidden sm:block">
                        <div className="w-[80px] sm:w-[90px] md:w-[100px] h-[24px] sm:h-[27px] md:h-[30px] bg-blue-800/80 rounded-lg shadow-lg relative">
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end px-1.5 sm:px-1.75 md:px-2 gap-1">
                            {[...Array(4)].map((_, i) => (
                              <div key={i} className="w-1.5 sm:w-1.75 md:w-2 h-1.5 sm:h-1.75 md:h-2 rounded-full bg-orange-400"></div>
                            ))}
                          </div>
                          <div className="absolute -top-16 sm:-top-16 md:-top-20 right-0 flex flex-col items-center">
                            <div className="w-1 sm:w-1 md:w-1 h-16 sm:h-16 md:h-20 bg-blue-300"></div>
                            <div className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 rounded-full border-2 sm:border-3 md:border-4 border-blue-300 -mt-2 sm:-mt-2 md:-mt-3"></div>
                          </div>
                        </div>
                      </div>

                      {/* Shield with Gear (Security) - hide on smallest screens */}
                      <div className="absolute -bottom-16 sm:-bottom-16 md:-bottom-20 -left-5 sm:-left-8 md:-left-10 animate-float animation-delay-2000 scale-75 sm:scale-90 md:scale-100 hidden sm:block">
                        <div className="relative h-[80px] sm:h-[90px] md:h-[100px] w-[68px] sm:w-[76px] md:w-[85px]">
                          <div className="absolute inset-0 bg-blue-600 rounded-t-full rounded-b-3xl"></div>
                          <div className="absolute inset-3 bg-blue-100 rounded-t-full rounded-b-3xl flex items-center justify-center">
                            <div className="absolute">
                              <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                                <div className="w-5 sm:w-5 md:w-6 h-5 sm:h-5 md:h-6 rounded-full border border-2 md:border-2 border-blue-700"></div>
                              </div>
                            </div>
                            <div className="absolute">
                              <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full border border-2 md:border-2 border-blue-600 border-dashed animate-spin" style={{ animationDuration: '10s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Connecting Dotted Lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                        <path 
                          d="M100,100 L220,150 L340,100 L220,50 Z" 
                          stroke="rgba(147, 197, 253, 0.5)" 
                          strokeWidth="2" 
                          strokeDasharray="5,5" 
                          fill="none" 
                          className="hidden sm:block" />
                        <path 
                          d="M220,150 L220,250" 
                          stroke="rgba(147, 197, 253, 0.5)" 
                          strokeWidth="2" 
                          strokeDasharray="5,5" 
                          fill="none" />
                        <path 
                          d="M100,100 L50,200" 
                          stroke="rgba(147, 197, 253, 0.5)" 
                          strokeWidth="2" 
                          strokeDasharray="5,5" 
                          fill="none" 
                          className="hidden sm:block" />
                        <path 
                          d="M340,100 L400,200" 
                          stroke="rgba(147, 197, 253, 0.5)" 
                          strokeWidth="2" 
                          strokeDasharray="5,5" 
                          fill="none" 
                          className="hidden sm:block" />
                        
                        {/* Simplified path for mobile */}
                        <path 
                          d="M150,150 L220,200" 
                          stroke="rgba(147, 197, 253, 0.5)" 
                          strokeWidth="2" 
                          strokeDasharray="5,5" 
                          fill="none" 
                          className="block sm:hidden" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-[20px] bg-black/10 dark:bg-white/10 blur-xl rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex justify-center mb-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground mt-1">NVMe SSD storage</p>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex justify-center mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Secure</h3>
                <p className="text-sm text-muted-foreground mt-1">DDoS protection</p>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex justify-center mb-3">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Reliable</h3>
                <p className="text-sm text-muted-foreground mt-1">99.9% uptime</p>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex justify-center mb-3">
                  <HeadphonesIcon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Support</h3>
                <p className="text-sm text-muted-foreground mt-1">24/7 expert help</p>
              </div>
            </div>
          </div>
        </section>

        {/* Creative Pricing Section */}
        <section id="pricing" className="relative w-full py-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none animate-pulse animation-delay-2000"></div>

          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

          {/* Decorative shapes */}
          <div className="absolute top-40 right-[20%] w-24 h-24 rounded-full border border-primary/20 pointer-events-none"></div>
          <div className="absolute top-60 right-[18%] w-16 h-16 rounded-full border border-primary/20 pointer-events-none"></div>
          <div className="absolute bottom-40 left-[15%] w-32 h-32 rounded-full border border-secondary/20 pointer-events-none"></div>
          <div className="absolute bottom-60 left-[18%] w-20 h-20 rounded-full border border-secondary/20 pointer-events-none"></div>

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center justify-center p-1 px-3 rounded-full bg-primary/10 text-primary mb-4 animate-shimmer">
                <Sparkles className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Your Website Deserves the Best
              </h2>
              <p className="max-w-[800px] text-lg text-muted-foreground md:text-xl">
                Choose a plan that matches your ambition. Upgrade or downgrade anytime.
              </p>

              <div className="flex items-center justify-center mt-6 space-x-4">
                <Link
                  href="#"
                  className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <CreditCard className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Money-back guarantee
                </Link>
                <Link
                  href="#"
                  className="group inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  <Gift className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Free domain with annual plans
                </Link>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {[
                {
                  name: "Starter Cloud Plan",
                  description: "Perfect for personal websites and small projects",
                  price: "TZS 99,000",
                  monthlyPrice: "TZS 8,250",
                  features: [
                    "10 websites",
                    "30 GB NVMe storage",
                    "~25,000 visits monthly",
                    "Free website migration",
                    "Unlimited free SSL",
                    "400,000 files and directories",
                    "Free pre-built templates",
                    "99.9% uptime guarantee",
                    "24/7 support",
                  ],
                  color: "bg-primary/10",
                  icon: <Server className="h-5 w-5" />,
                  highlight: false,
                  badge: "Best Value",
                  accentIcon: <Cpu className="h-4 w-4 text-primary" />,
                  accentText: "SSD Powered",
                  buttonText: "Get Starter",
                },
                {
                  name: "Business Cloud Plan",
                  description: "Designed for growing businesses and e-commerce",
                  price: "TZS 149,000",
                  monthlyPrice: "TZS 12,417",
                  features: [
                    "30 websites",
                    "50 GB NVMe storage",
                    "~50,000 visits monthly",
                    "Free Domain",
                    "Free automatic website migration",
                    "600,000 files and directories",
                    "Priority support response",
                    "Advanced caching",
                    "Daily backups",
                  ],
                  color: "bg-primary",
                  icon: <Star className="h-5 w-5" />,
                  highlight: true,
                  badge: "Most Popular",
                  accentIcon: <Rocket className="h-4 w-4 text-primary" />,
                  accentText: "Turbo Boost",
                  buttonText: "Get Business",
                  discount: "Save 40% compared to monthly billing",
                },
                {
                  name: "Economic Cloud Plan",
                  description: "Ultimate performance for high-traffic websites",
                  price: "TZS 189,000",
                  monthlyPrice: "TZS 15,750",
                  features: [
                    "50 websites",
                    "100 GB NVMEs Storage",
                    "~100,000 visits monthly",
                    "Free Domain",
                    "Free automatic website migration",
                    "900,000 files and directories",
                    "Unlimited MYSQL Databases",
                    "Dedicated resources",
                    "Advanced security features",
                  ],
                  color: "bg-secondary/20",
                  icon: <Zap className="h-5 w-5" />,
                  highlight: false,
                  badge: "High Performance",
                  accentIcon: <Award className="h-4 w-4 text-secondary" />,
                  accentText: "Enterprise Grade",
                  buttonText: "Get Economic",
                },
              ].map((plan, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden group rounded-3xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                    plan.highlight 
                      ? "border-primary bg-gradient-to-b from-primary/5 to-background shadow-lg" 
                      : "border-border hover:border-primary/40 bg-background/80"
                  }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className={`absolute top-0 right-0 px-6 py-2 ${
                      plan.highlight 
                        ? "bg-primary text-white" 
                        : i === 0 
                          ? "bg-violet-600 text-white" 
                          : "bg-blue-600 text-white"
                      } rounded-bl-2xl font-medium text-sm`}>
                      {plan.badge}
                    </div>
                  )}
                  
                  <div className="p-8">
                    {/* Plan header */}
                    <div className="mb-6">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                        i === 0 ? "bg-violet-100 text-violet-600" : 
                        i === 1 ? "bg-primary/20 text-primary" : 
                        "bg-blue-100 text-blue-600"
                      } mb-4`}>
                        {plan.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                    </div>
                    
                    {/* Price */}
                    <div className="mb-6 pb-6 border-b">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">{plan.price}/=</span>
                      </div>
                      <div className="text-sm text-muted-foreground">/year (or {plan.monthlyPrice}/= mo)</div>
                    </div>
                    
                    {/* Feature highlight */}
                    <div className={`flex items-center gap-2 mb-6 p-3 rounded-lg ${
                      i === 0 ? "bg-violet-50 text-violet-700 border border-violet-100" : 
                      i === 1 ? "bg-primary/10 border border-primary/20" : 
                      "bg-blue-50 text-blue-700 border border-blue-100"
                    }`}>
                      {plan.accentIcon}
                      <span className="text-sm font-medium">{plan.accentText}</span>
                    </div>
                    
                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm">
                          <CheckCircle className={`h-5 w-5 flex-shrink-0 ${
                            i === 0 ? "text-violet-500" : 
                            i === 1 ? "text-primary" : 
                            "text-blue-500"
                          }`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Button */}
                    <Button
                      size="lg"
                      className={`w-full ${
                        i === 0 
                          ? "bg-violet-600 hover:bg-violet-700" 
                          : i === 1 
                            ? "bg-primary hover:bg-primary/90" 
                            : "bg-blue-600 hover:bg-blue-700"
                      } text-white`}
                    >
                      {plan.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    {/* Discount note */}
                    {plan.discount && (
                      <div className="text-center mt-4 text-xs text-muted-foreground">
                        <span className="text-primary font-medium">Save 40%</span> compared to monthly billing
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced comparison section */}
            <div className="mt-16 mb-8 rounded-2xl p-6 md:p-8 relative overflow-hidden bg-gradient-to-br from-white/80 to-white/30 dark:from-gray-900/80 dark:to-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-800/20 shadow-xl">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full text-primary/10 dark:text-primary/5"
                  fill="currentColor"
                >
                  <path d="M 0 100 C 0 44.772 44.772 0 100 0 C 155.228 0 200 44.772 200 100 C 200 155.228 155.228 200 100 200 C 44.772 200 0 155.228 0 100 Z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full text-secondary/10 dark:text-secondary/5"
                  fill="currentColor"
                >
                  <path d="M 0 100 C 0 44.772 44.772 0 100 0 C 155.228 0 200 44.772 200 100 C 200 155.228 155.228 200 100 200 C 44.772 200 0 155.228 0 100 Z" />
                </svg>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center relative">
                <div>
                  <div className="inline-flex items-center text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-secondary/20 to-secondary/10 text-secondary mb-4">
                    <LightbulbIcon className="h-4 w-4 mr-1.5" />
                    Pro Tip
                  </div>
                  <h3 className="text-2xl font-bold">Still not sure which plan to choose?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our experts can analyze your specific needs and suggest the perfect hosting solution. Plus, get a
                    free consultation on optimizing your website for maximum performance.
                  </p>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 gap-3 mt-4 mb-6">
                    {[
                      { icon: <TrendingUp className="h-4 w-4 text-primary" />, text: "Performance Analysis" },
                      { icon: <Shield className="h-4 w-4 text-primary" />, text: "Security Recommendations" },
                      { icon: <Wifi className="h-4 w-4 text-primary" />, text: "Speed Optimization" },
                      { icon: <Heart className="h-4 w-4 text-primary" />, text: "Personalized Support" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button className="relative overflow-hidden group">
                      <span className="relative z-10">Talk to an Expert</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
                    </Button>
                    <Button variant="outline" className="group">
                      Compare Plans
                      <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="border rounded-xl p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-lg transform transition-transform duration-300 hover:scale-105">
                    <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                      NEW
                    </div>
                    <h4 className="text-lg font-medium mb-2">What customers say</h4>
                    <div className="space-y-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm italic">
                        "Switching to RodLine Hosting was the best decision for our business. Our website loads faster,
                        and their support team was amazing during migration!"
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                          <span className="text-xs font-bold">SJ</span>
                        </div>
                        <div className="text-sm font-medium">Sarah Johnson - TechBlog Owner</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -bottom-4 -left-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-3 py-1 text-xs font-medium shadow-lg animate-float">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-8 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-lg px-3 py-1 text-xs font-medium shadow-lg animate-float animation-delay-1000">
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      <span>Lightning Fast</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium">Trusted by 10,000+ businesses worldwide</h2>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src={`/placeholder.svg?height=40&width=120`}
                    width={120}
                    height={40}
                    alt={`Company logo ${i}`}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need to succeed online
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our hosting platform is designed to provide you with all the tools and resources you need to build and
                  grow your online presence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Lightning Fast Performance",
                  description:
                    "SSD storage and optimized servers ensure your website loads quickly for visitors from anywhere in the world.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-primary" />,
                  title: "Advanced Security",
                  description:
                    "Free SSL certificates, DDoS protection, and regular backups keep your website safe and secure.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-primary" />,
                  title: "Global CDN",
                  description:
                    "Content delivery network ensures your website loads quickly for visitors from anywhere in the world.",
                },
                {
                  icon: <Server className="h-10 w-10 text-primary" />,
                  title: "Scalable Resources",
                  description:
                    "Easily upgrade your hosting plan as your website grows, with no downtime or technical hassle.",
                },
                {
                  icon: <Clock className="h-10 w-10 text-primary" />,
                  title: "99.9% Uptime Guarantee",
                  description: "We guarantee your website will be available 99.9% of the time, or you get compensated.",
                },
                {
                  icon: <HeadphonesIcon className="h-10 w-10 text-primary" />,
                  title: "24/7 Expert Support",
                  description: "Our technical support team is available around the clock to help you with any issues.",
                },
              ].map((feature, i) => (
                <Card key={i} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Reseller Section */}
        <section id="reseller" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
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
    </div>
  );
}

