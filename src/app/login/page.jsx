'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === 'user@example.com' && password === 'password') {
            // Set auth cookie
            document.cookie = "auth=true; path=/; max-age=3600"; // Expires in 1 hour
            // Redirect
            window.location.href = '/items'; // Force refresh to update Navbar
        } else {
            setError('Invalid credentials. Try user@example.com / password');
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="card w-full max-w-md bg-base-200 shadow-xl border border-white/5">
                <div className="card-body">
                    <h2 className="card-title justify-center text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Welcome Back
                    </h2>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="user@example.com"
                                className="input input-bordered w-full focus:input-primary"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full focus:input-primary"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <div className="alert alert-error text-sm py-2 mt-2">
                                <span>{error}</span>
                            </div>
                        )}

                        <button type="submit" className="btn btn-primary w-full mt-4 text-white shadow-lg shadow-primary/30">
                            Login
                        </button>
                    </form>

                    <div className="divider"></div>

                    <div className="text-center text-sm mt-4">
                        <h2 className="text-lg font-bold mb-2">Email & Password</h2>
                        <p className="text-base-content/60">Email : user@example.com</p>
                        <p className="text-base-content/60">Password : password</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
