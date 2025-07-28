import React, { useState, useEffect } from 'react';
import { ArrowRight, Coins, Brain, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    console.log('Dashboard component mounted');
  }, []);

  const games = [
    {
      name: "Quiz Arena",
      description: "Test your financial knowledge in fun competitive quizzes",
      icon: "🧠",
      color: "from-blue-200 to-blue-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      coins: 50,
    },
    {
      name: "Budget Battle",
      description: "Master budgeting through interactive challenges",
      icon: "💰",
      color: "from-green-200 to-green-400",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      coins: 75,
    },
    {
      name: "InvestoRun",
      description: "Run through investment scenarios and build wealth",
      icon: "📈",
      color: "from-purple-200 to-purple-400",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      coins: 100,
    },
    {
      name: "Spin & Win",
      description: "Daily rewards and surprise financial tips",
      icon: "🎯",
      color: "from-orange-200 to-orange-400",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      coins: 25,
    },
  ];

  const features = [
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Earn Virtual Currency",
      description: "Complete courses and challenges to earn practice coins",
      color: "from-yellow-200 to-yellow-300",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Guidance",
      description: "Get personalized financial advice",
      color: "from-pink-200 to-pink-300",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Gamified Learning",
      description: "Level up with engaging challenges",
      color: "from-blue-200 to-blue-300",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-World Simulation",
      description: "Practice investment strategies",
      color: "from-green-200 to-green-300",
    },
  ];

  if (!isVisible) {
    return <div className="text-center text-gray-600">Loading Dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-full p-3 shadow-lg animate-pulse">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Welcome to Your Dashboard</h1>
            </div>
            <p className="text-xl text-gray-600">Explore games and features to level up your financial skills!</p>
          </div>

          {/* Games Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">Featured Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {games.map((game, index) => (
                <div
                  key={index}
                  className={`${game.bgColor} rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl border border-white/50`}
                  onClick={() => navigate(`/game/${game.name.toLowerCase().replace(/ /g, '-')}`)}
                >
                  <div className="text-5xl mb-4 text-center">{game.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{game.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-yellow-500">
                      <Coins className="w-4 h-4 mr-1" />
                      {game.coins}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-8 text-center">Your Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className={`bg-gradient-to-r ${feature.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white shadow-md`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 1.5s infinite;
        }
      `}</style>
    </div>
  );
}