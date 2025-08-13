"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Star,
  Play,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Lock,
  Rocket,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Multi-Network Support",
      description: "Supports BTC, SOL, BNB, and USDT networks with seamless integration",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Process transactions in real-time with unmatched speed and efficiency",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Military-Grade Security",
      description: "Advanced encryption protocols to safeguard your transactions",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Professional Analytics",
      description: "Comprehensive tracking and reporting for all your transactions",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const pricingPlans = [
    {
      name: "Beta Launch",
      price: "$250",
      period: "/month",
      description: "Perfect for getting started with Flash USDT",
      features: ["Limited Network Access", "Basic Transaction Support", "Email Support", "Educational Resources"],
      popular: false,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Professional",
      price: "Custom",
      period: "Pricing",
      description: "Full ecosystem access for serious users",
      features: [
        "Full Network Access",
        "Unlimited Transactions",
        "Priority Support",
        "Advanced Analytics",
        "API Access",
        "Custom Integration",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  const supportedCoins = [
    { name: "Bitcoin", symbol: "BTC", color: "bg-orange-500" },
    { name: "Solana", symbol: "SOL", color: "bg-purple-500" },
    { name: "Binance Coin", symbol: "BNB", color: "bg-yellow-500" },
    { name: "Tether", symbol: "USDT", color: "bg-green-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-4 py-20">
          <div
            className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <img
                src="/flash-usdt-sender-banner.png"
                alt="Flash USDT Sender Banner"
                className="mx-auto rounded-2xl shadow-2xl max-w-full h-64 object-cover"
              />
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
              <Rocket className="h-8 w-8 text-blue-400" />
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Flash USDT Sender
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              The ultimate blockchain platform for secure, instant transactions across multiple networks
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Get Beta Access
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Revolutionary Features</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the future of blockchain transactions with our cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Coins Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Supported Networks</h2>
            <p className="text-xl text-gray-400">Trade across multiple blockchain networks with confidence</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {supportedCoins.map((coin, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-12 h-12 mx-auto rounded-full ${coin.color} flex items-center justify-center text-white font-bold text-lg mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {coin.symbol}
                  </div>
                  <h3 className="text-white font-semibold">{coin.name}</h3>
                  <p className="text-gray-400 text-sm">{coin.symbol}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-400">Select the perfect plan for your blockchain journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <CardDescription className="text-gray-400">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}

                  <Button
                    className={`w-full mt-6 bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white py-3 rounded-full font-semibold transition-all duration-300`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Learn & Connect</h2>
            <p className="text-xl text-gray-400">Watch tutorials and join our community</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Play className="h-5 w-5 text-red-500" />
                  Tutorial Video
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    Watch on YouTube
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-500" />
                  Join Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white bg-transparent"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Join Telegram
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
              <Lock className="h-6 w-6 text-green-400" />
              <p className="text-gray-400">Educational Purpose | Regulatory Compliance | Secure Testing</p>
            </div>

            <div className="flex justify-center space-x-6 mb-6">
              {[
                { icon: "🎥", label: "YouTube", color: "hover:text-red-500" },
                { icon: "📱", label: "Telegram", color: "hover:text-blue-500" },
                { icon: "💻", label: "GitHub", color: "hover:text-gray-300" },
                { icon: "🐦", label: "Twitter", color: "hover:text-blue-400" },
                { icon: "💬", label: "Discord", color: "hover:text-purple-500" },
              ].map((social, index) => (
                <button key={index} className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}>
                  {social.icon}
                </button>
              ))}
            </div>

            <div className="text-sm text-gray-500 space-x-4">
              <span>© 2024 Flash USDT Sender. All Rights Reserved.</span>
              <button className="text-blue-400 hover:underline">Privacy Policy</button>
              <button className="text-blue-400 hover:underline">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="text-xl">💬</span>
        </Button>
      </div>
    </div>
  )
}
