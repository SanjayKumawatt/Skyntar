import React, { useState } from 'react';

const Docs = () => {
  const [activeTab, setActiveTab] = useState('curl');

  // Helper to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header scroll
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // 🔴 CHANGE 1: Added pt-24 to push entire page down below your header
    <div className="flex flex-col md:flex-row min-h-screen bg-white font-sans text-slate-800 pt-34">
      
      {/* --- Sidebar Navigation --- */}
      {/* 🔴 CHANGE 2: Changed 'top-0' to 'top-24' so sidebar sticks below header */}
      <aside className="w-full md:w-64 bg-slate-50 border-r border-slate-200 md:fixed md:left-0 md:top-24 md:bottom-0 md:overflow-y-auto hidden md:block z-10">
        <div className="p-6">
          <h2 className="font-bold text-slate-900 text-lg mb-6 flex items-center gap-2">
            <span className="text-fuchsia-600 text-2xl">⚡</span> API Docs
          </h2>
          <nav className="space-y-1">
            <NavLink onClick={() => scrollToSection('intro')} label="Introduction" />
            <NavLink onClick={() => scrollToSection('quick-start')} label="Quick Start" />
            <NavLink onClick={() => scrollToSection('auth')} label="Authentication" />
            <NavLink onClick={() => scrollToSection('endpoints')} label="API Endpoints" />
            <NavLink onClick={() => scrollToSection('code-examples')} label="Code Examples" />
            <NavLink onClick={() => scrollToSection('rate-limits')} label="Rate Limits & Pricing" />
            <NavLink onClick={() => scrollToSection('errors')} label="Error Codes" />
            <NavLink onClick={() => scrollToSection('webhooks')} label="Webhooks" />
            <NavLink onClick={() => scrollToSection('best-practices')} label="Best Practices" />
          </nav>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      {/* 🔴 CHANGE 3: Added md:ml-64 to push content right (since sidebar is now fixed) */}
      <main className="flex-1 w-full md:ml-64 p-6 md:p-12">
        
        {/* Mobile Header */}
        <div className="md:hidden mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-bold text-slate-900">API Documentation</h1>
          <p className="text-slate-500 text-sm mt-1">Integrate CandexAI into your apps.</p>
        </div>

        {/* 1. Introduction */}
        <section id="intro" className="mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">API Documentation</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Integrate CandexAI's video generation into your applications with our powerful REST API. 
            Automate content creation and scale your video production programmatically.
          </p>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg text-blue-800 text-sm">
            <strong>Base URL:</strong> <code className="font-mono ml-2 bg-blue-100 px-2 py-1 rounded">https://api.candexai.com</code>
          </div>
        </section>

        {/* 2. Quick Start */}
        <section id="quick-start" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Start</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <StepCard number="1" title="Get Your API Key" desc="Sign up for beta access and receive your API key via email." />
            <StepCard number="2" title="Make First Request" desc="Use the code examples below to generate your first video." />
            <StepCard number="3" title="Poll for Status" desc="Check video generation status and download when complete." />
          </div>
        </section>

        {/* 3. Authentication */}
        <section id="auth" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Authentication</h2>
          <p className="text-slate-600 mb-4">
            All API requests require authentication using an API key. Include your API key in the <code className="text-fuchsia-600 font-mono text-sm bg-fuchsia-50 px-1 rounded">Authorization</code> header:
          </p>
          <CodeBlock code="Authorization: Bearer YOUR_API_KEY" language="http" />
          
          <div className="mt-6 p-4 bg-amber-50 border-l-4 border-amber-400 text-amber-800 text-sm rounded-r-lg">
            <div className="flex gap-2">
              <AlertIcon className="w-5 h-5 flex-shrink-0" />
              <div>
                <strong className="block mb-1">Keep your API key secure!</strong>
                Never expose it in client-side code (browsers) or public repositories. Always make requests from your backend server.
              </div>
            </div>
          </div>
        </section>

        {/* 4. API Endpoints */}
        <section id="endpoints" className="mb-16 space-y-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">API Endpoints</h2>

          {/* POST /generate */}
          <EndpointBlock 
            method="POST" 
            path="/api/v1/generate" 
            desc="Generate a video from a text prompt."
          >
            <Table>
              <Row name="prompt" type="string" required={true} desc="Text description of the video to generate." />
              <Row name="duration" type="string" required={false} desc="Video duration (e.g., '5s', '10s'). Default: '5s'" />
              <Row name="resolution" type="string" required={false} desc="Output resolution ('720p', '1080p', '4k'). Default: '1080p'" />
              <Row name="style" type="string" required={false} desc="Visual style ('cinematic', 'realistic', 'artistic'). Default: 'cinematic'" />
              <Row name="fps" type="number" required={false} desc="Frames per second (24, 30, 60). Default: 30" />
            </Table>
          </EndpointBlock>

          {/* GET /video/{id} */}
          <EndpointBlock 
            method="GET" 
            path="/api/v1/video/{id}" 
            desc="Get the status and details of a video generation."
          >
             <Table>
              <Row name="id" type="string" required={true} desc="Unique video ID returned from the generate endpoint." />
            </Table>
          </EndpointBlock>

          {/* GET /videos */}
          <EndpointBlock 
            method="GET" 
            path="/api/v1/videos" 
            desc="List all videos generated by your account."
          >
             <Table>
              <Row name="page" type="number" required={false} desc="Page number for pagination. Default: 1" />
              <Row name="limit" type="number" required={false} desc="Number of results per page. Default: 20, Max: 100" />
              <Row name="status" type="string" required={false} desc="Filter by status ('processing', 'completed', 'failed')" />
            </Table>
          </EndpointBlock>

          {/* DELETE /video/{id} */}
          <EndpointBlock 
            method="DELETE" 
            path="/api/v1/video/{id}" 
            desc="Delete a generated video."
          >
             <Table>
              <Row name="id" type="string" required={true} desc="Unique video ID to delete." />
            </Table>
          </EndpointBlock>
        </section>

        {/* 5. Code Examples */}
        <section id="code-examples" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Code Examples</h2>
          
          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl">
            {/* Tabs */}
            <div className="flex border-b border-slate-700">
              {['cURL', 'Python', 'Node.js'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang.toLowerCase().replace('.', ''))}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === lang.toLowerCase().replace('.', '') 
                    ? 'bg-slate-800 text-white border-b-2 border-fuchsia-500' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              {activeTab === 'curl' && (
                <pre className="text-emerald-400 font-mono text-sm leading-relaxed">
{`curl -X POST https://api.candexai.com/v1/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A futuristic city at sunset with flying cars",
    "duration": "10s",
    "resolution": "1080p",
    "style": "cinematic"
  }'`}
                </pre>
              )}
              {activeTab === 'python' && (
                <pre className="text-blue-400 font-mono text-sm leading-relaxed">
{`import requests

url = "https://api.candexai.com/v1/generate"
headers = {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
}
data = {
    "prompt": "A futuristic city at sunset with flying cars",
    "duration": "10s",
    "resolution": "1080p"
}

response = requests.post(url, json=data, headers=headers)
print(response.json())`}
                </pre>
              )}
              {activeTab === 'nodejs' && (
                <pre className="text-yellow-400 font-mono text-sm leading-relaxed">
{`const axios = require('axios');

const generateVideo = async () => {
  try {
    const response = await axios.post('https://api.candexai.com/v1/generate', {
      prompt: "A futuristic city at sunset with flying cars",
      duration: "10s",
      resolution: "1080p"
    }, {
      headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

generateVideo();`}
                </pre>
              )}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Example Response</h3>
            <CodeBlock 
              language="json"
              code={`{
  "video_id": "vid_abc123def456",
  "status": "processing",
  "prompt": "A futuristic city at sunset with flying cars",
  "duration": "10s",
  "resolution": "1080p",
  "style": "cinematic",
  "estimated_time_seconds": 45,
  "created_at": "2025-01-15T10:30:00Z",
  "credits_used": 5
}`} 
            />
          </div>
        </section>

        {/* 6. Rate Limits & Pricing */}
        <section id="rate-limits" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Rate Limits & Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="font-bold text-slate-900">Free Tier</h3>
              <p className="text-3xl font-extrabold text-fuchsia-600 my-2">10<span className="text-base font-normal text-slate-500">/day</span></p>
              <p className="text-sm text-slate-500">API requests per day</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-xl border border-indigo-100">
              <h3 className="font-bold text-slate-900">Pro Tier</h3>
              <p className="text-3xl font-extrabold text-indigo-600 my-2">100<span className="text-base font-normal text-slate-500">/day</span></p>
              <p className="text-sm text-slate-500">API requests per day</p>
            </div>
            <div className="p-6 bg-slate-900 rounded-xl border border-slate-800 text-white">
              <h3 className="font-bold">Enterprise</h3>
              <p className="text-3xl font-extrabold text-fuchsia-400 my-2">Custom</p>
              <p className="text-sm text-slate-400">Unlimited requests</p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-yellow-500">🪙</span> Credit System
            </h3>
            <p className="text-slate-600 mb-4">Each video generation consumes credits based on duration and resolution:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <div className="font-semibold text-slate-900">5s @ 720p</div>
                <div className="text-sm text-fuchsia-600 font-bold">1 Credit</div>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <div className="font-semibold text-slate-900">10s @ 1080p</div>
                <div className="text-sm text-fuchsia-600 font-bold">5 Credits</div>
              </div>
              <div className="p-3 bg-slate-50 rounded border border-slate-100">
                <div className="font-semibold text-slate-900">10s @ 4K</div>
                <div className="text-sm text-fuchsia-600 font-bold">15 Credits</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Error Codes */}
        <section id="errors" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Error Codes</h2>
          <div className="overflow-hidden border border-slate-200 rounded-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4">Code</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <ErrorRow code="400" status="Bad Request" desc="Invalid parameters or malformed request" />
                <ErrorRow code="401" status="Unauthorized" desc="Invalid or missing API key" />
                <ErrorRow code="403" status="Forbidden" desc="Insufficient permissions or quota exceeded" />
                <ErrorRow code="404" status="Not Found" desc="Video ID not found" />
                <ErrorRow code="429" status="Too Many Requests" desc="Rate limit exceeded" />
                <ErrorRow code="500" status="Internal Server Error" desc="Server error, please try again" />
              </tbody>
            </table>
          </div>
        </section>

        {/* 8. Webhooks */}
        <section id="webhooks" className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Webhooks</h2>
          <p className="text-slate-600 mb-4">
            Receive real-time notifications when videos are ready. Configure webhook URLs in your dashboard to receive POST requests when generation completes:
          </p>
          <CodeBlock 
            language="json"
            code={`{
  "event": "video.completed",
  "video_id": "vid_abc123def456",
  "status": "completed",
  "video_url": "https://cdn.candexai.com/videos/vid_abc123def456.mp4",
  "thumbnail_url": "https://cdn.candexai.com/thumbnails/vid_abc123def456.jpg",
  "duration": "10s",
  "resolution": "1080p",
  "completed_at": "2025-01-15T10:31:25Z"
}`} 
          />
        </section>

        {/* 9. Best Practices */}
        <section id="best-practices" className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Best Practices</h2>
          <ul className="space-y-4">
            <PracticeItem num="1" title="Write Descriptive Prompts" desc="Include details about lighting, camera angles, movement, and atmosphere for better results." />
            <PracticeItem num="2" title="Handle Rate Limits Gracefully" desc="Implement exponential backoff and respect 429 responses." />
            <PracticeItem num="3" title="Use Webhooks for Efficiency" desc="Instead of polling, configure webhooks to receive completion notifications." />
            <PracticeItem num="4" title="Cache Generated Videos" desc="Store video URLs to avoid regenerating identical content." />
            <PracticeItem num="5" title="Monitor Credit Usage" desc="Track your credit consumption to avoid unexpected service interruptions." />
          </ul>
        </section>

      </main>
    </div>
  );
};

