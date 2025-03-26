import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Therapist Worksheets
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access professional mental health worksheets and resources to support your therapeutic journey.
        </p>
        <Link
          to="/worksheets"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          Browse Worksheets
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Anxiety Worksheets</h2>
          <p className="text-gray-600 mb-4">
            Tools and exercises to help manage anxiety and stress.
          </p>
          <Link to="/worksheets/anxiety" className="text-primary-600 hover:underline">
            View Worksheets →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Depression Worksheets</h2>
          <p className="text-gray-600 mb-4">
            Resources to support those dealing with depression.
          </p>
          <Link to="/worksheets/depression" className="text-primary-600 hover:underline">
            View Worksheets →
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Self-Care Worksheets</h2>
          <p className="text-gray-600 mb-4">
            Activities and guides for maintaining mental well-being.
          </p>
          <Link to="/worksheets/self-care" className="text-primary-600 hover:underline">
            View Worksheets →
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 