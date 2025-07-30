import React from 'react';
import { Sparkles, BookOpen, Wallet, Briefcase, Trophy, CalendarDays } from 'lucide-react';

import financeVideos from '../assets/finance_vid.png';
import financeCrossword from '../assets/crossword.png';
import spinWheel from '../assets/spin.png';
import shopChallenge from '../assets/shop.png';
import dealDebt from '../assets/deal_debt.png';
import dailyProgress from '../assets/progress.png';

const features = [
  {
    title: 'Beginner Finance Videos',
    description: 'Watch short animations on savings, budgeting, and investment basics.',
    bgColor: 'bg-orange-100',
    img: financeVideos,
  },
  {
    title: 'Finance Crossword',
    description: 'Guess finance terms like “Account that came. interest” → SAVING',
    bgColor: 'bg-sky-100',
    img: financeCrossword,
  },
  {
    title: 'Spin & Win',
    description: 'Spin the wheel daily to earn rewards or finance facts!',
    bgColor: 'bg-yellow-100',
    img: spinWheel,
  },
  {
    title: 'Shop Smart Challenge',
    description: 'Spend £5000 to buy assets smartly. Learn from virtual investments.',
    bgColor: 'bg-green-100',
    img: shopChallenge,
  },
  {
    title: 'Deal or Debt',
    description: 'Choose smart or risky offers. EMI or wait? Spend or save?',
    bgColor: 'bg-red-100',
    img: dealDebt,
  },
  {
    title: 'Daily Progress',
    description: 'Track your daily financial activities and learning streaks.',
    bgColor: 'bg-pink-100',
    img: dailyProgress,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-400 via-purple-400 to-blue-400 text-white p-6 rounded-r-3xl">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-24 h-24 bg-white rounded-full mb-4" />
          <h2 className="text-xl font-bold">Alex</h2>
          <p className="text-sm">CXS</p>
        </div>
        <nav className="space-y-6 text-sm">
          <div className="flex items-center gap-3">
            <BookOpen size={18} /> Modules
          </div>
          <div className="flex items-center gap-3">
            <Sparkles size={18} /> Courses
          </div>
          <div className="flex items-center gap-3">
            <Wallet size={18} /> Wallet
          </div>
          <div className="flex items-center gap-3">
            <Briefcase size={18} /> Career Lab
          </div>
          <div className="flex items-center gap-3">
            <Trophy size={18} /> Leaderboard
          </div>
          <div className="flex items-center gap-3">
            <CalendarDays size={18} /> Daily
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Games & Learning Modules</h1>
          <div className="bg-white shadow px-4 py-2 rounded-full text-yellow-500 font-semibold flex items-center gap-2">
            <span>🪙</span>
            <span>1,245</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`rounded-xl p-4 shadow-lg ${feature.bgColor} flex flex-col justify-between min-h-[180px]`}
            >
              <div className="mb-3">
                <img src={feature.img} alt={feature.title} className="w-16 h-16 mb-2" />
                <h3 className="text-md font-semibold text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
