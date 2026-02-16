import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

import siterhofImage from '@/assets/6d3baf1e9f11b0d35ff065ff2762d6f43eaa0ec3.png';
import carrieImage from '@/assets/745f36087ece507a0007262e4e434b5a7ab20b18.png';
import kinderfeestje1 from '@/assets/kinderfeestjes/20230114_124351_resized_4.jpg';
import kinderfeestje2 from '@/assets/kinderfeestjes/IMG_20190324_154948_resized_2.jpg';
import kinderfeestje3 from '@/assets/kinderfeestjes/IMG_20190719_153103_resized.jpg';
import kinderfeestje4 from '@/assets/kinderfeestjes/IMG_20200704_103035_resized_1.jpg';
import creatie1 from '@/assets/kinderworkshops/creaties/20230430_190523-scaled.jpg';
import creatie2 from '@/assets/kinderworkshops/creaties/IMG_20200229_122745_resized.jpg';
import creatie3 from '@/assets/kinderworkshops/creaties/Pakjesboot-Sinterklaas.jpg';
import creatie4 from '@/assets/kinderworkshops/creaties/rudolph.jpg';
import zomervakantie1 from '@/assets/zomervakantie/20230719_141703_resized.jpg';
import zomervakantie2 from '@/assets/zomervakantie/20230719_151342_resized.jpg';
import zomervakantie3 from '@/assets/zomervakantie/20230719_161653_resized.jpg';
import zomervakantie4 from '@/assets/zomervakantie/20230719_161908_resized.jpg';
import zomervakantie5 from '@/assets/zomervakantie/IMG_20180718_153040_resized.jpg';

