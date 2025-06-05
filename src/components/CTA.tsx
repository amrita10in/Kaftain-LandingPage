import React from 'react';
import { Github, FileText } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 whitespace-nowrap">
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
