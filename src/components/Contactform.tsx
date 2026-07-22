'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-12 px-6 max-w-lg mx-auto bg-gray-900 rounded-xl my-10 text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Get in Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-gray-300">Name</label>
          <input
            type="text"
            required
            className="w-full p-2.5 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="Enter Your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Email Address</label>
          <input
            type="email"
            required
            className="w-full p-2.5 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">Message</label>
          <textarea
            required
            rows={4}
            className="w-full p-2.5 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
            placeholder="Tell me about your project or job opening..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded font-semibold transition duration-200 disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-sm mt-2 text-center">🎉 Message successfully saved to the database!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-2 text-center">❌ Failed to send message. Please try again.</p>
        )}
      </form>
    </section>
  );
}