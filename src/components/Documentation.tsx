import React from 'react';
import { BookOpen, Terminal, FileText, Code } from 'lucide-react';

const Documentation: React.FC = () => {
  const resources = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running with Kaftain in less than 10 minutes',
      icon: Terminal,
      link: '#',
      className: 'bg-gradient-to-br from-blue-50 to-blue-100',
      textColor: 'text-blue-900'
    },
    {
      title: 'API Reference',
      description: 'Complete API documentation for advanced configuration',
      icon: Code,
      link: '#',
      className: 'bg-gradient-to-br from-gray-50 to-gray-100',
      textColor: 'text-gray-900'
    },
    {
      title: 'User Guides',
      description: 'In-depth guides for configuration and optimization',
      icon: BookOpen,
      link: '#',
      className: 'bg-gradient-to-br from-green-50 to-green-100',
      textColor: 'text-green-900'
    },
    {
      title: 'Case Studies',
      description: 'Learn how others are using Kaftain in production',
      icon: FileText,
      link: '#',
      className: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      textColor: 'text-indigo-900'
    }
  ];

  return (
    <section id="documentation" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Documentation & Resources
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Everything you need to implement and optimize Kaftain
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <a 
              key={index}
              href={resource.link}
              className={`${resource.className} rounded-xl p-6 shadow-sm transition-all hover:shadow-md flex flex-col h-full`}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${resource.textColor} bg-white/80`}>
                <resource.icon className="h-6 w-6" />
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${resource.textColor}`}>
                {resource.title}
              </h3>
              <p className={`${resource.textColor} opacity-80`}>
                {resource.description}
              </p>
              <div className="mt-auto pt-4">
                <span className={`inline-flex items-center text-sm font-medium ${resource.textColor}`}>
                  Read more
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900">Ready to get started?</h3>
            <p className="mt-3 text-gray-600">Follow our simple installation guide to integrate Kaftain with your cluster</p>
          </div>

          <div className="bg-gray-800 text-gray-200 p-6 rounded-lg overflow-x-auto font-mono text-sm">
            <pre><code>{`# Install Kaftain using Helm
helm repo add kaftain https://charts.kaftain.io
helm repo update

# Deploy Kaftain to your cluster
helm install kaftain kaftain/kaftain-operator \\
  --namespace kaftain-system \\
  --create-namespace \\
  --set kafka.bootstrapServers=KAFKA_BOOTSTRAP_SERVERS`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;