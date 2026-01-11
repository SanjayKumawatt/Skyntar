import React, { useState } from 'react';

const Contact = () => {
  // 1. STATE MANAGEMENT (Form ka status track karne ke liye)
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  // 2. HANDLER FUNCTION (Submit hone par kya hoga)
  const handleSubmit = (e) => {
    e.preventDefault(); // Page reload rokne ke liye
    setFormStatus('sending');

    // Fake Network Request (2 seconds delay)
    setTimeout(() => {
      setFormStatus('success');
      
      // Optional: 5 second baad wapas form reset kar de
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 2000);
  };

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* --- Part 1: Hero Section --- */}
      <section className="relative bg-fuchsia-50 pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
                 backgroundImage: 'radial-gradient(#d946ef 1px, transparent 1px)', 
                 backgroundSize: '30px 30px' 
             }}>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-fuchsia-500 mb-6 leading-tight">
            Let's Build the Future of <br />
            <span className="text-fuchsia-600">Generative Video Together.</span>
          </h1>
          <p className="text-slate-600 mb-10 text-lg max-w-2xl mx-auto">
            Whether you're a creator, partner, researcher, or investor - we'd love to connect.
          </p>
        </div>
      </section>

      {/* --- Part 2: Contact Content --- */}
      <section className="relative -mt-16 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
                <p className="text-slate-500 mt-2">
                  Have a technical issue or want to partner with us? Reach out directly.
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-fuchsia-300 transition-colors">
                <div className="bg-fuchsia-50 p-3 rounded-lg text-fuchsia-600">
                  <MailIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Chat with us</h4>
                  <p className="text-sm text-slate-500 mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:support@skyntar.in" className="text-fuchsia-600 font-semibold hover:underline">
                    support@skyntar.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-fuchsia-300 transition-colors">
                <div className="bg-fuchsia-50 p-3 rounded-lg text-fuchsia-600">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Visit us</h4>
                  <p className="text-sm text-slate-500 mb-1">Come say hello at our office HQ.</p>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">
                    12251, Anaj Mandi Road,<br />
                    Surajpole Gate, Jaipur City,<br />
                    Jaipur, Rajasthan, India, 302003
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-2 border-slate-900 rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                
                {/* 3. FORM START - onSubmit handler lagaya hai */}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all"/>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                      <input required type="email" placeholder="john.doe@example.com" className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all"/>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg appearance-none focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all text-slate-600">
                        <option>General Inquiry</option>
                        <option>Partnership Proposal</option>
                        <option>Technical Support</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <ChevronDownIcon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea required rows="5" placeholder="Tell us how we can help..." className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all resize-none"></textarea>
                  </div>


                  {/* 4. SUCCESS MESSAGE NOTIFICATION (Conditional Rendering) */}
                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 animate-fade-in">
                      <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <CheckIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-green-800 text-sm">Message Sent Successfully!</h4>
                        <p className="text-green-700 text-xs">We'll get back to you at support@skyntar.in soon.</p>
                      </div>
                    </div>
                  )}

                  {/* 5. SUBMIT BUTTON (Dynamic State) */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={formStatus === 'sending' || formStatus === 'success'}
                      className={`w-full py-4 font-bold rounded-lg transition-all shadow-lg flex justify-center items-center gap-2
                        ${formStatus === 'success' 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                        }
                        ${formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''}
                      `}
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <SpinnerIcon className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <CheckIcon className="w-5 h-5" />
                          Sent!
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

// --- Icons ---
const CheckIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>;
const SpinnerIcon = ({ className }) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;

// Previous Icons (Same as before)
const MailIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const MapPinIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const ChevronDownIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m6 9 6 6 6-6"/></svg>);
const UploadIcon = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>);

export default Contact;