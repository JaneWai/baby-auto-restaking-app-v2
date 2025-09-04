import React from 'react'
import { TrendingUp, DollarSign, Clock, Settings, ExternalLink, Activity } from 'lucide-react'

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Staked', value: '12,450.67', unit: 'BABY', change: '+5.2%', positive: true },
    { label: 'Pending Rewards', value: '234.89', unit: 'BABY', change: '+12.4%', positive: true },
    { label: 'Auto-Restaked', value: '1,890.23', unit: 'BABY', change: '+8.7%', positive: true },
    { label: 'APY', value: '18.5', unit: '%', change: '+0.3%', positive: true },
  ]

  const recentActivity = [
    { type: 'restake', amount: '45.67', destination: 'Validator Alpha', time: '2 hours ago', status: 'completed' },
    { type: 'restake', amount: '32.14', destination: 'LP Pool BABY/ETH', time: '6 hours ago', status: 'completed' },
    { type: 'restake', amount: '78.92', destination: 'Validator Beta', time: '12 hours ago', status: 'completed' },
    { type: 'restake', amount: '23.45', destination: 'LP Pool BABY/USDC', time: '1 day ago', status: 'completed' },
  ]

  const validators = [
    { name: 'Validator Alpha', allocation: 40, apy: '19.2%', status: 'active' },
    { name: 'Validator Beta', allocation: 30, apy: '18.8%', status: 'active' },
    { name: 'Validator Gamma', allocation: 30, apy: '17.9%', status: 'active' },
  ]

  const liquidityPools = [
    { name: 'BABY/ETH', allocation: 60, apy: '24.5%', status: 'active' },
    { name: 'BABY/USDC', allocation: 40, apy: '22.1%', status: 'active' },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="glass-card p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-gray-600">{stat.label}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                stat.positive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="flex items-baseline space-x-2">
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.unit}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Current Allocations */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Current Allocations</h3>
            <button className="p-2 rounded-lg bg-white/50 hover:bg-white/70 transition-colors">
              <Settings className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">Validators</h4>
                <span className="text-sm text-gray-600">70% allocation</span>
              </div>
              <div className="space-y-3">
                {validators.map((validator, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/30">
                    <div>
                      <p className="font-medium text-gray-900">{validator.name}</p>
                      <p className="text-sm text-gray-600">{validator.allocation}% • APY {validator.apy}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-xs text-gray-600 capitalize">{validator.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">Liquidity Pools</h4>
                <span className="text-sm text-gray-600">30% allocation</span>
              </div>
              <div className="space-y-3">
                {liquidityPools.map((pool, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-white/30">
                    <div>
                      <p className="font-medium text-gray-900">{pool.name}</p>
                      <p className="text-sm text-gray-600">{pool.allocation}% • APY {pool.apy}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                      <span className="text-xs text-gray-600 capitalize">{pool.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700">
              <span>View All</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-white/30">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-gray-900">Auto-restaked {activity.amount} BABY</p>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-600">to {activity.destination}</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Chart Placeholder */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Performance Overview</h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm rounded-lg bg-blue-100 text-blue-600">7D</button>
            <button className="px-3 py-1 text-sm rounded-lg bg-white/50 text-gray-600">30D</button>
            <button className="px-3 py-1 text-sm rounded-lg bg-white/50 text-gray-600">90D</button>
          </div>
        </div>
        
        <div className="h-64 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <p className="text-gray-600">Performance chart will be displayed here</p>
            <p className="text-sm text-gray-500 mt-2">Showing rewards accumulation over time</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
