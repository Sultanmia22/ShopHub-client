import Link from 'next/link';

async function getItems() {
    try {
        const res = await fetch('https://shop-hub-server-eight.vercel.app/get/items', { cache: 'no-store' });
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    } catch (error) {
        console.error("Error fetching items:", error);
        return [];
    }
}

export default async function ItemsPage() {
    const items = await getItems();

    return (
        <div className="py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Explore Our Collection
                </h1>
                <p className="text-base-content/60 max-w-2xl mx-auto">
                    Discover premium products curated just for you. Quality, style, and performance in every item.
                </p>
            </div>

            {items.length === 0 ? (
                <div className="text-center py-20">
                    <p className="text-xl">No items found. Is the server running?</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div key={item.id} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border border-white/5 overflow-hidden group">
                            <figure className="relative h-64 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-2 right-2 badge badge-secondary">
                                    {item.category}
                                </div>
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between items-start">
                                    <h2 className="card-title text-xl font-bold truncate pr-2">
                                        {item.name}
                                    </h2>
                                    <div className="flex items-center gap-1 text-yellow-500 text-sm font-medium">
                                        <span>★</span>
                                        <span>{item.rating || 'N/A'}</span>
                                    </div>
                                </div>

                                <p className="text-base-content/70 text-sm line-clamp-2 my-2">
                                    {item.description}
                                </p>

                                <div className="card-actions justify-between items-center mt-4 border-t border-white/5 pt-4">
                                    <span className="text-2xl font-bold text-primary">
                                        ${item.price}
                                    </span>
                                    <Link
                                        href={`/items/${item.id}`}
                                        className="btn btn-primary btn-sm text-white shadow-lg shadow-primary/20"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
