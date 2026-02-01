export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About Investify</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          Investify is a platform dedicated to bridging the gap between innovative startups 
          and potential investors. Our mission is to facilitate meaningful connections that 
          drive innovation and growth in the startup ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create a transparent and efficient marketplace where startups can find the 
              right investors, and investors can discover promising opportunities that align 
              with their investment goals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the leading platform for startup investments, fostering innovation 
              and economic growth by connecting visionary entrepreneurs with strategic investors.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">For Startups</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Investor matching</li>
                <li>• Pitch deck hosting</li>
                <li>• Investor analytics</li>
                <li>• Fundraising tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">For Investors</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Deal flow management</li>
                <li>• Due diligence tools</li>
                <li>• Startup tracking</li>
                <li>• Investment analytics</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Platform Features</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Secure messaging</li>
                <li>• Document sharing</li>
                <li>• Meeting scheduling</li>
                <li>• Progress tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Whether you're a startup looking for funding or an investor seeking opportunities, 
            Investify provides the tools and connections you need to succeed.
          </p>
          <div className="flex gap-4">
            <a href="/startups" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Register as Startup
            </a>
            <a href="/investors" className="bg-white border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50">
              Register as Investor
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
