import React from 'react';
import { BarChart2, Activity, TrendingUp, Cpu, Layers, Shield, LineChart, History, Users, MessageSquare } from 'lucide-react';

const features = [
  {
    title: 'Real-Time Metrics Dashboard',
    description: 'Monitor consumer lag, scaling events, and Kafka metrics through an intuitive, real-time dashboard.',
    icon: LineChart,
  },
  {
    title: 'Consumer Group Tracking',
    description: 'Track all consumer groups, their status, and lag metrics in a centralized view.',
    icon: Users,
  },
  {
    title: 'Topic Analytics',
    description: 'Detailed insights into topic throughput, partition distribution, and message rates.',
    icon: MessageSquare,
  },
  {
    title: 'Scaling History',
    description: 'Comprehensive history of scaling events with detailed metrics and triggers.',
    icon: History,
  },
  {
    title: 'Kafka-Driven Scaling',
    description: 'Intelligent auto-scaling decisions based on real-time Kafka metrics and consumer behavior.',
    icon: BarChart2,
  },
  {
    title: 'HPA Integration',
    description: 'Seamless integration with Kubernetes HPA for automated scaling based on Kafka metrics.',
    icon: Layers,
  },
  {
    title: 'Predictive Scaling',
    description: 'Anticipate load changes before they impact performance using advanced pattern recognition.',
    icon: TrendingUp,
  },
  {
    title: 'Resource Optimization',
    description: 'Optimize resource allocation by precisely matching compute resources to actual workload demands.',
    icon: Cpu,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-23 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Comprehensive Monitoring & Scaling
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Real-time insights and intelligent scaling controls in one powerful dashboard
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-20">
          <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-12 gap-6">
                {/* Consumer Lag Panel */}
                <div className="col-span-12 lg:col-span-4 bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-medium">Consumer Lag</h3>
                    <span className="text-red-400 text-sm">Critical</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">orders-group</span>
                        <span className="text-red-400">+2.5k msgs</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">payments-group</span>
                        <span className="text-yellow-400">+500 msgs</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auto-scaling Panel */}
                <div className="col-span-12 lg:col-span-4 bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-medium">Auto-scaling Status</h3>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">orders-service</span>
                        <span className="text-green-400">8 → 12 pods</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">payments-service</span>
                        <span className="text-blue-400">4 → 6 pods</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Topics Panel */}
                <div className="col-span-12 lg:col-span-4 bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white font-medium">Topic Metrics</h3>
                    <span className="text-blue-400 text-sm">Live</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-700 rounded p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">orders.incoming</span>
                        <span className="text-blue-400">2.3k msg/s</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gray-700 rounded p-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">payments.processed</span>
                        <span className="text-blue-400">1.8k msg/s</span>
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white border border-gray-100 rounded-xl shadow-sm transition-all hover:shadow-md group overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-800 mb-5">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;