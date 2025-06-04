import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Monitor Kafka Metrics',
      description: 'Kaftain collects real-time metrics from your Kafka cluster including consumer lag, throughput, and topic statistics.',
    },
    {
      number: '02',
      title: 'Analyze & Visualize',
      description: 'The dashboard provides comprehensive insights into your Kafka ecosystem with real-time visualizations and alerts.',
    },
    {
      number: '03',
      title: 'Process Scaling Signals',
      description: 'Advanced algorithms analyze patterns and identify optimal scaling opportunities based on your defined thresholds.',
    },
    {
      number: '04',
      title: 'Automated Scaling',
      description: 'Kaftain automatically adjusts your Kubernetes deployments through HPA, ensuring optimal performance.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How Kaftain Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Intelligent monitoring and automated scaling in perfect harmony
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
                <div className="flex-1 w-full lg:w-auto order-2 lg:order-none">
                  <div className={`lg:max-w-md ${index % 2 === 0 ? 'lg:ml-auto lg:mr-10' : 'lg:mr-auto lg:ml-10'} mt-6 lg:mt-0`}>
                    <span className="text-5xl font-bold text-blue-100">{step.number}</span>
                    <h3 className="mt-2 text-2xl font-semibold text-gray-900">{step.title}</h3>
                    <p className="mt-3 text-lg text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 shadow-lg text-white order-1 lg:order-none">
                  {index < steps.length - 1 ? <ArrowRight className="h-6 w-6" /> : <div className="w-3 h-3 rounded-full bg-white"></div>}
                </div>

                <div className="flex-1 hidden lg:block order-3 lg:order-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;