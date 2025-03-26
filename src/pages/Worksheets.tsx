import { Link } from 'react-router-dom'

const worksheetCategories = [
  {
    id: 'anxiety',
    title: 'Anxiety Worksheets',
    description: 'Tools and exercises to help manage anxiety and stress.',
    worksheets: [
      { id: 'anxiety-1', title: 'Anxiety Thought Record', description: 'Track and analyze anxious thoughts' },
      { id: 'anxiety-2', title: 'Progressive Muscle Relaxation', description: 'Step-by-step relaxation guide' },
      { id: 'anxiety-3', title: 'Worry Time Worksheet', description: 'Structured approach to managing worries' },
    ],
  },
  {
    id: 'depression',
    title: 'Depression Worksheets',
    description: 'Resources to support those dealing with depression.',
    worksheets: [
      { id: 'depression-1', title: 'Mood Tracking', description: 'Monitor daily mood patterns' },
      { id: 'depression-2', title: 'Activity Scheduling', description: 'Plan and track daily activities' },
      { id: 'depression-3', title: 'Thought Challenging', description: 'Identify and challenge negative thoughts' },
    ],
  },
  {
    id: 'self-care',
    title: 'Self-Care Worksheets',
    description: 'Activities and guides for maintaining mental well-being.',
    worksheets: [
      { id: 'self-care-1', title: 'Self-Care Assessment', description: 'Evaluate your self-care practices' },
      { id: 'self-care-2', title: 'Stress Management Plan', description: 'Create a personalized stress management strategy' },
      { id: 'self-care-3', title: 'Boundary Setting', description: 'Learn to set healthy boundaries' },
    ],
  },
]

const Worksheets = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Worksheets</h1>
      
      {worksheetCategories.map((category) => (
        <section key={category.id} className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
          <p className="text-gray-600">{category.description}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.worksheets.map((worksheet) => (
              <div key={worksheet.id} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{worksheet.title}</h3>
                <p className="text-gray-600 mb-4">{worksheet.description}</p>
                <Link
                  to={`/worksheets/${category.id}/${worksheet.id}`}
                  className="text-primary-600 hover:underline"
                >
                  View Worksheet →
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Worksheets 