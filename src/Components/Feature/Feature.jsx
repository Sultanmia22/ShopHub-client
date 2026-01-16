'use client';

import { Zap, Lock, Headphones, RotateCcw, ShoppingBag, Gem } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Get your orders delivered within 2-3 business days',
  },
  {
    id: 2,
    icon: Lock,
    title: 'Secure Payment',
    description: '100% secure transactions with encrypted payment gateway',
  },
  {
    id: 3,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer support team is always ready to help you',
  },
  {
    id: 4,
    icon: RotateCcw,
    title: 'Money Back Guarantee',
    description: 'Not satisfied? Return within 30 days for full refund',
  },
  {
    id: 5,
    icon: ShoppingBag,
    title: 'Wide Selection',
    description: 'Browse from thousands of quality products',
  },
  {
    id: 6,
    icon: Gem,
    title: 'Best Prices',
    description: 'Competitive prices with regular discounts and offers',
  },
];

export default function Feature() {
  return (
    <section id="features" className="py-16 md:py-24 bg-base-100">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ShopHub?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide the best shopping experience with our premium features and exceptional customer service
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group p-6 md:p-8 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                  <IconComponent 
                    size={32} 
                    className="text-primary group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ready to experience the ShopHub difference?
          </p>
          <button className="btn btn-primary text-white text-base font-semibold px-8 py-3 hover:shadow-lg hover:shadow-primary/50 transition-all">
            Start Shopping Now
          </button>
        </div>
      </div>
    </section>
  );
}