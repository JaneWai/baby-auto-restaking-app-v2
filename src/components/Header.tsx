import React from 'react'
import { Coins, Github, Twitter } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="glass-card mx-4 mt-4 rounded-2xl">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">BABY Restaking</h1>
              <p className="text-sm text-gray-600">Auto-compound your rewards</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors"
            >
              <Twitter className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
