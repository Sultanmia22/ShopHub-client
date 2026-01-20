import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';

async function getItem(id) {
    try {
        const res = await fetch(`https://shop-hub-server-eight.vercel.app/get/items/${id}`, { cache: 'no-store' });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Error fetching item:", error);
        return null;
    }
}

export default async function ItemDetailsPage({ params }) {
    const { id } = await params;
    const item = await getItem(id);

    if (!item) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Item not found</h2>
                <Link href="/items" className="btn btn-primary text-white">Back to Shop</Link>
            </div>
        );
    }

    return (
        <div className="py-12">
            <Link href="/items" className="btn btn-ghost btn-sm mb-6 gap-2 group pl-0 hover:bg-transparent">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Image Section */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-base-200 border border-white/5">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover aspect-square"
                    />
                    <div className="absolute top-4 right-4 badge badge-secondary badge-lg">
                        {item.category || 'Product'}
                    </div>
                </div>

                {/* Details Section */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {item.name}
                        </h1>
                        <div className="flex items-center gap-4 text-sm mt-2">
                            <div className="flex items-center gap-1 text-yellow-500 font-bold">
                                <span>★</span>
                                <span>{item.rating || '4.5'}</span>
                            </div>
                            <span className="text-base-content/40">|</span>
                            <span className="text-green-500 flex items-center gap-1">
                                <Check size={16} /> In Stock
                            </span>
                        </div>
                    </div>

                    <p className="text-xl leading-relaxed text-base-content/80">
                        {item.description}
                    </p>

                    <div className="divider"></div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <span className="text-5xl font-bold text-base-content">
                            ${item.price}
                        </span>
                        <div className="flex gap-3 w-full sm:w-auto">
                            <button className="btn btn-primary btn-lg flex-1 text-white shadow-lg shadow-primary/30">
                                <ShoppingCart size={20} />
                                Add to Cart
                            </button>
                            <button className="btn btn-outline btn-lg">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-inner p-6 mt-8 rounded-xl border border-white/5">
                        <h3 className="font-bold text-lg mb-4">Product Highlights</h3>
                        <ul className="list-disc list-inside space-y-2 text-base-content/70">
                            <li>Premium quality materials</li>
                            <li>Designed for modern professionals</li>
                            <li>Includes 1-year manufacturer warranty</li>
                            <li>Free shipping on orders over $50</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
