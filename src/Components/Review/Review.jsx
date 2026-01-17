export default function Review() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-slate-950 transition-colors duration-300 mt-20">
      <div className="container mx-auto">
        
        {/* CENTER HEADING */}
        <div className="mb-16 text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 transition-all duration-300">
            <span className="text-lg">⭐</span>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Customer Reviews</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            What Our <span style={{color: '#192a56'}} className="dark:text-yellow-500">Customers Say</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Real feedback from thousands of satisfied customers who trust ShopHub for their shopping needs
          </p>
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          
          {/* Testimonial 1 */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-yellow-600/50">
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed font-medium">
              "ShopHub has completely changed my shopping experience. The products are amazing, delivery is super fast, and the customer support is outstanding!"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                <img src="https://i.pravatar.cc/48?img=1" alt="Customer" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Sarah Johnson</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-yellow-600/50">
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed font-medium">
              "I've been shopping with ShopHub for 6 months now. The quality is consistently great and the prices are unbeatable compared to other retailers."
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                <img src="https://i.pravatar.cc/48?img=2" alt="Customer" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Michael Chen</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-yellow-600/50">
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed font-medium">
              "The 30-day money-back guarantee gives me peace of mind. I've recommended ShopHub to all my friends and family!"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                <img src="https://i.pravatar.cc/48?img=3" alt="Customer" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Emily Rodriguez</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-yellow-600/50">
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed font-medium">
              "Excellent customer service! They helped me find the perfect product and answered all my questions. Highly recommend!"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                <img src="https://i.pravatar.cc/48?img=4" alt="Customer" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">James Wilson</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-yellow-600/50">
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed font-medium">
              "Free shipping on orders above $50 is a great deal. I've saved so much money shopping here compared to other platforms!"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                <img src="https://i.pravatar.cc/48?img=5" alt="Customer" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Lisa Anderson</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-yellow-600/50">
            
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base mb-6 leading-relaxed font-medium">
              "Best shopping experience ever! Real-time tracking, secure payments, and products arrive in perfect condition every time."
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                <img src="https://i.pravatar.cc/48?img=6" alt="Customer" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">David Martinez</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 bg-gray-50 dark:bg-slate-800/50 rounded-xl p-8 md:p-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold" style={{color: '#192a56'}} className="dark:text-yellow-500">100K+</div>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">Happy Customers</p>
          </div>
          <div className="text-center border-l border-r border-gray-200 dark:border-slate-700">
            <div className="text-3xl md:text-4xl font-bold" style={{color: '#192a56'}} className="dark:text-yellow-500">4.8⭐</div>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold" style={{color: '#192a56'}} className="dark:text-yellow-500">99.8%</div>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-2">Satisfaction</p>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-base md:text-lg">
            Join thousands of satisfied customers today
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95" style={{background: 'linear-gradient(90deg, #192a56, #F59E0B)'}}>
            <span>Start Shopping Now</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}