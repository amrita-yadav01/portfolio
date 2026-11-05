import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  Sparkles,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [formStatus, setFormStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (formStatus.type) {
      setFormStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    setIsSubmitting(true);

    // Prepare mailto link with encoded subject and body to ensure 100% genuine message delivery
    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() 
        ? `[Portfolio Contact] ${formData.subject.trim()}` 
        : `[Portfolio Contact] Message from ${formData.name.trim()}`
    );

    const mailtoBody = encodeURIComponent(
      `Hello Amruta,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via Amruta Yadav Portfolio Website`
    );

    const mailtoUrl = `mailto:${personal.contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Trigger celebration effect
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#5F1D21', '#7A3035', '#B5827C', '#E8D4CE']
    });

    // Launch email client
    window.location.href = mailtoUrl;

    setIsSubmitting(false);
    setFormStatus({
      type: 'success',
      message: 'Draft ready! Your default email client has been opened with your message. If it did not open automatically, you can email directly at amritayadavlivez@gmail.com.'
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#FFF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6EEE9] text-[#5F1D21] text-xs font-semibold uppercase tracking-wider font-mono mb-3 border border-[#E8D4CE]">
            <MessageSquare className="w-3.5 h-3.5 text-[#7A3035]" />
            Initiate Collaboration
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#5F1D21] tracking-tight">
            Let's Discuss Engineering & Opportunities
          </h2>
          <p className="text-sm text-[#6B575B] mt-3 font-sans">
            I am actively seeking software engineering internships, research collaborations, and project building opportunities. Reach out directly or send a message below.
          </p>
          <div className="w-20 h-1 bg-[#7A3035] rounded-full mt-4" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Recruiter Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] shadow-xs space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#5F1D21]">
                  Direct Contact Channels
                </h3>
                <p className="text-xs text-[#6B575B] mt-1 font-sans">
                  Quickest response via Email or LinkedIn.
                </p>
              </div>

              {/* Email Card with Copy */}
              <div className="p-4 rounded-2xl bg-[#F6EEE9] border border-[#E8D4CE] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#5F1D21] flex items-center justify-center shrink-0 border border-[#E8D4CE]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A3035]">Email Address</div>
                    <a 
                      href={`mailto:${personal.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#332528] hover:text-[#5F1D21] truncate block"
                    >
                      {personal.contact.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.contact.email, 'email')}
                  className="p-2 rounded-lg bg-white hover:bg-[#E8D4CE] text-[#5F1D21] border border-[#E8D4CE] transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card with Copy */}
              <div className="p-4 rounded-2xl bg-[#F6EEE9] border border-[#E8D4CE] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#5F1D21] flex items-center justify-center shrink-0 border border-[#E8D4CE]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A3035]">Phone & WhatsApp</div>
                    <a 
                      href={`tel:${personal.contact.phone}`}
                      className="text-xs sm:text-sm font-semibold text-[#332528] hover:text-[#5F1D21] block"
                    >
                      {personal.contact.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(personal.contact.phone, 'phone')}
                  className="p-2 rounded-lg bg-white hover:bg-[#E8D4CE] text-[#5F1D21] border border-[#E8D4CE] transition-colors shrink-0"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#F6EEE9] border border-[#E8D4CE] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-[#5F1D21] flex items-center justify-center shrink-0 border border-[#E8D4CE]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#7A3035]">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#332528]">
                    {personal.contact.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A3035] mb-3">
                  Professional Profiles
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white border border-[#E8D4CE] hover:border-[#7A3035] hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-[#5F1D21]"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-[#0077B5]" />
                      LinkedIn
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#6B575B]" />
                  </a>

                  <a
                    href={personal.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white border border-[#E8D4CE] hover:border-[#7A3035] hover:shadow-xs transition-all flex items-center justify-between text-xs font-semibold text-[#5F1D21]"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-[#332528]" />
                      GitHub
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#6B575B]" />
                  </a>
                </div>
              </div>

            </div>

            {/* Recruiter Availability Card */}
            <div className="p-6 rounded-3xl bg-[#FAF3F0] border border-[#E8D4CE] text-xs text-[#332528] space-y-2">
              <div className="flex items-center gap-2 font-bold text-[#5F1D21]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Internship & Opportunity Readiness
              </div>
              <p className="text-[#6B575B] leading-relaxed">
                Available for Summer/Winter Software Engineering Internships, Data Science projects, and collaborative technical initiatives.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFF9F5] border-2 border-[#E8D4CE] shadow-sm">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#5F1D21]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#6B575B] mt-1 font-sans">
                  Submitting will prepare a clean, formatted email directly addressed to Amruta.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#7A3035] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6EEE9]/70 border border-[#E8D4CE] text-sm text-[#332528] placeholder-[#B5827C]/70 focus:outline-none focus:border-[#7A3035] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#7A3035] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F6EEE9]/70 border border-[#E8D4CE] text-sm text-[#332528] placeholder-[#B5827C]/70 focus:outline-none focus:border-[#7A3035] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#7A3035] mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Software Engineering Internship Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F6EEE9]/70 border border-[#E8D4CE] text-sm text-[#332528] placeholder-[#B5827C]/70 focus:outline-none focus:border-[#7A3035] focus:bg-white transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#7A3035] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Share details regarding your team, role, or project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F6EEE9]/70 border border-[#E8D4CE] text-sm text-[#332528] placeholder-[#B5827C]/70 focus:outline-none focus:border-[#7A3035] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Status Alerts */}
                {formStatus.message && (
                  <div className={`p-4 rounded-xl text-xs leading-relaxed ${
                    formStatus.type === 'success' 
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' 
                      : 'bg-rose-50 text-rose-900 border border-rose-200'
                  }`}>
                    {formStatus.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#5F1D21] text-white hover:bg-[#7A3035] transition-all text-sm font-semibold tracking-wide shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email Draft</span>
                </button>
              </form>

              {/* Formspree / Backend Configuration Guidance Note */}
              <div className="mt-6 pt-5 border-t border-[#E8D4CE] flex items-start gap-2.5 text-[11px] text-[#6B575B]">
                <Info className="w-4 h-4 text-[#7A3035] shrink-0 mt-0.5" />
                <p>
                  <strong>Technical Delivery Notice:</strong> This form initiates an authenticated email draft in your local mail client. For zero-click serverless forwarding, Amruta can easily bind this form action to Formspree (<code className="font-mono text-[#5F1D21]">https://formspree.io/f/YOUR_FORM_ID</code>) in <code className="font-mono text-[#5F1D21]">src/components/Contact.jsx</code>.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
