import React from 'react';
import { Mail } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="mt-8 flex items-center justify-center space-x-2 text-gray-300">
      <Mail className="w-5 h-5" />
      <a 
        href="mailto:info@redrumreverse.com" 
        className="hover:text-white transition-colors"
      >
        info@redrumreverse.com
      </a>
    </div>
  );
}