import React from 'react';
import { Github, FileText } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ready to optimize your Kubernetes scaling?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join the growing community of developers and organizations using Kaftain to power their mission-critical applications.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <Github className="h-5 w-5 mr-2" /> Star on GitHub
            </a>
            <a
              href="#documentation"
              className="inline-flex items-center justify-center px-8 py-3 border border-blue-800 text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <FileText className="h-5 w-5 mr-2" /> Read the Docs
            </a>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-8">
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">
                Stay updated with Kaftain news
              </h3>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="flex-shrink-0 px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-500 text-center">
                We'll never share your email. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Team Kaftain Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Team Kaftain
          </h2>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { name: 'Austin Stubbs', imgAlt: 'placeholder' },
              { name: 'Joshua Hirakawa', imgAlt: 'placeholder' },
              { name: 'Amrita Bahadur', imgAlt: 'placeholder' },
            ].map((member, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mb-3"></div>
                <p className="text-lg font-medium text-gray-700">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
