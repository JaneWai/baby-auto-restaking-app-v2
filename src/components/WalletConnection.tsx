import React, { useState } from 'react'
import { Wallet, ChevronRight, Shield, Zap } from 'lucide-react'

interface WalletConnectionProps {
  onConnect: () => void
}

const WalletConnection: React.FC<WalletConnectionProps> = ({ onConnect }) => {
  const [isConnecting, setIsConnecting] = useState(false)

  const wallets = [
    { name: 'MetaMask', icon: '🦊', popular: true },
    { name: 'WalletConnect', icon: '🔗', popular: true },
    { name: 'Coinbase Wallet', icon: '🔵', popular: false },
    { name: 'Trust Wallet', icon: '🛡️', popular: false },
    { name: 'Phantom', icon: '👻', popular: false },
    { name: 'Keplr', icon: '🌌', popular: true },
  ]

  const handleConnect = async (walletName: string) => {
    setIsConnecting(true)
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsConnecting(false)
    onConnect()
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="glass-card p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
            <Wallet className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Connect Your Wallet</h2>
          <p className="text-gray-600">Choose your preferred wallet to get started with auto-restaking</p>
        </div>

        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => handleConnect(wallet.name)}
              disabled={isConnecting}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-white/50 hover:bg-white/70 transition-all border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{wallet.icon}</span>
                <div className="text-left">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{wallet.name}</span>
                    {wallet.popular && (
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">Popular</span>
                    )}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          ))}
        </div>

        {isConnecting && (
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 text-blue-600">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
              <span className="text-sm font-medium">Connecting...</span>
            </div>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-white/20">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Fast Setup</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletConnection
