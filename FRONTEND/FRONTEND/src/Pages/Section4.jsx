import React from 'react'
const services = [
  { title: 'S2G', description: 'Startup 2 Government is a unique market access initiative...', company: 'StartupTN' },
  { title: 'Brand Labs', description: 'Educating aspiring entrepreneurs on branding strategies...', company: 'StartupTN' },
  { title: 'BeyondTN', description: 'Establishing Global Coordination Centres...', company: 'StartupTN' },
  { title: 'Launch Pad', description: 'A platform designed to help Startups gain...', company: 'StartupTN' },
];
function Section4() {
  return (
   
        <div>
        <div className="p-8">
          <h2 className="text-xl font-semibold mb-4">Market Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="font-semibold text-blue-400">{service.company}</p>
                <p className="mt-2">{service.description}</p>
                <div className="mt-4">
                  <button className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition duration-300">
                    <span className="text-white text-lg">{'→'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
    
        </div>
      )
    }
    
export default Section4;