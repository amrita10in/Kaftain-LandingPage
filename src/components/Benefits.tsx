import React from 'react';
import { TrendingUp, DollarSign, Clock, Zap, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Kaftain?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-200">
            Gain competitive advantages with intelligent, Kafka-aware autoscaling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-blue-800/50 backdrop-blur rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-800">
                  <TrendingUp className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Improved Performance</h3>
                <p className="mt-2 text-blue-200">
                  Scale based on actual message processing demands rather than generic CPU/memory metrics, reducing latency by up to 45% during peak loads.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-800/50 backdrop-blur rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-800">
                  <DollarSign className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Cost Efficiency</h3>
                <p className="mt-2 text-blue-200">
                  Optimize resource utilization by precisely matching compute resources to actual workload needs, cutting infrastructure costs by 30-40%.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-800/50 backdrop-blur rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-800">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Proactive Scaling</h3>
                <p className="mt-2 text-blue-200">
                  Anticipate scaling needs before they become critical by analyzing message patterns and consumer lag trends, preventing service degradation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-800/50 backdrop-blur rounded-xl p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-800">
                  <Zap className="h-6 w-6" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Easy Implementation</h3>
                <p className="mt-2 text-blue-200">
                  Get up and running in minutes with a simple installation process and intuitive configuration. Minimal operator overhead required.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-100 text-blue-800">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <div className="md:ml-6">
              <h3 className="text-xl font-semibold">Enterprise Ready</h3>
              <p className="mt-2 text-blue-200">
                Built with reliability and security in mind. Kaftain provides detailed metrics, audit logs, and seamless integration with existing monitoring systems. Compatible with major cloud providers and on-premise Kubernetes implementations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;