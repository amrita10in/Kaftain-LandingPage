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

          {/* Dashboard Image Preview */}
        <div className="mb-20 flex justify-center">
          <img
            src="/dashboard1.png"
            alt="Kaftain Dashboard Preview"
            className="rounded-xl shadow-xl w-full max-w-5xl"
            />
          </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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