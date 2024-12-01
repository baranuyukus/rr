import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <div className="bg-gray-900/90 p-6 rounded-lg backdrop-blur-sm">
      <div className="flex items-center justify-center mb-4">
        <Icon className="w-8 h-8 text-gray-300" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}