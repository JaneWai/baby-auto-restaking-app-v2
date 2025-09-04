import React, { useState } from 'react'
import { Settings, Plus, Trash2, Save, AlertCircle, CheckCircle } from 'lucide-react'

const RestakingSettings: React.FC = () => {
  const [validatorAllocation, setValidatorAllocation] = useState(70)
  const [lpAllocation, setLpAllocation] = useState(30)
  const [selectedValidators, setSelectedValidators] = useState([
    { id: 1, name: 'Validator Alpha', allocation: 40, apy: '19.2%' },
    { id: 2, name: 'Validator Beta', allocation: 30, apy: '18.8%' },
    { id: 3, name: 'Validator Gamma', allocation: 30, apy: '17.9%' },
  ])
  const [selectedPools, setSelectedPools] = useState([
    { id: 1, name: 'BABY/ETH', allocation: 60, apy: '24.5%' },
    { id: 2, name: 'BABY/USDC', allocation: 40, apy: '22.1%' },
  ])
  const [isSaving, setIsSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const availableValidators = [
    { id: 4, name: 'Validator Delta', apy: '18.1%' },
    { id: 5, name: 'Validator Epsilon', apy: '17.5%' },
    { id: 6, name: 'Validator Zeta', apy: '19.8%' },
  ]

  const availablePools = [
    { id: 3, name: 'BABY/BTC', apy: '21.3%' },
    { id: 4, name: 'BABY/MATIC', apy: '23.7%' },
    { id: 5, name: 'BABY/ATOM', apy: '20.9%' },
  ]

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSaving(false)
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const updateValidatorAllocation = (id: number, newAllocation: number) => {
    setSelectedValidators(prev => 
      prev.map(v => v.id === id ? { ...v, allocation: newAllocation } : v)
    )
  }

  const updatePoolAllocation = (id: number, newAllocation: number) => {
    setSelectedPools(prev => 
      prev.map(p => p.id === id ? { ...p, allocation: newAllocation } : p)
    )
  }

  const addValidator = (validator: any) => {
    setSelectedValidators(prev => [...prev, { ...validator, allocation: 0 }])
  }

  const removeValidator = (id: number) => {
    setSelectedValidators(prev => prev.filter(v => v.id !== id))
  }

  const addPool = (pool: any) => {
    setSelectedPools(prev => [...prev, { ...pool, allocation: 0 }])
  }

  const removePool = (id: number) => {
    setSelectedPools(prev => prev.filter(p => p.id !== id))
  }

  const totalValidatorAllocation = selectedValidators.reduce((sum, v) => sum + v.allocation, 0)
  const totalPoolAllocation = selectedPools.reduce((sum, p) => sum + p.allocation, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="glass-card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Restaking Settings</h2>
            <p className="text-gray-600">Configure your auto-restaking preferences</p>
          </div>
        </div>

        {showSuccess && (
          <div className="flex items-center space-x-2 p-3 rounded-lg bg-green-50 border border-green-200 mb-4">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-medium">Settings saved successfully!</span>
          </div>
        )}
      </div>

      {/* Allocation Strategy */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Allocation Strategy</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Validators Allocation
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100"
                value={validatorAllocation}
                onChange={(e) => {
                  const value = parseInt(e.target.value)
                  setValidatorAllocation(value)
                  setLpAllocation(100 - value)
                }}
                className="flex-1"
              />
              <span className="text-lg font-semibold text-gray-900 w-12">{validatorAllocation}%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Liquidity Pools Allocation
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="0"
                max="100"
                value={lpAllocation}
                onChange={(e) => {
                  const value = parseInt(e.target.value)
                  setLpAllocation(value)
                  setValidatorAllocation(100 - value)
                }}
                className="flex-1"
              />
              <span className="text-lg font-semibold text-gray-900 w-12">{lpAllocation}%</span>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
          <div className="flex items-start space-x-2">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <p className="text-blue-800 font-medium">Allocation Strategy</p>
              <p className="text-blue-700 text-sm">
                Your rewards will be automatically distributed: {validatorAllocation}% to validators and {lpAllocation}% to liquidity pools.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Validators Configuration */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Selected Validators</h3>
          <div className="text-sm text-gray-600">
            Total: {totalValidatorAllocation}% {totalValidatorAllocation !== 100 && (
              <span className="text-red-600">(Should equal 100%)</span>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {selectedValidators.map((validator) => (
            <div key={validator.id} className="flex items-center space-x-4 p-4 rounded-lg bg-white/30">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{validator.name}</span>
                  <span className="text-sm text-gray-600">APY: {validator.apy}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={validator.allocation}
                    onChange={(e) => updateValidatorAllocation(validator.id, parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12">{validator.allocation}%</span>
                </div>
              </div>
              <button
                onClick={() => removeValidator(validator.id)}
                className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {availableValidators.filter(v => !selectedValidators.find(sv => sv.id === v.id)).length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Available Validators</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {availableValidators
                .filter(v => !selectedValidators.find(sv => sv.id === v.id))
                .map((validator) => (
                <button
                  key={validator.id}
                  onClick={() => addValidator(validator)}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/20 hover:bg-white/40 transition-colors border border-white/20"
                >
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{validator.name}</p>
                    <p className="text-sm text-gray-600">APY: {validator.apy}</p>
                  </div>
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Liquidity Pools Configuration */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Selected Liquidity Pools</h3>
          <div className="text-sm text-gray-600">
            Total: {totalPoolAllocation}% {totalPoolAllocation !== 100 && (
              <span className="text-red-600">(Should equal 100%)</span>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {selectedPools.map((pool) => (
            <div key={pool.id} className="flex items-center space-x-4 p-4 rounded-lg bg-white/30">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">{pool.name}</span>
                  <span className="text-sm text-gray-600">APY: {pool.apy}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={pool.allocation}
                    onChange={(e) => updatePoolAllocation(pool.id, parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12">{pool.allocation}%</span>
                </div>
              </div>
              <button
                onClick={() => removePool(pool.id)}
                className="p-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {availablePools.filter(p => !selectedPools.find(sp => sp.id === p.id)).length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Available Liquidity Pools</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {availablePools
                .filter(p => !selectedPools.find(sp => sp.id === p.id))
                .map((pool) => (
                <button
                  key={pool.id}
                  onClick={() => addPool(pool)}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/20 hover:bg-white/40 transition-colors border border-white/20"
                >
                  <div className="text-left">
                    <p className="font-medium text-gray-900">{pool.name}</p>
                    <p className="text-sm text-gray-600">APY: {pool.apy}</p>
                  </div>
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Save Button */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium text-gray-900">Ready to Save?</h4>
            <p className="text-sm text-gray-600">This will update your auto-restaking preferences</p>
          </div>
          <button
            onClick={handleSave}
            disabled={isSaving || totalValidatorAllocation !== 100 || totalPoolAllocation !== 100}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save Settings</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RestakingSettings
