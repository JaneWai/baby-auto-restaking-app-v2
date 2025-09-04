import React, { useState } from 'react'
import { Wallet, Settings, TrendingUp, Shield, Zap, ChevronRight, ExternalLink } from 'lucide-react'
import WalletConnection from './components/WalletConnection'
import RestakingSettings from './components/RestakingSettings'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

function App() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [activeTab, setActiveTab] = useState<'dashboard' | 'settings'>('dashboard')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 font-inter">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative z-10">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {!isWalletConnected ? (
            <div className="max-w-4xl mx-auto">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  Auto-Restaking for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">$BABY</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Set your preferences once and let our platform automatically restake your BABY rewards to validators or liquidity pools. Maximize your yields with zero manual intervention.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="glass-card p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Execution</h3>
                  <p className="text-gray-600">No more manual claiming and restaking. Set it once and forget it.</p>
                </div>

                <div className="glass-card p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                    <Settings className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Destinations</h3>
                  <p className="text-gray-600">Choose between validators or liquidity pools based on your strategy.</p>
                </div>

                <div className="glass-card p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mb-4">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                  <p className="text-gray-600">Built with security-first principles and broad wallet support.</p>
                </div>
              </div>

              {/* Wallet Connection */}
              <WalletConnection onConnect={() => setIsWalletConnected(true)} />

              {/* How it Works */}
              <div className="glass-card p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mb-4 mx-auto">1</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Connect Wallet</h3>
                    <p className="text-gray-600 text-sm">Connect your preferred wallet to get started</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold mb-4 mx-auto">2</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Set Preferences</h3>
                    <p className="text-gray-600 text-sm">Choose validators or liquidity pools for your rewards</p>
                  </div>
                  <div className="text-center">
                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold mb-4 mx-auto">3</div>
                    <h3 className="font-semibold text-gray-900 mb-2">Confirm Setup</h3>
                    <p className="text-gray-600 text-sm">Sign one transaction to enable auto-restaking</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              {/* Navigation Tabs */}
              <div className="glass-card p-1 mb-8 inline-flex rounded-xl">
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'dashboard'
                      ? 'bg-white/80 text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === 'settings'
                      ? 'bg-white/80 text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Settings
                </button>
              </div>

              {/* Content */}
              {activeTab === 'dashboard' ? (
                <Dashboard />
              ) : (
                <RestakingSettings />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