import teenImage1 from '@/assets/959e6d2976b059b7982aa8a7898dea503c312ec4.png';
import teenImage2 from '@/assets/acdeac8c21a3e492d22e4678bc103a7f6bd1a083.png';
import teenImage3 from '@/assets/28e6ecf978ce332efa77faa849f8d44405cf6ad4.png';
import teenImage4 from '@/assets/99bd3955d36ab88561e0d36dbe678b24e422d120.png';
import heroBackground from '@/assets/26496142eb08b4302f1c4f974565f899b474aba9.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Close mobile menu on any link click
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // SEO: Update meta tags based on active section
  useEffect(() => {
    const seoMetadata: Record<string, { title: string; description: string }> = {
      home: {
        title: 'De Siterhof | Kinderfeestjes & Kinderworkshops Hillensberg',
        description:
          'De Siterhof biedt creatieve kinderfeestjes, kinderworkshops en tienerfeestjes in Hillensberg (Selfkant). Kwaliteitsvol plezier voor kinderen!',
      },
      kinderfeestjes: {
        title: 'Kinderfeestjes De Siterhof | Creatieve Workshops voor Kinderen',
        description:
          'Organiseer het perfecte kinderfeestje bij De Siterhof. Creatieve workshops, veel plezier en trots naar huis. Hele jaar door beschikbaar.',
      },
      kinderworkshops: {
        title: 'Kinderworkshops De Siterhof | Thema Creatieve Workshops',
        description:
          'Maandelijkse thema-workshops voor kinderen (6+). Pasen, Moederdag, Sinterklaas, Kerst en zomervakantieprogramma. € 16,50-€ 20,00 per kind.',
      },
      tienerfeestjes: {
        title: 'Tienerfeestjes De Siterhof | Workshops voor Tieners',
        description:
          'Ook tieners zijn welkom bij De Siterhof! Creatieve feestjes en workshops voor jongeren. Prijzen vanaf €16,50 per persoon.',
      },
      over: {
        title: 'Over De Siterhof | Creatieve Boerderij Hillensberg',
        description:
          'Leer De Siterhof kennen. Een sfeervolle locatie in een voormalige carréboerderij met creatieve workshops met natuurlijke materialen.',
      },
    };

    const metadata = seoMetadata[activeSection] || seoMetadata.home;
    document.title = metadata.title;

    // Update or create meta description
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);

    // Update Open Graph tags for social sharing
    let ogTitle = document.querySelector("meta[property='og:title']");
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', metadata.title);

    let ogDescription = document.querySelector("meta[property='og:description']");
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', metadata.description);
  }, [activeSection]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'kinderfeestjes', 'kinderworkshops', 'tienerfeestjes', 'over'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const targetId = window.location.hash.replace('#', '');
      if (targetId) {
        setActiveSection(targetId);
      }
    };

    if (window.location.hash) {
      setTimeout(handleHashChange, 0);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { id: 'kinderfeestjes', label: 'Kinderfeestjes' },
    { id: 'kinderworkshops', label: 'Kinderworkshops' },
    { id: 'tienerfeestjes', label: 'Tienerfeestjes' },
    { id: 'over', label: 'Over' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={closeMobileMenu}
              className="text-2xl font-bold transition-colors hover:opacity-80 cursor-pointer text-brand-primary"
            >
              De Siterhof
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMobileMenu}
                  className={`px-3 py-2 transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'border-b-2 border-brand-primary text-brand-primary'
                      : 'text-gray-700 hover:text-brand-primary'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="px-4 py-2 text-white rounded-md transition-colors hover:bg-brand-hover cursor-pointer bg-brand-primary"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav id="mobile-nav" className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMobileMenu}
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'bg-brand-light text-brand-primary'
                      : 'text-gray-700 hover:bg-brand-light hover:text-brand-primary'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="block w-full text-left px-3 py-2 text-white rounded-md transition-colors cursor-pointer hover:opacity-90 bg-brand-primary"
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.5)), url(${heroBackground})`,
          minHeight: '600px',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">De Siterhof</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              ...een boerderij waar je terecht kunt voor creatieve kinderworkshops
            </p>
            <a
              href="mailto:info@siterhof.com"
              className="inline-block px-8 py-3 text-white rounded-lg transition-colors text-lg shadow-lg bg-brand-primary hover:bg-brand-hover"
            >
              Neem nu contact op
            </a>
          </div>
        </div>
      </section>

      {/* Kinderfeestjes Section */}
      <section id="kinderfeestjes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kinderfeestjes</h2>
            <p className="text-xl text-brand-primary">...met een leuke plek voor kinderpicknicks</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Kinderfeestjes het hele jaar door!
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Mooi of slecht weer, een kinderfeestje is altijd gezellig op de Siterhof. In een
                  van de schuren op de boerderij is de workshopruimte ingericht en gaan de kinderen
                  creatief aan de slag.
                </p>
                <p>Halverwege is er een pauze. Iedereen krijgt dan van ons wat te drinken.</p>
                <p>
                  Er kan zelf iets lekkers meegenomen worden. Bij mooi weer kunnen de kinderen in de
                  tuin spelen.
                </p>
                <div className="p-6 rounded-lg mt-6 bg-brand-light">
                  <p className="font-semibold text-gray-900 mb-2">Praktische informatie:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Duur: ongeveer 2,5 uur</li>
                    <li>• Minimaal 6 kinderen</li>
                    <li>• Minimumleeftijd: 6 jaar</li>
                    <li>• Prijs: vanaf € 16,50 per kind</li>
                  </ul>
                </div>
                <p className="font-semibold text-brand-primary">
                  Op deze site staan niet alle workshops. Neem contact met mij op via het
                  contactformulier en ik stuur je foto's van de workshops waaruit gekozen kan
                  worden!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src={kinderfeestje1}
                alt="Kinderfeestje"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={kinderfeestje2}
                alt="Creatieve workshop"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={kinderfeestje3}
                alt="Kinderen spelen in de tuin"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={kinderfeestje4}
                alt="Boerderij"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kinderworkshops Section */}
      <section id="kinderworkshops" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kinderworkshops</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src={creatie1}
                alt="Workshop voorbeeld 1"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={creatie2}
                alt="Workshop voorbeeld 2"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={creatie3}
                alt="Workshop voorbeeld 3"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={creatie4}
                alt="Workshop voorbeeld 4"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Zomer of winter, lente of herfst. De Siterhof puilt uit van ideeën om iets
                bijzonders te maken. Iedere maand is er een thema-workshop.
              </p>
              <p>
                Ons doel is dat iedereen zo veel mogelijk plezier aan de workshop beleefd en met een
                trots en tevreden gevoel naar huis gaat. In de pauze krijgen de kinderen wat
                lekkers.
              </p>
              <p>
                Naast kinderfeestjes geven we ook nog themaworkshops voor de kinderen. Via mail
                sturen we een beschrijving met foto van de themaworkshops (Pasen, Moederdag,
                Sinterklaas en Kerst). Wil je hiervan op de hoogte blijven meld je dan aan in ons
                mailbestand.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="font-semibold text-gray-900 mb-2">Let op:</p>
                <p className="text-gray-700">
                  Dit zijn foto's van voorgaande workshops. Vraag per mail naar de actuele foto's.
                </p>
                <p className="mt-2 text-gray-700">
                  De minimumleeftijd van deze workshops is 6 jaar.
                </p>
              </div>
            </div>
          </div>

          {/* Jaaroverzicht - Annual Schedule */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 mt-6 text-center">
              Jaaroverzicht Kinderworkshops 🗓️
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-brand-light">
                    <td className="border px-4 py-3 text-left font-semibold text-gray-900 border-brand-primary">
                      Maand
                    </td>
                    <td className="border px-4 py-3 text-left font-semibold text-gray-900 border-brand-primary">
                      Thema
                    </td>
                    <td className="border px-4 py-3 text-left font-semibold text-gray-900 border-brand-primary">
                      Data
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Januari</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Februari</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Maart</td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-brand-primary">
                      Pasen
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      woensdag 18, zaterdag 21
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">April</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Mei</td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-brand-primary">
                      Moederdag
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      vrijdag 1, woensdag 6
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Juni</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-brand-light">
                    <td
                      className="border px-4 py-3 font-semibold text-gray-900 border-brand-primary"
                      colSpan={3}
                    >
                      In de zomervakantie, van 13 juli tot 24 augustus, is er elke woensdagmiddag
                      een speciaal programma voor kinderen. Het programma bestaat uit een workshop,
                      picknick en spelletjes spelen. Ook kunnen er in juli en augustus
                      kinderfeestjes gevierd worden.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">September</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Oktober</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">November</td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-brand-primary">
                      Sinterklaas
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      woensdag 4, zaterdag 7
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">December</td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-brand-primary">
                      Kerst
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">
                      woensdag 9, zaterdag 12
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4 text-center text-gray-700">
              <p>
                De kinderworkshops op <strong>woensdag</strong> zijn van{' '}
                <strong>14:00 tot 16:00 uur</strong>. Op <strong>vrijdag</strong> kunnen de kinderen
                genieten van een workshop van <strong>15:00 tot 17:00 uur</strong>.
              </p>
              <p className="font-semibold text-lg text-brand-primary">
                Voor € 15,00 per kind kan er al een schitterend knutselwerkje gemaakt worden bij de
                Siterhof!
              </p>
              <p className="text-sm">
                Zoals altijd wordt er nog een aparte mail met foto gestuurd. Wil je dit ook
                ontvangen, stuur ons even je mailadres naar{' '}
                <a href="mailto:info@siterhof.com" className="hover:underline text-brand-primary">
                  info@siterhof.com
                </a>
              </p>
            </div>
          </div>

          {/* Zomervakantieprogramma */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Zomervakantieprogramma ☀️
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  In de zomervakantie hebben we elke woensdagmiddag een speciaal programma voor
                  kinderen. De kinderen kunnen dan bij ons terecht voor een gezellige middag.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold text-brand-primary">Aanvang: 12:30 uur</p>
                  <p>We beginnen met een gezellige picknick in de tuin!</p>
                  <p>
                    Daarna starten we met de workshop. In de pauze genieten we van iets lekkers en
                    iets fris te drinken en spelen we in de tuin en zijn er allerlei spelletjes te
                    spelen.
                  </p>
                  <p className="font-semibold text-brand-primary">Einde: 16:30 uur</p>
                  <p>
                    De kinderen kunnen kiezen uit verschillende workshops, vraag naar de
                    mogelijkheden.
                  </p>
                </div>
              </div>
              <div>
                <ImageWithFallback
                  src={zomervakantie1}
                  alt="Zomervakantie picknick"
                  className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                />
                <div className="text-white p-6 rounded-lg text-center bg-brand-primary">
                  <p className="text-xl font-bold mb-2">€ 20,00 per kind</p>
                  <p className="text-sm">
                    Aanmelden voor deze gezellige middag kan alleen via onze site.
                  </p>
                </div>
              </div>
            </div>

            {/* Photo gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <ImageWithFallback
                src={zomervakantie2}
                alt="Zomervakantie foto 1"
                className="w-full aspect-video object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={zomervakantie3}
                alt="Zomervakantie foto 2"
                className="w-full aspect-video object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={zomervakantie4}
                alt="Zomervakantie foto 3"
                className="w-full aspect-video object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src={zomervakantie5}
                alt="Zomervakantie foto 4"
                className="w-full aspect-video object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tienerfeestjes Section */}
      <section id="tienerfeestjes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tienerfeestjes</h2>
          </div>

          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-xl text-gray-700 mb-6">
                Ook de tieners zijn uiteraard welkom. De prijzen zijn vanaf € 16,50 per persoon.
                Vraag naar de mogelijkheden.
              </p>
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-white rounded-lg transition-colors cursor-pointer bg-brand-primary hover:bg-brand-hover"
              >
                Neem contact op
              </a>
            </div>

            {/* Workshop examples gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <div>
                <img
                  src={teenImage4}
                  alt="Decoratieve vogelhuisjes workshop"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={teenImage1}
                  alt="Droomvanger workshop"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={teenImage2}
                  alt="Sleutelhangers maken"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <img
                  src={teenImage3}
                  alt="Creatieve knutselwerkjes"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Over Section */}
      <section id="over" className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Over De Siterhof</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={carrieImage}
                    alt="Carrie"
                    className="w-20 h-20 rounded-full object-cover ring-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">Carrie</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ik ben Carrie en ik geef met veel enthousiasme creatieve workshops. Mijn doel is
                  dat iedereen van groot tot klein een gezellige middag/avond heeft en trots naar
                  huis gaat met zijn eigen gemaakte creatie!
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Over de Siterhof</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In het landelijke, heuvelachtige gebied ten zuiden van Sittard vind je de
                    Siterhof. Een sfeervolle locatie in de voormalige schuren van een oude
                    carréboerderij net over de Duitse grens in het kleine dorpje Hillensberg, waar
                    een grote verscheidenheid aan creatieve workshops wordt gegeven.
                  </p>
                  <p>
                    Ook organiseren wij creatieve workshops voor kinderen en kinderfeestjes. Bij
                    alle creatieve workshops ligt de nadruk op het werken met natuurlijke
                    materialen.
                  </p>
                  <p className="font-semibold pt-2 text-brand-primary">
                    Kom gerust eens een keer langs voor een kopje koffie!
                  </p>
                </div>
              </div>

              <div
                className="border-l-4 p-5 rounded-lg shadow-md"
                style={{ backgroundColor: '#FEF3E2', borderColor: '#D97706' }}
              >
                <p className="font-semibold flex items-center gap-2" style={{ color: '#92400E' }}>
                  <span className="text-2xl">⚠️</span>
                  <span>Er kan bij ons helaas niet gepind worden!</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <ImageWithFallback
                  src={siterhofImage}
                  alt="De Siterhof boerderij"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-brand-light">
                    <MapPin className="text-brand-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Locatie</h3>
                </div>
                <address className="text-gray-600 space-y-2 leading-relaxed not-italic">
                  <p className="font-semibold text-gray-900 text-lg">De Siterhof</p>
                  <a
                    href="https://www.google.com/maps/search/Bergstrasse+27,+52538+Hillensberg+Selfkant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline transition-colors text-brand-primary"
                  >
                    <p>Bergstrasse 27</p>
                    <p>52538 Hillensberg (Selfkant)</p>
                  </a>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-brand-primary">
                      Net over de Duitse grens
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-xl text-gray-600">Neem contact met ons op voor meer informatie</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-lg shadow-lg text-center bg-brand-light">
              <Mail className="mx-auto mb-4 text-brand-primary" size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stuur ons een e-mail</h3>
              <a
                href="mailto:info@siterhof.com"
                className="inline-block px-8 py-3 text-white rounded-lg transition-colors text-lg shadow-lg bg-brand-primary hover:bg-brand-hover"
              >
                Neem nu contact op
              </a>
              <p className="mt-6 text-gray-700">
                Volg De Siterhof natuurlijk ook op{' '}
                <a
                  href="https://www.facebook.com/DeSiterhof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-colors text-brand-primary"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">Copyright De Siterhof</p>
        </div>
      </footer>
    </div>
  );
}
