import Link from 'next/link';
import { Users, Truck, ShieldCheck, Award } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="py-0">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-base-200 border border-white/5 my-8">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"></div>
                <div className="relative z-10 px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        Reimagining Commerce
                    </h1>
                    <p className="text-xl md:text-2xl text-base-content/80 max-w-3xl mx-auto leading-relaxed">
                        ShopHub isn't just a store. It's a destination for those who seek quality, innovation, and style in every product they own.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                {[
                    { label: 'Happy Customers', value: '50K+' },
                    { label: 'Products', value: '2,000+' },
                    { label: 'Countries Served', value: '25' },
                    { label: 'Years Active', value: '5' }
                ].map((stat, idx) => (
                    <div key={idx} className="card bg-base-200/50 border border-white/5 text-center py-8 hover:bg-base-200 transition-colors">
                        <h3 className="text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                        <p className="text-base-content/60 font-medium">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Mission & Story Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                <div className="space-y-6">
                    <div className="badge badge-secondary badge-lg mb-2">Our Mission</div>
                    <h2 className="text-3xl md:text-4xl font-bold">To Bring Quality to Your Doorstep</h2>
                    <p className="text-lg text-base-content/70 leading-relaxed">
                        Founded in 2020, ShopHub started with a simple idea: that shopping online should be seamless, secure, and satisfying. We handpick every item in our catalog to ensure it meets our rigorous standards for quality and durability.
                    </p>
                    <p className="text-lg text-base-content/70 leading-relaxed">
                        We believe in sustainable practices and partner with brands that care about the planet as much as we do. When you shop with us, you're not just buying a product; you're joining a community of mindful consumers.
                    </p>
                    <div className="pt-4">
                        <Link href="/items" className="btn btn-primary text-white shadow-lg shadow-primary/30">
                            Explore Our Collection
                        </Link>
                    </div>
                </div>
                <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500">
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=1000&auto=format&fit=crop"
                        alt="Office Team"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Values Grid */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShopHub?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-base-200 border border-white/5 p-8 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-6">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Secure Payments</h3>
                        <p className="text-base-content/70">
                            Your security is our priority. We use top-tier encryption to ensure your data and transactions are always safe.
                        </p>
                    </div>
                    <div className="card bg-base-200 border border-white/5 p-8 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary mb-6">
                            <Truck size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                        <p className="text-base-content/70">
                            We know you want your items fast. Our optimized logistics network ensures quick and reliable shipping worldwide.
                        </p>
                    </div>
                    <div className="card bg-base-200 border border-white/5 p-8 hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
                        <p className="text-base-content/70">
                            No compromises. We only stock products that have proven their worth in terms of quality, design, and longevity.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-12">Meet The Team</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {[
                        { name: 'Alex Johnson', role: 'CEO & Founder', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
                        { name: 'Sarah Lee', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop' },
                        { name: 'Mike Brown', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop' },
                    ].map((member, idx) => (
                        <div key={idx} className="group w-64">
                            <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-base-200 shadow-xl group-hover:scale-110 transition-transform">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-primary font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
