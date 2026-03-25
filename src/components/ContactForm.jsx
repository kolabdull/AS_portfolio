import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-mono text-gray-500 mb-1">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border-b border-gray-200 py-2 focus:border-gray-400 focus:outline-none transition-colors"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-mono text-gray-500 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border-b border-gray-200 py-2 focus:border-gray-400 focus:outline-none transition-colors"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-mono text-gray-500 mb-1">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={4}
          className="w-full border-b border-gray-200 py-2 focus:border-gray-400 focus:outline-none transition-colors resize-none"
          required
        />
      </div>
      <button
        type="submit"
        className="px-6 py-3 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        Send Message →
      </button>
    </form>
  );
};

export default ContactForm;