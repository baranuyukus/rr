import React from 'react';
import { Clock, ShoppingBag, Truck } from 'lucide-react';
import { Logo } from './components/Logo';
import { InfoCard } from './components/InfoCard';
import { ContactInfo } from './components/ContactInfo';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center">
      <div className="w-full max-w-4xl p-6 text-center">
        <Logo />

        {/* Main Content */}
        <div className="space-y-8">
          <div className="bg-gray-900 text-white p-8 rounded-xl shadow-xl">
            <h1 className="text-4xl font-bold mb-6">Website Yapım Aşamasında</h1>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <InfoCard
                icon={ShoppingBag}
                title="Black Friday Drop"
                description="Siparişler bugün hafta içi kargoya verilecektir."
              />
              <InfoCard
                icon={Truck}
                title="Restock Drop"
                description="Kargolar 10 iş günü içinde gönderilecektir."
              />
            </div>

            <div className="mt-12 flex items-center justify-center space-x-2 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>Çok Yakında Sizlerle</span>
            </div>

            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;