import React, { useState, useEffect } from "react";
import {
  Play, Trophy, Target, BookOpen, Coins, Users, Star, ArrowRight,
  Sparkles, TrendingUp, Award, Brain, Zap, Heart, Shield, Gift, 
  DollarSign, BarChart2, GameController2, Flame, Crown, Medal,
  ChevronRight, Volume2, VolumeX, Settings, Menu, X
} from "lucide-react";

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [userCoins, setUserCoins] = useState(1250);
  const [userLevel, setUserLevel] = useState(7);
  const [streakCount, setStreakCount] = useState(12);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredGame, setHoveredGame] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const elements = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      emoji: ['💰', '✨', '📈', '🌳', '💎', '📊', '🚀', '🌟', '🎯', '🏆', '⚡', '🔥'][Math.floor(Math.random() * 12)]
    }));
    setFloatingElements(elements);

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleCoinClick = () => {
    setUserCoins(prev => prev + 10);
    if (soundEnabled) {
      // Sound effect would play here
    }
  };

  const games = [
    { 
      name: "Quiz Arena", 
      description: "Test your financial knowledge in epic quiz battles", 
      icon: "🧠", 
      color: "from-purple-400 to-pink-400", 
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100", 
      coins: 50, 
      progress: 0.75,
      players: "2.3k",
      difficulty: "Medium",
      timeToComplete: "15 min"
    },
    { 
      name: "Budget Battle", 
      description: "Master budgeting through strategic challenges", 
      icon: "💰", 
      color: "from-green-400 to-emerald-400", 
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100", 
      coins: 75, 
      progress: 0.6,
      players: "1.8k",
      difficulty: "Hard",
      timeToComplete: "20 min"
    },
    { 
      name: "InvestoRun", 
      description: "Sprint through investment scenarios and win big", 
      icon: "📈", 
      color: "from-blue-400 to-cyan-400", 
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100", 
      coins: 100, 
      progress: 0.8,
      players: "3.1k",
      difficulty: "Easy",
      timeToComplete: "10 min"
    },
    { 
      name: "Spin & Win", 
      description: "Daily fortune wheel with financial wisdom", 
      icon: "🎯", 
      color: "from-orange-400 to-red-400", 
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100", 
      coins: 25, 
      progress: 0.9,
      players: "4.2k",
      difficulty: "Easy",
      timeToComplete: "5 min"
    }
  ];

  const features = [
    { 
      icon: <Coins className="w-8 h-8" />, 
      title: "Earn Virtual Currency", 
      description: "Complete challenges to earn coins and unlock premium features", 
      color: "from-yellow-400 to-orange-400",
      stats: "10K+ coins earned daily"
    },
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: "AI-Powered Learning", 
      description: "Personalized financial advice tailored to your goals", 
      color: "from-purple-400 to-pink-400",
      stats: "95% accuracy rate"
    },
    { 
      icon: <Target className="w-8 h-8" />, 
      title: "Achievement System", 
      description: "Unlock badges, titles, and special rewards", 
      color: "from-green-400 to-teal-400",
      stats: "50+ achievements"
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: "Real-time Simulation", 
      description: "Practice with live market data in safe environment", 
      color: "from-blue-400 to-indigo-400",
      stats: "Live market data"
    }
  ];

  const howItWorks = [
    { 
      icon: <BookOpen className="w-8 h-8" />, 
      title: "Learn & Explore", 
      description: "Take interactive courses and discover financial concepts through storytelling",
      step: "01"
    },
    { 
      icon: <GameController2 className="w-8 h-8" />, 
      title: "Play & Practice", 
      description: "Apply knowledge through engaging mini-games and real-world scenarios",
      step: "02"
    },
    { 
      icon: <Trophy className="w-8 h-8" />, 
      title: "Compete & Win", 
      description: "Challenge friends, climb leaderboards, and earn exclusive rewards",
      step: "03"
    }
  ];

  const testimonials = [
    { 
      name: "Alex M.", 
      role: "College Student", 
      quote: "Level Up transformed my understanding of investing. The games make complex concepts so easy to grasp!", 
      rating: 5, 
      avatar: "🧑‍🎓",
      achievement: "Investment Master"
    },
    { 
      name: "Sarah K.", 
      role: "Young Professional", 
      quote: "The AI guidance helped me create a realistic budget and savings plan. I'm finally in control of my finances!", 
      rating: 5, 
      avatar: "👩‍💼",
      achievement: "Budget Boss"
    },
    { 
      name: "Jake P.", 
      role: "Freelancer", 
      quote: "I love competing with friends on the leaderboard. Learning has never been this addictive!", 
      rating: 5, 
      avatar: "👨‍💻",
      achievement: "Quiz Champion"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "FinanceWizard", score: 2850, avatar: "🧙‍♂️", level: 15, streak: 30 },
    { rank: 2, name: "MoneyMaster", score: 2650, avatar: "💸", level: 14, streak: 25 },
    { rank: 3, name: "BudgetBoss", score: 2400, avatar: "📊", level: 12, streak: 20 },
    { rank: 4, name: "InvestorPro", score: 2200, avatar: "📈", level: 11, streak: 18 },
    { rank: 5, name: "CoinCollector", score: 2100, avatar: "🪙", level: 10, streak: 15 }
  ];

  const achievements = [
    { name: "First Steps", description: "Complete your first lesson", icon: "🎯", unlocked: true },
    { name: "Quiz Master", description: "Score 100% on 10 quizzes", icon: "🧠", unlocked: true },
    { name: "Coin Collector", description: "Earn 1000 coins", icon: "💰", unlocked: true },
    { name: "Streak Legend", description: "Maintain 30-day streak", icon: "🔥", unlocked: false },
    { name: "Investment Guru", description: "Complete all investment courses", icon: "📈", unlocked: false },
    { name: "Budget Boss", description: "Create perfect budget", icon: "💼", unlocked: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden font-sans">
      {/* Enhanced Floating Elements */}
      {floatingElements.map(element => (
        <div
          key={element.id}
          className="absolute text-2xl opacity-60 animate-bounce cursor-pointer hover:opacity-100 transition-opacity"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`
          }}
          onClick={element.emoji === '💰' ? handleCoinClick : undefined}
        >
          {element.emoji}
        </div>
      ))}

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-20 animate-spin-slow"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="relative z-50 p-6 flex justify-between items-center bg-white/80 backdrop-blur-md shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 shadow-lg animate-pulse">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Level Up</span>
        </div>
        
        {/* User Stats in Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-4 py-2 shadow-md">
            <Coins className="w-5 h-5 text-orange-500" />
            <span className="font-bold text-gray-700">{userCoins.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 shadow-md">
            <Crown className="w-5 h-5 text-purple-500" />
            <span className="font-bold text-gray-700">Level {userLevel}</span>
          </div>
          <div className="flex items-center space-x-2 bg-gradient-to-r from-red-100 to-pink-100 rounded-full px-4 py-2 shadow-md">
            <Flame className="w-5 h-5 text-red-500" />
            <span className="font-bold text-gray-700">{streakCount} days</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6 text-gray-700 font-medium">
            <a href="#games" className="hover:text-purple-600 transition-colors">Games</a>
            <a href="#how-it-works" className="hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-purple-600 transition-colors">Reviews</a>
          </div>
          <button 
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg">
            Start Playing Free
          </button>
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            <a href="#games" className="hover:text-purple-600 transition-colors">Games</a>
            <a href="#how-it-works" className="hover:text-purple-600 transition-colors">How It Works</a>
            <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-purple-600 transition-colors">Reviews</a>
          </div>
        </div>
      )}

      {/* Enhanced Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className={`max-w-6xl mx-auto transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="mb-16 relative">
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="animate-float group cursor-pointer">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full flex items-center justify-center text-5xl shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                  🌱
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-white rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-gray-600">Grow Wealth</span>
                  </div>
                </div>
              </div>
              <div className="animate-float group cursor-pointer" style={{ animationDelay: "0.5s" }}>
                <div className="w-40 h-40 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full flex items-center justify-center text-6xl shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                  💳
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-white rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-gray-600">Smart Wallet</span>
                  </div>
                </div>
              </div>
              <div className="animate-float group cursor-pointer" style={{ animationDelay: "1s" }}>
                <div className="w-32 h-32 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full flex items-center justify-center text-5xl shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                  📊
                </div>
                <div className="mt-4 text-center">
                  <div className="bg-white rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-semibold text-gray-600">Analytics</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badges */}
            <div className="absolute -top-4 -left-4 animate-bounce">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                🏆
              </div>
            </div>
            <div className="absolute -top-8 right-8 animate-pulse">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xl shadow-lg">
                ⚡
              </div>
            </div>
            <div className="absolute -bottom-4 left-12 animate-bounce" style={{ animationDelay: "0.7s" }}>
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center text-2xl shadow-lg">
                🎯
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Master Money</span>
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block">Through Gaming!</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium">
            Transform your financial future with AI-powered games, real-world simulations, and a thriving community of learners.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 rounded-full font-bold text-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-3 group">
              <Play className="w-6 h-6 group-hover:animate-spin" />
              <span>Start Your Journey</span>
            </button>
            <button className="bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-3 border-2 border-purple-200">
              <GameController2 className="w-6 h-6" />
              <span>Play Demo</span>
            </button>
          </div>
          
          {/* Live Stats */}
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>2,847 players online</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>15,293 games played today</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section id="how-it-works" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Your Learning Journey</h2>
            <p className="text-gray-600 text-xl">Three simple steps to financial mastery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 group hover:scale-105">
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:animate-bounce">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Games Section */}
      <section id="games" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Featured Games</h2>
            <p className="text-gray-600 text-xl">Level up your financial skills through epic gameplay</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <div 
                key={index} 
                className={`${game.bgColor} rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl border border-white/50 group`}
                onMouseEnter={() => setHoveredGame(index)}
                onMouseLeave={() => setHoveredGame(null)}
              >
                <div className="relative">
                  <div className="text-6xl mb-6 text-center group-hover:animate-bounce">{game.icon}</div>
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white rounded-full px-2 py-1 text-xs font-bold shadow-lg">
                    {game.difficulty}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{game.name}</h3>
                <p className="text-gray-600 mb-6 text-base leading-relaxed">{game.description}</p>
                
                {/* Game Stats */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>👥 {game.players} players</span>
                    <span>⏱️ {game.timeToComplete}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`bg-gradient-to-r ${game.color} h-3 rounded-full transition-all duration-500`} 
                      style={{ width: `${game.progress * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">Progress: {Math.round(game.progress * 100)}%</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                    <Coins className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm font-bold text-gray-700">{game.coins}</span>
                  </div>
                  <button className="bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white">
                    <Play className="w-5 h-5 text-gray-600 group-hover:text-white" />
                  </button>
                </div>
                
                {hoveredGame === index && (
                  <div className="mt-4 bg-white rounded-xl p-4 shadow-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-gray-700">Quick Play</span>
                      <ChevronRight className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Why Choose Level Up?</h2>
            <p className="text-gray-600 text-xl">Revolutionary features that make learning addictive</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 text-center border border-gray-100 group hover:scale-105">
                <div className={`bg-gradient-to-r ${feature.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:animate-pulse`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <div className="text-sm text-purple-600 font-semibold bg-purple-50 rounded-full px-3 py-1">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Unlock Achievements</h2>
            <p className="text-gray-600 text-xl">Earn badges and show off your financial prowess</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`rounded-3xl p-6 border-2 transition-all duration-300 ${achievement.unlocked ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center space-x-4">
                  <div className={`text-4xl ${achievement.unlocked ? 'grayscale-0' : 'grayscale'}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold ${achievement.unlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.unlocked && (
                    <div className="ml-auto">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full p-2">
                        <Medal className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Leaderboard Section */}
      <section id="leaderboard" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Global Leaderboard</h2>
            <p className="text-gray-600 text-xl">Compete with players worldwide and climb to the top</p>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="space-y-4">
              {leaderboard.map((player, index) => (
                <div key={index} className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${index === 0 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' : index === 1 ? 'bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200' : index === 2 ? 'bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200' : 'bg-gray-50 hover:bg-gray-100'}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white' : index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white' : index === 2 ? 'bg-gradient-to-r from-orange-400 to-red-400 text-white' : 'bg-gray-300 text-gray-700'}`}>
                      {player.rank}
                    </div>
                    <div className="text-3xl">{player.avatar}</div>
                    <div>
                      <p className="text-lg font-semibold text-gray-800">{player.name}</p>
                      <p className="text-sm text-gray-500">Level {player.level} • {player.streak} day streak</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span className="text-lg font-bold text-gray-700">{player.score.toLocaleString()}</span>
                      </div>
                    </div>
                    {index < 3 && (
                      <div className="text-2xl">
                        {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Success Stories</h2>
            <p className="text-gray-600 text-xl">Real players, real results, real transformations</p>
          </div>
          
          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100 text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                {Array(testimonials[currentTestimonial].rating).fill().map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl text-gray-700 mb-8 italic font-medium">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-5xl">{testimonials[currentTestimonial].avatar}</div>
                <div className="text-left">
                  <p className="text-xl font-bold text-gray-800">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-3 py-1 mt-2">
                    <span className="text-sm font-semibold text-purple-700">{testimonials[currentTestimonial].achievement}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-12 text-center shadow-2xl border border-white/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  50K+
                </div>
                <div className="text-gray-600 text-xl font-semibold">Active Players</div>
                <div className="text-sm text-gray-500">Growing daily</div>
              </div>
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  2M+
                </div>
                <div className="text-gray-600 text-xl font-semibold">Games Played</div>
                <div className="text-sm text-gray-500">This month</div>
              </div>
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-gray-600 text-xl font-semibold">Success Rate</div>
                <div className="text-sm text-gray-500">Financial improvement</div>
              </div>
              <div className="group">
                <div className="text-6xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  4.9★
                </div>
                <div className="text-gray-600 text-xl font-semibold">App Rating</div>
                <div className="text-sm text-gray-500">10K+ reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-6">Ready to Level Up Your Life?</h2>
              <p className="text-2xl mb-12 opacity-90">Join thousands of players already mastering their financial future</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="bg-white text-purple-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-2xl flex items-center space-x-3">
                  <Play className="w-6 h-6" />
                  <span>Start Playing Now</span>
                </button>
                <button className="bg-transparent border-2 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105 flex items-center space-x-3">
                  <Users className="w-6 h-6" />
                  <span>Join Community</span>
                </button>
              </div>
              <div className="mt-8 text-sm opacity-80">
                ✓ Free to start • ✓ No credit card required • ✓ Join 50,000+ players
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 px-6 py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-2">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Level Up</span>
              </div>
              <p className="text-gray-400">Empowering financial literacy through gamification and AI-powered learning.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Games</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Quiz Arena</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Budget Battle</a></li>
                <li><a href="#" className="hover:text-white transition-colors">InvestoRun</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Spin & Win</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Financial Basics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment 101</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Budgeting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Planning</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leaderboards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 Level Up. All rights reserved. Built with ❤️ for financial empowerment.</p>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;