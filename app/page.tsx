import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-black border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Blaine Carner</h1>
          <div className="flex gap-4 md:gap-6 text-sm flex-wrap justify-end">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
            <a href="#experience" className="hover:text-gray-400">Experience</a>
            <a href="#documents" className="hover:text-gray-400">Documents</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Blaine Carner</h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a Software Engineering student who enjoys building things that are both useful and
              practical. A lot of my experience has come from working on real projects involving APIs,
              embedded systems, automation, and web development, and I really like being able to take an
              idea and turn it into something that actually solves a problem. I am always looking to keep
              improving, take on new challenges, and grow into a stronger developer through hands-on work
              and real-world experience.
            </p>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpeg"
              alt="Blaine Carner"
              width={480}
              height={480}
              className="rounded-2xl border border-gray-700 object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* DIVIDER */}
      <div className="w-full border-t border-gray-800"></div>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16">Projects</h2>

        <div className="space-y-16">

          {/* PROJECT 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Production Metrics API</h3>

            <p className="text-gray-400 leading-relaxed">
              I developed a Python-based API that collects and processes real-time production data from
              a database and converts it into useful metrics. The system was designed to run continuously,
              handling missing or incorrect data through validation and error handling so it remains stable
              over time. Once processed, the data is sent through an API for real-time monitoring and faster
              issue detection.
            </p>

            <p className="text-sm text-gray-500">
              Technologies: Python, REST API, Oracle Database, JSON
            </p>

            {/* CODE SNIPPET */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
              <pre>
              {`# Simplified example of data processing flow
    def process_production_data(raw_data):
      validated = validate_input(raw_data)
      metrics = calculate_metrics(validated)
      send_to_api(metrics)
              `}
              </pre>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Production Line Interface</h3>

            <p className="text-gray-400 leading-relaxed">
              I built a Visual Basic .NET interface that allows production operators to enter, view, and
              manage setup data in a simple and organized way. The main goal was to make the system easy to
              use in a fast-paced environment while reducing input errors. A lot of focus was placed on
              clarity and usability so operators can quickly understand and interact with the data.
            </p>

            <p className="text-sm text-gray-500">
              Technologies: VB.NET, Windows Forms, Data Validation
            </p>

            {/* CODE SNIPPET */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
              <pre>
              {`' Example of input validation logic
    Dim value As Double
    If Double.TryParse(txtInput.Text, value) Then
      ProcessValue(value)
    Else
      MessageBox.Show("Invalid input")
    End If
              `}
              </pre>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Expense Management System</h3>

            <p className="text-gray-400 leading-relaxed">
              I created a system that combines Python, a Visual Basic interface, and Excel files to manage
              expense data more efficiently. The program automatically processes and updates expense values,
              reducing manual work and improving consistency. It also includes logic to handle multiple sheets
              and organize data for easier tracking and reporting.
            </p>

            <p className="text-sm text-gray-500">
              Technologies: Python, VB.NET, Excel Integration, JSON
            </p>

            {/* CODE SNIPPET */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
              <pre>
              {`# Example of updating expense values
    def update_expense(sheet, name, amount):
      current = sheet.get_value(name)
      sheet.set_value(name, current + amount)
              `}
              </pre>
            </div>
          </div>

        </div>
      </section>

      <div className="w-full border-t border-gray-800"></div>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-16">Experience</h2>

        <div className="space-y-16">

          {/* INTERNSHIP 1 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Engineering Intern - Worthington Steel</h3>

            <p className="text-sm text-gray-500">
              August 2024 - December 2024
            </p>

            <p className="text-gray-400 leading-relaxed">
              Worked closely with both the IT and Engineering teams, supporting a variety of technical tasks
              and gaining hands-on experience across different areas of software and systems. This role was
              focused on learning, contributing where needed, and understanding how real-world systems operate
              in a production environment.
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Assisted IT and Engineering teams with day-to-day technical tasks and troubleshooting</li>
              <li>Gained exposure to software systems, workflows, and real-world problem solving</li>
              <li>Developed a Visual Basic .NET interface as an individual project</li>
              <li>Supported ongoing development efforts across multiple areas when needed</li>
            </ul>
          </div>

          {/* INTERNSHIP 2 */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Software Engineering Intern - Worthington Steel</h3>

            <p className="text-sm text-gray-500">
              May 2025 - Present
            </p>

            <p className="text-gray-400 leading-relaxed">
              Took on a more independent role focused on developing API-based solutions for production data.
              Worked on building systems that improved data flow, automation, and overall efficiency within
              a manufacturing environment.
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Designed and developed API solutions for real-time production data</li>
              <li>Built systems to automate data processing and reduce manual work</li>
              <li>Worked with databases to retrieve, validate, and structure data</li>
              <li>Focused on creating reliable and scalable backend logic</li>
            </ul>
          </div>

          {/* EDUCATION */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">University of Toledo - B.S. Computer Science & Engineering Technology</h3>

            <p className="text-sm text-gray-500">
              Expected Graduation: December 2026
            </p>

            <p className="text-gray-400 leading-relaxed">
              Focused on software development, systems programming, and networking. Completed coursework and
              projects that involved building real-world applications, working with embedded systems, and
              developing problem-solving skills through hands-on assignments.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-gray-400">

              <div>
                <h4 className="font-semibold mb-2">Relevant Coursework</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Data Structures & Algorithms</li>
                  <li>Developed programming experience in Python, Java, HTML, CSS, C, C++, Assembly Language, and JavaScript</li>
                  <li>Computer Networking</li>
                  <li>Embedded Systems</li>
                  <li>Computer Architecture</li>
                  <li>Discrete Structures and Mathematics</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Projects</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Embedded Systems involving lights and button interaction</li>
                  <li>Full-stack website development</li>
                  <li>Automation and scripting tools</li>
                  <li>Software Design & Development Lifecycle Project</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>

      <div className="w-full border-t border-gray-800"></div>

      {/* DOCUMENTS */}
      <section id="documents" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Documents</h2>

        <div className="flex flex-col gap-4">

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            Resume
          </a>

          <a
            href="/letter-of-recommendation.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            Letter of Recommendation
          </a>

          {/* TRANSCRIPT */}
          <div className="border border-gray-800 px-6 py-3 rounded-lg text-gray-500">
            Transcript (available upon request)
          </div>

          {/* REFERENCES */}
          <div className="border border-gray-800 px-6 py-3 rounded-lg text-gray-500">
            References (available upon request)
          </div>

        </div>
      </section>

      <div className="w-full border-t border-gray-800"></div>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Contact</h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              If you would like to reach out regarding opportunities, projects, or anything else,
              feel free to contact me directly or use the form.
            </p>

            <div className="space-y-3 text-gray-400">
              <p>Email: bcarner241@gmail.com</p>

              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/blaine-carner/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline"
                >
                  linkedin.com/in/blaine-carner
                </a>
              </p>
            </div>
          </div>

          {/* FORM */}
          <form
            action="https://formspree.io/f/myknlynr"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              required
            />

            <textarea
              name="message"
              placeholder="Reason for reaching out..."
              rows={5}
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-lg focus:outline-none focus:border-white"
              required
            />

            <input
              type="hidden"
              name="_subject"
              value="New Portfolio Contact Submission"
            />

            <button
              type="submit"
              className="w-full border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
            >
              Send Message
            </button>
          </form>

        </div>
      </section>

    </main>
  );
}