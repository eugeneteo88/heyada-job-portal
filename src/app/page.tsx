export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          HeyAda Job Portal
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Find your dream job with Singapore's leading recruitment platform
        </p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Coming Soon</h2>
            <p className="text-gray-600">
              We're building something amazing for job seekers and employers.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>For recruitment agencies, visit <a href="https://app.heyada.io" className="text-blue-600 hover:underline">app.heyada.io</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}