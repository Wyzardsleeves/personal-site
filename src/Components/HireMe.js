import resumePdf from '../assets/files/JL_Resume_08_31_2025.pdf';

const HireMe = () => {
  return(
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white tracking-tight">
            Let's Work Together
          </h1>
          <p className="hire-me-sub-text text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed">
            I work primarily with React.js on the front-end and Rails on the back-end but picking up new languages or frameworks isn't a problem.
          </p>
        </div>

        {/* Contact & Download Section */}
        <div className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={resumePdf}
            rel="noopener noreferrer"
            target="_blank"
            download
            className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium text-lg"
          >
            <i className="fas fa-file-pdf text-xl"></i>
            <span>Download Resume</span>
          </a>

          <a
            href="mailto:jlattimoreweb@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-medium text-lg"
          >
            <i className="fas fa-envelope text-xl"></i>
            <span>Send Email</span>
          </a>
        </div>

        {/* Resume Preview */}
        <div className="resume backdrop-blur-xl bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 transition-all duration-500 hover:shadow-[0_25px_80px_rgba(0,0,0,0.1)]">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Resume Preview
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              View my full experience and qualifications below, or download the PDF for easy sharing.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-inner bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <iframe
              title="hireme"
              src={resumePdf}
              className="w-full h-[800px] md:h-[1000px] lg:h-[1200px]"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default HireMe;
