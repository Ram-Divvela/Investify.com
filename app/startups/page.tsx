export default function Startups() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Featured Startups</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover innovative startups seeking investment opportunities to scale their businesses
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">AI Solutions Co.</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Tech</span>
          </div>
          <p className="text-gray-600 mb-4">Advanced AI solutions for business process automation.</p>
          <div className="flex justify-between items-center">
            <span className="text-indigo-600">Seeking: $2M</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Green Energy Tech</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">CleanTech</span>
          </div>
          <p className="text-gray-600 mb-4">Innovative renewable energy solutions for sustainable future.</p>
          <div className="flex justify-between items-center">
            <span className="text-indigo-600">Seeking: $500K</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">HealthTech Solutions</h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Healthcare</span>
          </div>
          <p className="text-gray-600 mb-4">Innovative healthcare monitoring and diagnostic platform.</p>
          <div className="flex justify-between items-center">
            <span className="text-indigo-600">Seeking: $1M</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              View Details
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Are You a Startup Looking for Investment?</h2>
          <p className="mb-6">
            Join our platform to connect with verified investors, showcase your startup, and accelerate your growth.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100">
              Register Your Startup
            </button>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Additional Benefits Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Why List Your Startup on Investify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 text-xl mb-4">🎯</div>
            <h3 className="font-semibold mb-2">Targeted Exposure</h3>
            <p className="text-gray-600">Connect with verified investors actively looking for opportunities in your sector.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 text-xl mb-4">📊</div>
            <h3 className="font-semibold mb-2">Powerful Tools</h3>
            <p className="text-gray-600">Access pitch deck hosting, investor analytics, and progress tracking tools.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-indigo-600 text-xl mb-4">🤝</div>
            <h3 className="font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Get guidance from our team of startup advisors and investment experts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
