export default function ColorPreview() {
  const palettes = [
    {
      name: "Warm Terracotta & Cream",
      description: "Rustic farmhouse, warm and inviting",
      primary: "#C85A3C",
      primaryDark: "#B04E2F",
      secondary: "#F5E6D3",
      accent: "#8B4513",
      text: "#4A3728"
    },
    {
      name: "Dusty Rose & Sage",
      description: "Vintage brocante, gentle and homey",
      primary: "#C9968B",
      primaryDark: "#B87E72",
      secondary: "#F4EFE9",
      accent: "#8B9B8E",
      text: "#5C4B43"
    },
    {
      name: "Warm Brown & Amber",
      description: "Natural countryside, earthy and grounded",
      primary: "#A68A5C",
      primaryDark: "#8B6F47",
      secondary: "#FAF4E8",
      accent: "#D4A056",
      text: "#4D3E2C"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Kleurpaletten voor De Siterhof
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Kies het palet dat het beste past bij de gezellige, brocante sfeer
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {palettes.map((palette, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Color Swatches */}
              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {index + 1}. {palette.name}
                </h2>
                <p className="text-gray-600 mb-4">{palette.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-16 h-16 rounded-lg shadow-md" 
                      style={{ backgroundColor: palette.primary }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Primary</p>
                      <p className="text-xs text-gray-500">{palette.primary}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-16 h-16 rounded-lg shadow-md" 
                      style={{ backgroundColor: palette.primaryDark }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Primary Dark</p>
                      <p className="text-xs text-gray-500">{palette.primaryDark}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-16 h-16 rounded-lg shadow-md border border-gray-200" 
                      style={{ backgroundColor: palette.secondary }}
                    />
                    <div>
                      <p className="font-semibold text-sm">Background</p>
                      <p className="text-xs text-gray-500">{palette.secondary}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Example Section */}
              <div style={{ backgroundColor: palette.secondary }} className="p-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4" style={{ color: palette.text }}>
                    Kinderfeestjes
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Mooi of slecht weer, een kinderfeestje is altijd gezellig op de Siterhof.
                  </p>
                  <button 
                    className="w-full px-4 py-3 text-white rounded-lg font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: palette.primary }}
                  >
                    Meer informatie
                  </button>
                </div>

                <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="w-12 h-12 rounded-full"
                      style={{ backgroundColor: palette.primary, opacity: 0.2 }}
                    />
                    <h4 className="font-bold" style={{ color: palette.text }}>Carrie</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Ik geef met veel enthousiasme creatieve workshops...
                  </p>
                </div>
              </div>

              {/* Navigation Example */}
              <div className="bg-white border-t border-gray-200 p-4">
                <div className="flex gap-2 justify-center flex-wrap">
                  <span 
                    className="px-4 py-2 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: palette.primary }}
                  >
                    Workshops
                  </span>
                  <span className="px-4 py-2 rounded-lg text-sm text-gray-600 border border-gray-200">
                    Feestjes
                  </span>
                  <span className="px-4 py-2 rounded-lg text-sm text-gray-600 border border-gray-200">
                    Contact
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Bekijk de voorbeelden en kies welk palet het beste past bij De Siterhof
          </p>
        </div>
      </div>
    </div>
  );
}
