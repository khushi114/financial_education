import React, { useState, useEffect } from 'react';
import { Play, Trophy, Target, BookOpen, Coins, Users, Star, ArrowRight, Sparkles, TrendingUp, Award, Brain, Zap, Heart, Shield, Gift } from 'lucide-react';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    // Create floating elements animation
    const elements = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
      emoji: ['💰', '✨', '🎯', '📊', '🚀', '💎', '🌟', '🎪'][Math.floor(Math.random() * 8)]
    }));
    setFloatingElements(elements);
  }, []);

  const games = [
    {
      name: "Quiz Arena",
      description: "Test your financial knowledge in fun competitive quizzes",
      icon: "🧠",
      color: "from-blue-200 to-blue-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      coins: 50
    },
    {
      name: "Budget Battle",
      description: "Master budgeting through interactive challenges",
      icon: "💰",
      color: "from-green-200 to-green-400",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      coins: 75
    },
    {
      name: "InvestoRun",
      description: "Run through investment scenarios and build wealth",
      icon: "📈",
      color: "from-purple-200 to-purple-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      coins: 100
    },
    {
      name: "Spin & Win",
      description: "Daily rewards and surprise financial tips",
      icon: "🎯",
      color: "from-orange-200 to-orange-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      coins: 25
    }
  ];

  const features = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Earn Virtual Currency",
      description: "Complete courses and challenges to earn practice coins for real-world financial scenarios",
      color: "from-yellow-200 to-yellow-300"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Career Guidance",
      description: "Get personalized career advice powered by advanced AI algorithms",
      color: "from-pink-200 to-pink-300"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Gamified Learning",
      description: "Level up your financial skills through engaging games and challenges",
      color: "from-blue-200 to-blue-300"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-World Simulation",
      description: "Practice investment strategies in a safe, simulated environment",
      color: "from-green-200 to-green-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Floating Elements Animation */}
      {floatingElements.map((element) => (
        <div
          key={element.id}
          className="absolute text-xl opacity-70 animate-bounce"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
        >
          {element.emoji}
        </div>
      ))}

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-10 animate-spin-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-full p-3 shadow-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Level Up</span>
        </div>
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <a href="#games" className="hover:text-purple-600 transition-colors">Games</a>
          <a href="#courses" className="hover:text-purple-600 transition-colors">Courses</a>
          <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
          <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
        </div>
        <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all transform hover:scale-105 shadow-lg">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-12 flex justify-center">
            <div className="relative">
              {/* Enhanced Cartoon Characters */}
              <div className="flex items-center justify-center space-x-12 mb-12">
                <div className="animate-float">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-200 to-pink-400 rounded-full flex items-center justify-center text-5xl shadow-2xl border-4 border-white">
                    👨‍💼
                  </div>
                  <div className="mt-4 text-center">
                    <div className="bg-white rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-gray-600">Career Growth</span>
                    </div>
                  </div>
                </div>
                <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-white">
                    👩‍🎓
                  </div>
                  <div className="mt-4 text-center">
                    <div className="bg-white rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-gray-600">Learn & Earn</span>
                    </div>
                  </div>
                </div>
                <div className="animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-green-400 rounded-full flex items-center justify-center text-5xl shadow-2xl border-4 border-white">
                    👨‍💻
                  </div>
                  <div className="mt-4 text-center">
                    <div className="bg-white rounded-full px-4 py-2 shadow-lg">
                      <span className="text-sm font-semibold text-gray-600">Smart Investing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements around characters */}
              <div className="absolute -top-8 -left-8 animate-bounce">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full flex items-center justify-center text-2xl shadow-lg">💰</div>
              </div>
              <div className="absolute -top-12 right-12 animate-pulse">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full flex items-center justify-center text-xl shadow-lg">✨</div>
              </div>
              <div className="absolute -bottom-8 left-16 animate-bounce" style={{animationDelay: '0.5s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center text-2xl shadow-lg">📊</div>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-pulse" style={{animationDelay: '1s'}}>
                <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-green-400 rounded-full flex items-center justify-center text-xl shadow-lg">🚀</div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Level Up Your</span>
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent block">Financial Game!</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium">
            Master money management through interactive games, AI-powered career guidance, and gamified financial education for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-3">
              <Play className="w-6 h-6" />
              <span>Play Now</span>
            </button>
            <button className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-3 border-2 border-purple-200">
              <BookOpen className="w-6 h-6" />
              <span>Explore Challenges</span>
            </button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Featured Games</h2>
            <p className="text-gray-600 text-xl">Level up your financial skills through engaging gameplay</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <div 
                key={index}
                className={`${game.bgColor} rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl border border-white/50`}
              >
                <div className="text-6xl mb-6 text-center">{game.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{game.name}</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">{game.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                    <Coins className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-bold text-gray-700">{game.coins}</span>
                  </div>
                  <div className="bg-white rounded-full p-3 shadow-md">
                    <ArrowRight className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">Why Choose Level Up?</h2>
            <p className="text-gray-600 text-xl">Empowering everyone with financial literacy through innovation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${feature.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-12 text-center shadow-2xl border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">10K+</div>
                <div className="text-gray-600 text-xl font-semibold">Active Players</div>
              </div>
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-gray-600 text-xl font-semibold">Courses Completed</div>
              </div>
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">95%</div>
                <div className="text-gray-600 text-xl font-semibold">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl p-16 text-white shadow-2xl">
            <h2 className="text-5xl font-bold mb-6">Ready to Level Up?</h2>
            <p className="text-2xl mb-12 opacity-90">Join thousands of people mastering their financial future</p>
            <button className="bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 text-center text-gray-600">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-full p-2">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Level Up</span>
          </div>
          <p className="text-lg">&copy; 2025 Level Up. Empowering everyone through financial education.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;