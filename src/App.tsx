import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ContactForm from './components/ContactForm';
import Tutorial from './components/Tutorial';

function App() {
  const [tutorials, setTutorials] = useState([
    {
      id: 1,
      title: 'Faire vos achats de peinture en ligne',
      completed: false,
      videoUrl: 'https://example.com/tutorial1',
    },
    {
      id: 2,
      title: 'Pour commencer : les points à vérifier',
      completed: false,
      videoUrl: 'https://example.com/tutorial2',
    },
    {
      id: 3,
      title: 'Tutoriels',
      completed: false,
      videoUrl: 'https://example.com/tutorial3',
    },
    {
      id: 4,
      title: 'Nous contacter',
      completed: false,
      videoUrl: 'https://example.com/tutorial4',
    },
  ]);

  const toggleTutorial = (id: number) => {
    setTutorials(
      tutorials.map((tutorial) =>
        tutorial.id === id
          ? { ...tutorial, completed: !tutorial.completed }
          : tutorial
      )
    );
  };

  const ctaButtons = [
    {
      text: 'Faire vos achats de peinture en ligne',
      url: 'https://www.peinturesdeparis.com/',
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      text: 'Pour commencer : les points à vérifier',
      url: 'https://example.com/guide',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      text: 'Tutoriels',
      url: 'https://example.com/faq',
      color: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      text: 'Nous contacter',
      url: 'https://example.com/support',
      color: 'bg-red-600 hover:bg-red-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center py-24 px-4 sm:px-6 lg:px-8 mb-16"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Bienvenue chez PPG IDF
          </h1>
          <p className="mt-6 text-xl text-gray-200">
            Nous avons le plaisir de vous informer de la création de la nouvelle
            société PPG IDF regroupant en Ile de France, les magasins Peintures
            de Paris et les magasins du Comptoir Seigneurie Gauthier situés dans
            les départements du 75, 77, 78, 91, 92, 93, 95 et 60. Pour vous
            accompagner au mieux dans ce changement, vous retrouverez sur ce
            site l’ensemble des éléments importants. N'hésitez pas à nous
            contacter (formulaire en bas à droite de cette page) ou chater avec nous (icône noire en bas à droite de cette page).
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {ctaButtons.map((button, index) => (
            <a
              key={index}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button.color} text-white rounded-lg px-6 py-4 text-center font-medium hover:shadow-lg transition-all flex items-center justify-center gap-2`}
            >
              {button.text}
              <ExternalLink size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Tutorials Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Points à vérifier
            </h2>
            <div className="space-y-4">
              {tutorials.map((tutorial) => (
                <Tutorial
                  key={tutorial.id}
                  title={tutorial.title}
                  completed={tutorial.completed}
                  onToggle={() => toggleTutorial(tutorial.id)}
                  videoUrl={tutorial.videoUrl}
                />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
