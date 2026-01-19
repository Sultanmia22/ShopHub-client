'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle, AlertCircle, Upload } from 'lucide-react';

export default function AddItemPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
        category: 'Electronics',
        rating: 4.5
    });

    useEffect(() => {
        // Check auth
        const authCookie = document.cookie.split('; ').find(row => row.startsWith('auth='));
        const isAuthenticated = authCookie && authCookie.split('=')[1] === 'true';

        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'rating' ? parseFloat(value) : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setToast(null);

        try {
            const res = await fetch('http://localhost:3001/post/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setToast({ type: 'success', message: 'Product added successfully!' });
                // Reset form
                setFormData({
                    name: '',
                    description: '',
                    price: '',
                    image: '',
                    category: 'Electronics',
                    rating: 4.5
                });
                // Optional: Redirect after delay
                // setTimeout(() => router.push('/items'), 2000);
            } else {
                setToast({ type: 'error', message: 'Failed to add product.' });
            }
        } catch (error) {
            console.error(error);
            setToast({ type: 'error', message: 'Something went wrong.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-12 max-w-2xl mx-auto">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    Add New Product
                </h1>
                <p className="text-base-content/60">
                    Fill in the details below to add a new item to the shop catalog.
                </p>
            </div>

            <div className="card bg-base-200 shadow-xl border border-white/5">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="e.g. Wireless Headphones"
                                className="input input-bordered w-full focus:input-primary"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="textarea textarea-bordered h-24 focus:textarea-primary"
                                placeholder="Product details..."
                                required
                            ></textarea>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Price */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price ($)</span>
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    placeholder="99.99"
                                    className="input input-bordered w-full focus:input-primary"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="select select-bordered w-full focus:select-primary"
                                >
                                    <option>Electronics</option>
                                    <option>Wearables</option>
                                    <option>Furniture</option>
                                    <option>Gaming</option>
                                    <option>Audio</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        {/* Image URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <div className="join w-full">
                                <div className="btn btn-square join-item no-animation pointer-events-none bg-base-300 border-base-content/20">
                                    <Upload size={20} />
                                </div>
                                <input
                                    type="url"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="https://example.com/image.jpg"
                                    className="input input-bordered join-item w-full focus:input-primary"
                                    required
                                />
                            </div>
                            <label className="label">
                                <span className="label-text-alt opacity-70">Paste an image link from Unsplash or elsewhere.</span>
                            </label>
                        </div>

                        {/* Preview Image */}
                        {formData.image && (
                            <div className="mt-2 text-center">
                                <p className="text-xs mb-1 opacity-70">Preview:</p>
                                <img src={formData.image} alt="Preview" className="h-40 rounded-lg mx-auto object-cover border border-white/10" onError={(e) => e.target.style.display = 'none'} />
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`btn btn-primary w-full mt-6 text-white shadow-lg shadow-primary/30 ${loading ? 'loading' : ''}`}
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Add Product'}
                        </button>

                    </form>
                </div>
            </div>

            {/* Toast Notification */}
            {toast && (
                <div className="toast toast-end z-50">
                    <div className={`alert ${toast.type === 'success' ? 'alert-success' : 'alert-error'} text-white shadow-xl`}>
                        {toast.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                        <span>{toast.message}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
