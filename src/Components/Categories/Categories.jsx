export default function Categories() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-white dark:bg-slate-950 transition-colors duration-300 mt-40">
      <div className="container mx-auto">
        
        {/* CENTER HEADING */}
        <div className="mb-16 text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/50 transition-all duration-300">
            <span className="text-lg">📦</span>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Explore Our Collection</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Shop by <span style={{color: '#192a56'}} className="dark:text-yellow-500">Category</span>
          </h2>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Browse through our diverse range of product categories to find exactly what you're looking for
          </p>
        </div>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1 - Electronics */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-gray-300 dark:hover:border-yellow-600/50 cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                ⚡
              </div>
              <span className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-gray-900 dark:text-yellow-400 transition-all">234+ items</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Electronics</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Latest gadgets and devices for tech lovers</p>
            <button className="inline-flex items-center gap-2 px-5 py-2 text-white text-sm md:text-base font-semibold rounded-lg transition-all group-hover:shadow-lg group-hover:translate-x-1 hover:scale-105" style={{background: 'linear-gradient(90deg, #192a56, #1a3066)'}}>
              Explore
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          {/* Card 2 - Accessories */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-gray-300 dark:hover:border-yellow-600/50 cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                🎧
              </div>
              <span className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-gray-900 dark:text-yellow-400 transition-all">156+ items</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Accessories</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Premium add-ons and extras for your devices</p>
            <button className="inline-flex items-center gap-2 px-5 py-2 text-white text-sm md:text-base font-semibold rounded-lg transition-all group-hover:shadow-lg group-hover:translate-x-1 hover:scale-105" style={{background: 'linear-gradient(90deg, #192a56, #1a3066)'}}>
              Explore
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          {/* Card 3 - Photography */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-gray-300 dark:hover:border-yellow-600/50 cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                📷
              </div>
              <span className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-gray-900 dark:text-yellow-400 transition-all">89+ items</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Photography</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Professional camera gear and lenses</p>
            <button className="inline-flex items-center gap-2 px-5 py-2 text-white text-sm md:text-base font-semibold rounded-lg transition-all group-hover:shadow-lg group-hover:translate-x-1 hover:scale-105" style={{background: 'linear-gradient(90deg, #192a56, #1a3066)'}}>
              Explore
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          {/* Card 4 - Smart Devices */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-gray-300 dark:hover:border-yellow-600/50 cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                🏠
              </div>
              <span className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-gray-900 dark:text-yellow-400 transition-all">112+ items</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Smart Devices</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">IoT and smart home technology</p>
            <button className="inline-flex items-center gap-2 px-5 py-2 text-white text-sm md:text-base font-semibold rounded-lg transition-all group-hover:shadow-lg group-hover:translate-x-1 hover:scale-105" style={{background: 'linear-gradient(90deg, #192a56, #1a3066)'}}>
              Explore
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          {/* Card 5 - Wearables */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-gray-300 dark:hover:border-yellow-600/50 cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                ⌚
              </div>
              <span className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-gray-900 dark:text-yellow-400 transition-all">78+ items</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Wearables</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Smartwatches and fitness trackers</p>
            <button className="inline-flex items-center gap-2 px-5 py-2 text-white text-sm md:text-base font-semibold rounded-lg transition-all group-hover:shadow-lg group-hover:translate-x-1 hover:scale-105" style={{background: 'linear-gradient(90deg, #192a56, #1a3066)'}}>
              Explore
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          {/* Card 6 - Gaming */}
          <div className="group rounded-xl bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-slate-700 p-6 md:p-8 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-slate-900/50 hover:-translate-y-3 hover:border-gray-300 dark:hover:border-yellow-600/50 cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-4xl group-hover:scale-110 transition-transform" style={{background: 'linear-gradient(135deg, #192a56, #F59E0B)'}}>
                🎮
              </div>
              <span className="text-xs md:text-sm font-bold px-3 py-1.5 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-gray-900 dark:text-yellow-400 transition-all">145+ items</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">Gaming</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">Gaming peripherals and accessories</p>
            <button className="inline-flex items-center gap-2 px-5 py-2 text-white text-sm md:text-base font-semibold rounded-lg transition-all group-hover:shadow-lg group-hover:translate-x-1 hover:scale-105" style={{background: 'linear-gradient(90deg, #192a56, #1a3066)'}}>
              Explore
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-base md:text-lg">
            Can't find what you're looking for?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95" style={{background: 'linear-gradient(90deg, #192a56, #F59E0B)'}}>
            <span>Browse All Products</span>
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}