// --- Sub Components ---

const NavLink = ({ onClick, label }) => (
  <button 
    onClick={onClick} 
    className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-fuchsia-600 hover:bg-fuchsia-50 rounded-lg transition-colors"
  >
    {label}
  </button>
);

const StepCard = ({ number, title, desc }) => (
  <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
    <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold mb-3">
      {number}
    </div>
    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

const CodeBlock = ({ code, language }) => (
  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
    <pre className="text-slate-300 font-mono text-sm">{code}</pre>
  </div>
);

const EndpointBlock = ({ method, path, desc, children }) => {
  const colors = {
    POST: "bg-emerald-100 text-emerald-700 border-emerald-200",
    GET: "bg-blue-100 text-blue-700 border-blue-200",
    DELETE: "bg-red-100 text-red-700 border-red-200"
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <div className="bg-slate-50 p-4 border-b border-slate-200 flex flex-col md:flex-row md:items-center gap-3">
        <span className={`px-3 py-1 rounded font-bold text-xs border ${colors[method]}`}>{method}</span>
        <code className="text-slate-700 font-mono text-sm">{path}</code>
      </div>
      <div className="p-6">
        <p className="text-slate-600 mb-6">{desc}</p>
        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Parameters</h4>
        {children}
      </div>
    </div>
  );
};

const Table = ({ children }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-left text-sm">
      <thead className="border-b border-slate-100 text-slate-500">
        <tr>
          <th className="py-2 pr-4 font-medium">Name</th>
          <th className="py-2 px-4 font-medium">Type</th>
          <th className="py-2 px-4 font-medium">Required</th>
          <th className="py-2 pl-4 font-medium">Description</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-50">
        {children}
      </tbody>
    </table>
  </div>
);

const Row = ({ name, type, required, desc }) => (
  <tr className="group hover:bg-slate-50">
    <td className="py-3 pr-4 font-mono text-fuchsia-600 font-medium">{name}</td>
    <td className="py-3 px-4 text-slate-500 font-mono text-xs">{type}</td>
    <td className="py-3 px-4">
      {required ? (
        <span className="text-red-600 text-xs font-bold bg-red-50 px-2 py-0.5 rounded">Required</span>
      ) : (
        <span className="text-slate-400 text-xs bg-slate-100 px-2 py-0.5 rounded">Optional</span>
      )}
    </td>
    <td className="py-3 pl-4 text-slate-600">{desc}</td>
  </tr>
);

const ErrorRow = ({ code, status, desc }) => (
  <tr className="hover:bg-slate-50">
    <td className="p-4 font-mono text-slate-900 font-bold">{code}</td>
    <td className="p-4 text-slate-700 font-medium">{status}</td>
    <td className="p-4 text-slate-600">{desc}</td>
  </tr>
);

const PracticeItem = ({ num, title, desc }) => (
  <li className="flex gap-4 items-start">
    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center text-xs font-bold mt-0.5">
      {num}
    </span>
    <div>
      <h4 className="font-bold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  </li>
);

// Icon
const AlertIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

export default Docs;