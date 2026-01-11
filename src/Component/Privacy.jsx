import React from 'react';

const Privacy = () => {
  // Helper to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans text-slate-800 pt-24">
      
      {/* --- Sidebar Navigation (Table of Contents) --- */}
      <aside className="w-full md:w-72 bg-slate-50 border-r border-slate-200 md:fixed md:left-0 md:top-24 md:bottom-0 md:overflow-y-auto hidden md:block z-10">
        <div className="p-8">
          <h2 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-6">
            Table of Contents
          </h2>
          <nav className="space-y-1">
            <NavLink onClick={() => scrollToSection('intro')} label="1. Introduction" />
            <NavLink onClick={() => scrollToSection('collection')} label="2. Information We Collect" />
            <NavLink onClick={() => scrollToSection('usage')} label="3. How We Use Data" />
            <NavLink onClick={() => scrollToSection('ai-content')} label="4. AI & Content Generation" />
            <NavLink onClick={() => scrollToSection('sharing')} label="5. Data Sharing" />
            <NavLink onClick={() => scrollToSection('security')} label="6. Data Security" />
            <NavLink onClick={() => scrollToSection('rights')} label="7. Your Rights" />
            <NavLink onClick={() => scrollToSection('contact')} label="8. Contact Us" />
          </nav>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 w-full md:ml-72 p-6 md:p-16 max-w-4xl">
        
        {/* Header */}
        <div className="mb-12 border-b border-slate-200 pb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500">Last Updated: January 11, 2026</p>
        </div>

        {/* 1. Introduction */}
        <Section id="intro" title="1. Introduction">
          <p>
            Welcome to <strong>Skyntar</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our generative AI video services.
          </p>
          <p>
            By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
        </Section>

        {/* 2. Information We Collect */}
        <Section id="collection" title="2. Information We Collect">
          <h4 className="font-bold text-slate-900 mt-4 mb-2">A. Personal Information</h4>
          <p>
            We collect personal information that you voluntarily provide to us when you register for the Service, express an interest in obtaining information about us or our products, or otherwise contact us. This may include:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2 mb-4">
            <li>Name and Contact Data (Email address, phone number).</li>
            <li>Credentials (Passwords, API keys).</li>
            <li>Payment Data (Processed securely by our payment processors).</li>
          </ul>

          <h4 className="font-bold text-slate-900 mt-4 mb-2">B. Usage Data</h4>
          <p>
            We automatically collect certain information when you visit, use, or navigate the Service. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and information about how and when you use our Service.
          </p>
        </Section>

        {/* 3. How We Use Data */}
        <Section id="usage" title="3. How We Use Your Information">
          <p>We use the information we collect or receive:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>To facilitate account creation and logon process:</strong> If you choose to link your account with us to a third-party account (such as your Google or GitHub account), we use the information you allowed us to collect from those third parties to facilitate account creation.</li>
            <li><strong>To deliver and facilitate delivery of services:</strong> To generate videos based on your text prompts and deliver them to you.</li>
            <li><strong>To improve our AI Models:</strong> We may use anonymized usage data and content to improve the performance and safety of our generative AI models.</li>
            <li><strong>To send administrative information to you:</strong> We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</li>
          </ul>
        </Section>

        {/* 4. AI & Content Generation */}
        <Section id="ai-content" title="4. AI & Content Generation">
          <div className="bg-fuchsia-50 border-l-4 border-fuchsia-500 p-4 rounded-r-lg mb-4">
            <p className="text-sm text-fuchsia-900 font-medium">
              <strong>Important Note on User Content:</strong> When you use our text-to-video tools, you provide us with text inputs ("Prompts") and potentially other media.
            </p>
          </div>
          <p>
            You retain ownership of your Prompts and the generated output videos, subject to our Terms of Service. However, by using the Service, you grant Skyntar a worldwide, non-exclusive, royalty-free license to host, copy, and use your Content solely for the purpose of providing the Service and improving our AI technologies.
          </p>
          <p className="mt-2">
            We employ automated content moderation tools to prevent the generation of illegal, harmful, or sexually explicit content.
          </p>
        </Section>

        {/* 5. Data Sharing */}
        <Section id="sharing" title="5. Data Sharing">
          <p>We may process or share your data that we hold based on the following legal bases:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
            <li><strong>Vendors and Third Parties:</strong> We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf (e.g., Cloud hosting providers like AWS, Payment processors like Stripe).</li>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
          </ul>
        </Section>

        {/* 6. Security */}
        <Section id="security" title="6. Data Security">
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.
          </p>
        </Section>

        {/* 7. Your Rights */}
        <Section id="rights" title="7. Your Privacy Rights">
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>The right to request access and obtain a copy of your personal information.</li>
            <li>The right to request rectification or erasure of your personal information.</li>
            <li>The right to restrict the processing of your personal information.</li>
          </ul>
          <p className="mt-4">
            If you would like to make such a request, please contact us using the contact details provided below. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>
        </Section>

        {/* 8. Contact Us */}
        <Section id="contact" title="8. Contact Us">
          <p>
            If you have questions or comments about this policy, you may email us at <a href="mailto:support@skyntar.in" className="text-fuchsia-600 font-bold hover:underline">support@skyntar.in</a> or by post to:
          </p>
          
          <div className="mt-6 p-6 bg-slate-50 border border-slate-200 rounded-xl">
            <h4 className="font-bold text-slate-900">Skyntar</h4>
            <address className="not-italic text-slate-600 mt-2 leading-relaxed">
              12251, Anaj Mandi Road,<br />
              Surajpole Gate,<br />
              Jaipur City, Jaipur, Rajasthan,<br />
              India, 302003
            </address>
          </div>
        </Section>

      </main>
    </div>
  );
};

// --- Sub-components ---

const NavLink = ({ onClick, label }) => (
  <button 
    onClick={onClick} 
    className="block w-full text-left py-2 px-4 text-sm text-slate-600 hover:text-fuchsia-600 hover:bg-fuchsia-50 rounded-lg transition-colors border-l-2 border-transparent hover:border-fuchsia-600"
  >
    {label}
  </button>
);

const Section = ({ id, title, children }) => (
  <section id={id} className="mb-12 scroll-mt-32">
    <h2 className="text-2xl font-bold text-slate-900 mb-4">{title}</h2>
    <div className="text-slate-600 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

export default Privacy;