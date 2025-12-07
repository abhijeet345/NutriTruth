import { useState } from 'react'
import { Search, Scan, Award, Info } from 'lucide-react'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [coins, setCoins] = useState(0)

  const products = [
    {
      id: 1,
      name: 'Britannia Whole Wheat Bread',
      score: 85,
      ingredients: [
        { name: 'Whole Wheat Flour', rating: 'healthy' },
        { name: 'Water', rating: 'healthy' },
        { name: 'Yeast', rating: 'healthy' },
        { name: 'Sugar', rating: 'moderate' },
        { name: 'Salt', rating: 'moderate' },
      ],
      alternatives: [
        { name: 'Organic Whole Wheat Bread', brand: 'Nature\'s Own' },
        { name: 'Multigrain Bread', brand: 'Sara Lee' }
      ]
    },
    {
      id: 2,
      name: 'Amul Chocolate Milk',
      score: 65,
      ingredients: [
        { name: 'Milk', rating: 'healthy' },
        { name: 'Sugar', rating: 'moderate' },
        { name: 'Cocoa', rating: 'healthy' },
        { name: 'Artificial Flavors', rating: 'harmful' },
      ],
      alternatives: [
        { name: 'Organic Chocolate Milk', brand: 'Horizon' },
        { name: 'Almond Milk', brand: 'Silk' }
      ]
    }
  ]

  const awarenessPosts = [
    {
      title: 'The Dangers of High Fructose Corn Syrup',
      content: 'Found in many processed foods, HFCS has been linked to obesity and diabetes.'
    },
    {
      title: 'Artificial Colors and ADHD',
      content: 'Studies suggest artificial food dyes may contribute to attention disorders in children.'
    }
  ]

  const handleSearch = () => {
    setCoins(coins + 5)
    // Search logic would go here
  }

  const handleScan = () => {
    setCoins(coins + 5)
    // Scan logic would go here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">NutriTruth</h1>
          <div className="flex items-center space-x-2">
            <Award className="text-accent" />
            <span>{coins} coins</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        {/* Search Section */}
        <section className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Analyze a Product</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search for a product..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Search
            </button>
            <button
              onClick={handleScan}
              className="flex items-center justify-center gap-2 bg-secondary hover:bg-green-500 text-white px-6 py-2 rounded-lg transition-colors"
            >
              <Scan size={20} />
              Scan Barcode
            </button>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Healthier Alternatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.score > 75 ? 'bg-green-100 text-green-800' :
                      product.score > 50 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      Score: {product.score}/100
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Ingredients:</h4>
                    <ul className="space-y-1">
                      {product.ingredients.map((ingredient, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                            ingredient.rating === 'healthy' ? 'bg-green-500' :
                            ingredient.rating === 'moderate' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}></span>
                          {ingredient.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Healthier Alternatives:</h4>
                    <ul className="space-y-2">
                      {product.alternatives.map((alt, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                            {alt.name} ({alt.brand})
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awareness Feed */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Daily Awareness</h2>
          <div className="space-y-4">
            {awarenessPosts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start">
                  <div className="bg-info bg-opacity-20 p-2 rounded-full mr-4">
                    <Info className="text-info" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{post.title}</h3>
                    <p className="text-gray-600">{post.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-8">
        <div className="container mx-auto text-center">
          <p>© 2023 NutriTruth - Making healthier food choices easier</p>
        </div>
      </footer>
    </div>
  )
}

export default App