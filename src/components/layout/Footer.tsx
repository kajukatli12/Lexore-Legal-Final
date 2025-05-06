
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif font-bold text-xl text-lawyer mb-4">LEXORA LEGAL</h3>
            <p className="text-gray-600 mb-4">
              Law, Explained. Rights, Defended.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Lawyers</h4>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-gray-600 hover:text-lawyer">Join As Lawyer</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-lawyer">How It Works</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-lawyer">Success Stories</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">For Clients</h4>
            <ul className="space-y-2">
              <li><Link to="/register" className="text-gray-600 hover:text-lawyer">Find a Lawyer</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-lawyer">Post a Case</Link></li>
              <li><Link to="/features" className="text-gray-600 hover:text-lawyer">Legal Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-600 hover:text-lawyer">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-lawyer">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-lawyer">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {currentYear} LEXORA LEGAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
