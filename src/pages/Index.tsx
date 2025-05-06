import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
const Index = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lawyer to-client py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
                LEXORA LEGAL
              </h1>
              <p className="text-white/90 text-xl mb-8 max-w-lg font-serif">
                Law, Explained. Rights, Defended.
              </p>
              <p className="text-white/90 text-lg mb-8 max-w-lg">
                LEXORA LEGAL connects clients with skilled lawyers for personalized legal assistance. Post your case and get expert help tailored to your needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-lawyer hover:bg-gray-100">
                    Find a Lawyer
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-slate-800">
                    Register as a Lawyer
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white p-6">
                <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Legal professionals" className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Why Choose LEXORA LEGAL</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our platform offers unique features designed to make legal services accessible and efficient.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-lawyer-light/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lawyer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Direct Communication</h3>
                <p className="text-gray-600 text-center">
                  Connect directly with lawyers through our secure messaging system to discuss your case details privately.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-lawyer-light/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lawyer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Case Posting</h3>
                <p className="text-gray-600 text-center">
                  Post your legal needs and receive responses from qualified lawyers interested in your case.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-lawyer-light/10 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lawyer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">AI Legal Assistant</h3>
                <p className="text-gray-600 text-center">
                  Lawyers can access our AI assistant for help with Bhartiya Naya Samitha and other legal research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Simple steps to get started with LEXORA LEGAL</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-lawyer w-16 h-16 flex items-center justify-center mb-4 mx-auto text-white text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Register as a client or lawyer with your details and create your profile.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-lawyer w-16 h-16 flex items-center justify-center mb-4 mx-auto text-white text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Post or Browse Cases</h3>
              <p className="text-gray-600">
                Clients post their legal needs, while lawyers browse for cases they can help with.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-lawyer w-16 h-16 flex items-center justify-center mb-4 mx-auto text-white text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Connect and Collaborate</h3>
              <p className="text-gray-600">
                Once matched, communicate directly to discuss details and start working together.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/register">
              <Button size="lg" className="bg-lawyer hover:bg-lawyer-light">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from lawyers and clients who have used our platform</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Rajesh Sharma</h4>
                    <p className="text-gray-600 text-sm">Client</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I needed urgent legal advice regarding a property dispute. Within hours of posting my case, I connected with a knowledgeable lawyer who guided me through the entire process."
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Priya Verma</h4>
                    <p className="text-gray-600 text-sm">Lawyer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The AI assistant has been incredibly helpful in my legal practice. It helps me quickly reference sections from the Bhartiya Nyaya Sanhita and other relevant laws, saving me hours of research time."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-lawyer text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our growing community of legal professionals and clients today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-lawyer hover:bg-gray-100">
                Register Now
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10 text-gray-900">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;
