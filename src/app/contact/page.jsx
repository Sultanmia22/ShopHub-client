'use client';

import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            alert('Message sent successfully! We will get back to you soon.');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="py-8">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                    Get in Touch
                </h1>
                <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
                    Have a question or proposal? We'd love to hear from you. Fill out the form or drop us a line directly.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">

                {/* Contact Info & Map */}
                <div className="space-y-8 order-2 lg:order-1">
                    <div className="card bg-base-200 border border-white/5 p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <MessageCircle className="text-primary" /> Contact Information
                        </h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Our Headquarters</h3>
                                    <p className="text-base-content/70">
                                        123 Innovation Drive, Suite 400<br />
                                        Tech City, CA 94043<br />
                                        United States
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Email Us</h3>
                                    <p className="text-base-content/70 mb-1">General: hello@shophub.com</p>
                                    <p className="text-base-content/70">Support: support@shophub.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center text-accent shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Call Us</h3>
                                    <p className="text-base-content/70">
                                        +1 (555) 123-4567<br />
                                        Mon - Fri, 9am - 6pm EST
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-64 bg-base-300 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                        <div className="relative z-10 bg-base-100/80 backdrop-blur-sm px-6 py-3 rounded-xl font-bold border border-white/10 shadow-lg">
                            Map View
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="card bg-base-100 shadow-2xl border border-white/10 order-1 lg:order-2">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="input input-bordered w-full focus:input-primary bg-base-200/50"
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="input input-bordered w-full focus:input-primary bg-base-200/50"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                    className="input input-bordered w-full focus:input-primary bg-base-200/50"
                                    required
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="textarea textarea-bordered h-32 focus:textarea-primary bg-base-200/50"
                                    placeholder="Tell us more about your inquiry..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-full mt-4 text-white shadow-lg shadow-primary/30"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        <Send size={18} /> Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            {/* FAQ Section */}
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="join join-vertical w-full bg-base-200 border border-white/5 rounded-2xl shadow-lg">
                    <div className="collapse collapse-arrow join-item border-b border-white/5">
                        <input type="radio" name="my-accordion-4" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What payment methods do you accept?
                        </div>
                        <div className="collapse-content">
                            <p className="text-base-content/70">We accept major credit cards (Visa, Mastercard, AMEX), PayPal, and Apple Pay.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b border-white/5">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            How do I track my order?
                        </div>
                        <div className="collapse-content">
                            <p className="text-base-content/70">Once your order ships, you will receive an email with a tracking number and a link to track your package.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border-b border-white/5">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            What is your return policy?
                        </div>
                        <div className="collapse-content">
                            <p className="text-base-content/70">We offer a 30-day return policy for unused items in their original packaging. Please contact support to initiate a return.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
