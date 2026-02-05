import { useState, useEffect } from "react";
import { Menu, X, Mail, MapPin } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import siterhofImage from "@/assets/6d3baf1e9f11b0d35ff065ff2762d6f43eaa0ec3.png";
import carrieImage from "@/assets/745f36087ece507a0007262e4e434b5a7ab20b18.png";
import teenImage1 from "@/assets/959e6d2976b059b7982aa8a7898dea503c312ec4.png";
import teenImage2 from "@/assets/acdeac8c21a3e492d22e4678bc103a7f6bd1a083.png";
import teenImage3 from "@/assets/28e6ecf978ce332efa77faa849f8d44405cf6ad4.png";
import teenImage4 from "@/assets/99bd3955d36ab88561e0d36dbe678b24e422d120.png";
import teenImage5 from "@/assets/b3a8cd65eee248961357cd95e82063faaef0b0f2.png";
import heroBackground from "@/assets/26496142eb08b4302f1c4f974565f899b474aba9.png";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "kinderfeestjes", "kinderworkshops", "tienerfeestjes", "over"];
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "kinderfeestjes", label: "Kinderfeestjes" },
    { id: "kinderworkshops", label: "Kinderworkshops" },
    { id: "tienerfeestjes", label: "Tienerfeestjes" },
    { id: "over", label: "Over" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button onClick={() => scrollToSection("home")} className="text-2xl font-bold transition-colors" style={{ color: "#C9968B" }}>
              De Siterhof
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 transition-colors ${activeSection === item.id ? "border-b-2" : "text-gray-700"}`}
                  style={activeSection === item.id ? { color: "#C9968B", borderColor: "#C9968B" } : {}}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = "#C9968B";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.currentTarget.style.color = "";
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-white rounded-md transition-colors"
                style={{ backgroundColor: "#C9968B" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B87E72";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C9968B";
                }}
              >
                Contact
              </button>
            </div>

            {/* Mobile menu button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-opacity-20 rounded-md"
                  style={{ "--hover-bg": "#F4EFE9" } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#F4EFE9";
                    e.currentTarget.style.color = "#C9968B";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.color = "";
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-white rounded-md"
                style={{ backgroundColor: "#C9968B" }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.85)), url(${heroBackground})`,
          minHeight: "600px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">De Siterhof</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">...een boerderij waar je terecht kunt voor creatieve kinderworkshops</p>
            <a
              href="mailto:info@siterhof.com"
              className="inline-block px-8 py-3 text-white rounded-lg transition-colors text-lg shadow-lg"
              style={{ backgroundColor: "#C9968B" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#B87E72";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#C9968B";
              }}
            >
              Neem nu contact op
            </a>
          </div>
        </div>
      </section>

      {/* Main content will be added in next steps */}
      <div id="kinderfeestjes" className="h-20"></div>

      {/* Kinderfeestjes Section */}
      <section id="kinderfeestjes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kinderfeestjes</h2>
            <p className="text-xl" style={{ color: "#C9968B" }}>
              ...met een leuke plek voor kinderpicknicks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kinderfeestjes het hele jaar door!</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Mooi of slecht weer, een kinderfeestje is altijd gezellig op de Siterhof. In een van de schuren op de boerderij is de
                  workshopruimte ingericht en gaan de kinderen creatief aan de slag.
                </p>
                <p>Halverwege is er een pauze. Iedereen krijgt dan van ons wat te drinken.</p>
                <p>Er kan zelf iets lekkers meegenomen worden. Bij mooi weer kunnen de kinderen in de tuin spelen.</p>
                <div className="p-6 rounded-lg mt-6" style={{ backgroundColor: "#F4EFE9" }}>
                  <p className="font-semibold text-gray-900 mb-2">Praktische informatie:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Duur: ongeveer 2,5 uur</li>
                    <li>• Minimaal 6 kinderen</li>
                    <li>• Minimumleeftijd: 6 jaar</li>
                    <li>• Prijs: vanaf €16,50 per kind</li>
                  </ul>
                </div>
                <p className="font-semibold" style={{ color: "#C9968B" }}>
                  Op deze site staan niet alle workshops. Neem contact met mij op via het contactformulier en ik stuur je foto's van de
                  workshops waaruit gekozen kan worden!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762912913371-ccc0a5fca0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlydGhkYXklMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MDI4Mjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kinderfeestje"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766932901295-d4185660341b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNyYWZ0cyUyMHdvcmtzaG9wJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcwMzIxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Creatieve workshop"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690843857685-15c9a042d37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG91dGRvb3IlMjBnYXJkZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MDMyMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kinderen spelen in de tuin"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748524291921-711d5a929e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYmFybiUyMHJ1cmFsJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzcwMzIxNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Boerderij"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <div id="kinderworkshops" className="h-20"></div>

      {/* Kinderworkshops Section */}
      <section id="kinderworkshops" className="py-20" style={{ backgroundColor: "#F4EFE9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kinderworkshops</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-4 text-gray-700">
              <p>
                Zomer of winter, lente of herfst. De Siterhof puilt uit van ideeën om iets bijzonders te maken. Iedere maand is er een
                thema-workshop.
              </p>
              <p>
                Ons doel is dat iedereen zo veel mogelijk plezier aan de workshop beleefd en met een trots en tevreden gevoel naar huis
                gaat. In de pauze krijgen de kinderen wat lekkers.
              </p>
              <p>
                Naast kinderfeestjes geven we ook nog themaworkshops voor de kinderen. Via mail sturen we een beschrijving met foto van de
                themaworkshops (Pasen, Moederdag, Sinterklaas en Kerst). Wil je hiervan op de hoogte blijven meld je dan aan in ons
                mailbestand.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="font-semibold text-gray-900 mb-2">Let op:</p>
                <p className="text-gray-700">Dit zijn foto's van voorgaande workshops. Vraag per mail naar de actuele foto's.</p>
                <p className="mt-2 text-gray-700">De minimumleeftijd van deze workshops is 6 jaar.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1766932901295-d4185660341b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNyYWZ0cyUyMHdvcmtzaG9wJTIwY3JlYXRpdmV8ZW58MXx8fHwxNzcwMzIxNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workshop voorbeeld 1"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762912913371-ccc0a5fca0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlydGhkYXklMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc3MDI4Mjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workshop voorbeeld 2"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1690843857685-15c9a042d37b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG91dGRvb3IlMjBnYXJkZW4lMjBwbGF5aW5nfGVufDF8fHx8MTc3MDMyMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workshop voorbeeld 3"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748524291921-711d5a929e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYmFybiUyMHJ1cmFsJTIwY291bnRyeXNpZGV8ZW58MXx8fHwxNzcwMzIxNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workshop voorbeeld 4"
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Jaaroverzicht - Annual Schedule */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jaaroverzicht Kinderworkshops</h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#F4EFE9" }}>
                    <th className="border px-4 py-3 text-left font-semibold text-gray-900" style={{ borderColor: "#C9968B" }}>
                      Maand
                    </th>
                    <th className="border px-4 py-3 text-left font-semibold text-gray-900" style={{ borderColor: "#C9968B" }}>
                      Thema
                    </th>
                    <th className="border px-4 py-3 text-left font-semibold text-gray-900" style={{ borderColor: "#C9968B" }}>
                      Data
                    </th>
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
                    <td className="border border-gray-200 px-4 py-3 font-semibold" style={{ color: "#C9968B" }}>
                      Pasen
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">woensdag 18, zaterdag 21</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">April</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Mei</td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold" style={{ color: "#C9968B" }}>
                      Moederdag
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">vrijdag 1, woensdag 6</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">Juni</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">-</td>
                  </tr>
                  <tr style={{ backgroundColor: "#F4EFE9" }}>
                    <td className="border px-4 py-3 font-semibold text-gray-900" colSpan={3} style={{ borderColor: "#C9968B" }}>
                      In de zomervakantie (13 juli tot 24 augustus) is er elke woensdagmiddag een speciaal programma voor kinderen. Het
                      programma bestaat uit een workshop, picknick en spelletjes spelen. Ook kunnen er in juli en augustus kinderfeestjes
                      gevierd worden.
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
                    <td className="border border-gray-200 px-4 py-3 font-semibold" style={{ color: "#C9968B" }}>
                      Sinterklaas
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">woensdag 4, zaterdag 7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">December</td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold" style={{ color: "#C9968B" }}>
                      Kerst
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-gray-700">woensdag 9, zaterdag 12</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-4 text-center text-gray-700">
              <p>
                De kinderworkshops op <strong>woensdag</strong> zijn van <strong>14:00 tot 16:00 uur</strong>. Op <strong>vrijdag</strong>{" "}
                kunnen de kinderen genieten van een workshop van <strong>15:00 tot 17:00 uur</strong>.
              </p>
              <p className="font-semibold text-lg" style={{ color: "#C9968B" }}>
                Voor €15,00 per kind kan er al een schitterend knutselwerkje gemaakt worden bij de Siterhof!
              </p>
              <p className="text-sm">
                Zoals altijd wordt er nog een aparte mail met foto gestuurd. Wil je dit ook ontvangen, stuur ons even je mailadres naar{" "}
                <a href="mailto:info@siterhof.com" className="hover:underline" style={{ color: "#C9968B" }}>
                  info@siterhof.com
                </a>
              </p>
            </div>
          </div>

          {/* Zomervakantieprogramma */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Zomervakantieprogramma</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-4">
                  In de zomervakantie hebben we elke woensdagmiddag een speciaal programma voor kinderen. De kinderen kunnen dan bij ons
                  terecht voor een gezellige middag.
                </p>
                <div className="space-y-3 text-gray-700">
                  <p className="font-semibold" style={{ color: "#C9968B" }}>
                    Aanvang: 12:30 uur
                  </p>
                  <p>We beginnen met een gezellige picknick in de tuin!</p>
                  <p>
                    Daarna starten we met de workshop. In de pauze genieten we van iets lekkers en iets fris te drinken en spelen we in de
                    tuin en zijn er allerlei spelletjes te spelen.
                  </p>
                  <p className="font-semibold" style={{ color: "#C9968B" }}>
                    Einde: 16:30 uur
                  </p>
                  <p>De kinderen kunnen kiezen uit verschillende workshops, vraag naar de mogelijkheden.</p>
                </div>
              </div>
              <div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1769814153255-195ba5661524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjB2YWNhdGlvbiUyMGtpZHMlMjBwaWNuaWN8ZW58MXx8fHwxNzcwMzIxNTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Zomervakantie picknick"
                  className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                />
                <div className="text-white p-6 rounded-lg text-center" style={{ backgroundColor: "#C9968B" }}>
                  <p className="text-xl font-bold mb-2">€20,00 per kind</p>
                  <p className="text-sm">Aanmelden voor deze gezellige middag kan alleen via onze site.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="tienerfeestjes" className="h-20"></div>

      {/* Tienerfeestjes Section */}
      <section id="tienerfeestjes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tienerfeestjes</h2>
          </div>

          <div className="mb-12">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-xl text-gray-700 mb-6">
                Ook de tieners zijn uiteraard welkom. De prijzen zijn vanaf € 16,50 per persoon. Vraag naar de mogelijkheden.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 text-white rounded-lg transition-colors"
                style={{ backgroundColor: "#C9968B" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B87E72";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C9968B";
                }}
              >
                Neem contact op
              </button>
            </div>

            {/* Workshop examples gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <div className="col-span-2 md:col-span-1">
                <img src={teenImage4} alt="Decoratieve vogelhuisjes workshop" className="w-full h-full object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={teenImage1} alt="Droomvanger workshop" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={teenImage2} alt="Sleutelhangers maken" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <img src={teenImage3} alt="Creatieve knutselwerkjes" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
              <div className="col-span-2">
                <img src={teenImage5} alt="Moederdag kaart workshop" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="over" className="h-20"></div>

      {/* Over Section */}
      <section id="over" className="py-20" style={{ backgroundColor: "#F4EFE9" }}>
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
                    style={{ ringColor: "#F4EFE9" }}
                  />
                  <h3 className="text-2xl font-bold text-gray-900">Carrie</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ik ben Carrie en ik geef met veel enthousiasme creatieve workshops. Mijn doel is dat iedereen van groot tot klein een
                  gezellige middag/avond heeft en trots naar huis gaat met zijn eigen gemaakte creatie!
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Over de Siterhof</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    In het landelijke, heuvelachtige gebied ten zuiden van Sittard vindt u de Siterhof. Een sfeervolle locatie in de
                    voormalige schuren van een oude carréboerderij net over de Duitse grens in het kleine dorpje Hillensberg, waar een grote
                    verscheidenheid aan creatieve workshops wordt gegeven.
                  </p>
                  <p>
                    Ook organiseren wij creatieve workshops voor kinderen en kinderfeestjes. Bij alle creatieve workshops ligt de nadruk op
                    het werken met natuurlijke materialen.
                  </p>
                  <p className="font-semibold pt-2" style={{ color: "#C9968B" }}>
                    Kom gerust eens een keer langs voor een kopje koffie!
                  </p>
                </div>
              </div>

              <div className="border-l-4 p-5 rounded-lg shadow-md" style={{ backgroundColor: "#FEF3E2", borderColor: "#D97706" }}>
                <p className="font-semibold flex items-center gap-2" style={{ color: "#92400E" }}>
                  <span className="text-2xl">⚠️</span>
                  <span>Er kan bij ons helaas niet gepind worden!</span>
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-xl shadow-xl">
                <ImageWithFallback src={siterhofImage} alt="De Siterhof boerderij" className="w-full h-80 object-cover" />
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: "#F4EFE9" }}>
                    <MapPin style={{ color: "#C9968B" }} size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Locatie</h3>
                </div>
                <div className="text-gray-600 space-y-2 leading-relaxed">
                  <p className="font-semibold text-gray-900 text-lg">De Siterhof</p>
                  <p>Bergstrasse 27</p>
                  <p>52538 Hillensberg (Selfkant)</p>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium" style={{ color: "#C9968B" }}>
                      Net over de Duitse grens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact" className="h-20"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-xl text-gray-600">Neem contact met ons op voor meer informatie</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-lg shadow-lg text-center" style={{ backgroundColor: "#F4EFE9" }}>
              <Mail className="mx-auto mb-4" style={{ color: "#C9968B" }} size={48} />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stuur ons een e-mail</h3>
              <a
                href="mailto:info@siterhof.com"
                className="inline-block px-8 py-3 text-white rounded-lg transition-colors text-lg shadow-lg"
                style={{ backgroundColor: "#C9968B" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#B87E72";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#C9968B";
                }}
              >
                Neem nu contact op
              </a>
              <p className="mt-6 text-gray-700">Volg De Siterhof natuurlijk ook op Facebook</p>
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
