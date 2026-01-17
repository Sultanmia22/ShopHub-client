export default function CtaSection() {
  return (
    <section className=" mt-20 py-20 md:py-32 px-4 md:px-6 bg-gradient-to-r from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="container mx-auto">
        
        {/* MAIN CTA CONTAINER */}
        <div className="relative rounded-2xl overflow-hidden p-8 md:p-16 lg:p-20 text-center" style={{background: 'linear-gradient(135deg, #192a56, #1a3066)'}}>
          
          {/* Background Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-yellow-400/30 bg-white/10 backdrop-blur-sm">
              <span className="text-lg">🚀</span>
              <span className="text-sm font-semibold text-yellow-400">Limited Time Offer</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ready to Start <span className="text-yellow-400">Shopping?</span>
            </h2>

            {/* Subheading */}
            <p className="text-base md:text-lg text-gray-100 leading-relaxed">
              Join thousands of satisfied customers and experience the ShopHub difference today. 
              Get exclusive discounts, free shipping, and 24/7 support.
            </p>

            {/* Highlight Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl mb-2">✨</div>
                <p className="text-sm text-gray-100 font-medium">Premium Quality Products</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl mb-2">⚡</div>
                <p className="text-sm text-gray-100 font-medium">Fast & Free Shipping</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="text-2xl mb-2">🛡️</div>
                <p className="text-sm text-gray-100 font-medium">Secure Payments</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-lg transition-all hover:shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 active:scale-95">
                <span>Shop Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold rounded-lg transition-all hover:shadow-lg border border-white/30 backdrop-blur-sm">
                <span>Learn More</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20 space-y-4">
              <p className="text-gray-200 text-sm font-medium">Join 100K+ Satisfied Customers</p>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-300 text-lg">⭐</span>
                  ))}
                </div>
                <span className="text-gray-100 text-sm ml-2">4.8/5 from 50K+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">First Order Discount</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Get 20% off on your first purchase</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Free Shipping</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">On orders above $50</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 transition-all hover:shadow-lg">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">Money-Back Guarantee</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
}