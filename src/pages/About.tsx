const About = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">About Therapist Worksheets</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="text-gray-600">
          We aim to provide accessible, professional mental health resources to support individuals
          on their journey to better mental well-being. Our worksheets are designed to complement
          professional therapy and can be used as part of a comprehensive mental health care plan.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">How to Use These Worksheets</h2>
        <p className="text-gray-600">
          These worksheets are designed to be used alongside professional therapy or as part of
          your self-care routine. They can help you:
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>Track your thoughts and feelings</li>
          <li>Develop coping strategies</li>
          <li>Practice self-reflection</li>
          <li>Build healthy habits</li>
          <li>Monitor your progress</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Important Note</h2>
        <p className="text-gray-600">
          While these worksheets can be helpful tools, they are not a substitute for professional
          mental health care. If you're experiencing severe distress or having thoughts of
          self-harm, please seek immediate professional help or contact emergency services.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-600">
          Have questions or suggestions? We'd love to hear from you. Reach out to us at{' '}
          <a href="mailto:contact@therapistworksheets.com" className="text-primary-600 hover:underline">
            contact@therapistworksheets.com
          </a>
        </p>
      </section>
    </div>
  )
}

export default About 