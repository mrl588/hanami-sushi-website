import { useEffect, useMemo, useState } from "react";
import { usePageAnimation } from "../hooks/usePageAnimation";
import fishIcon from "../assets/redfishtrans.png";
import tunaImage from "../assets/tuna.jpg";

const menuByType = {
  dinner: [
    {
      title: "Sushi Bar Specials",
      items: [
        {
          name: "Kyushu Aji Sashimi",
          price: "$36",
          description: "Japanese Horse Mackerel with Ginger-Ponzu Dipping Sauce",
          image: fishIcon,
        },
        {
          name: "Salmon Sashimi",
          price: "$14",
          description: "Fresh Atlantic salmon, 5 pieces",
          image: fishIcon,
        },
        {
          name: "Tuna Sashimi",
          price: "$16",
          description: "Premium bluefin tuna, 5 pieces",
          image: tunaImage,
        },
        {
          name: "Yellowtail Sashimi",
          price: "$15",
          description: "Fresh hamachi, 5 pieces",
          image: fishIcon,
        },
        {
          name: "Scallop Sashimi",
          price: "$17",
          description: "Fresh hotate with yuzu",
          image: fishIcon,
        },
        {
          name: "Sweet Shrimp Sashimi",
          price: "$24",
          description: "Fresh amaebi, 5 pieces",
          image: fishIcon,
        },
        {
          name: "Sea Urchin Sashimi",
          price: "$28",
          description: "Premium uni, 3 pieces",
          image: fishIcon,
        },
        {
          name: "Assorted Sashimi",
          price: "$32",
          description: "Chef's selection of 12 pieces",
          image: fishIcon,
        },
      ],
    },
    {
      title: "A La Carte Special",
      items: [
        {
          name: "2oz Wagyu Teppan Yaki",
          price: "$48",
          description: "served w/ Truffle-Salt & Ponzu Sauce",
          image: fishIcon,
        },
        {
          name: "Chawan Mushi",
          price: "$22",
          description:
            "Steamed Egg Custard w/ Eel, Shrimp, Crabstick, Shiitake & Spinach",
          image: fishIcon,
        },
        {
          name: "Nasu Dengaku",
          price: "$18",
          description: "Aka Miso Glazed Japanese Eggplant",
          image: fishIcon,
        },
        {
          name: "Cold Chawanmushi",
          price: "$22",
          description: "Uni + Crab + Trout Roe",
          image: fishIcon,
        },
        {
          name: "Seasonal Appetizer",
          price: "$16",
          description: "Chef’s rotating small plate",
          image: fishIcon,
        },
      ],
    },
    {
      title: "Special Rolls",
      items: [
        {
          name: "Spicy Tuna Roll",
          price: "$16",
          description: "Fresh tuna with spicy mayo and cucumber",
          image: fishIcon,
        },
        {
          name: "Dragon Roll",
          price: "$18",
          description: "Eel and cucumber topped with avocado",
          image: fishIcon,
        },
        {
          name: "Rainbow Roll",
          price: "$20",
          description: "California roll topped with assorted sashimi",
          image: fishIcon,
        },
        {
          name: "Spider Roll",
          price: "$19",
          description: "Soft shell crab with cucumber and avocado",
          image: fishIcon,
        },
        {
          name: "Tempura Roll",
          price: "$17",
          description: "Crispy tempura shrimp with vegetables",
          image: fishIcon,
        },
      ],
    },
  ],
  lunch: [
    {
      title: "Lunch Specials",
      items: [
        {
          name: "Chirashi Lunch",
          price: "$22",
          description: "Chef’s selection sashimi over sushi rice",
          image: fishIcon,
        },
        {
          name: "Sushi Lunch Set",
          price: "$19",
          description: "Assorted nigiri + roll + miso soup",
          image: fishIcon,
        },
        {
          name: "Sashimi Lunch Set",
          price: "$21",
          description: "Assorted sashimi + rice + miso soup",
          image: fishIcon,
        },
        {
          name: "Salmon Teriyaki",
          price: "$20",
          description: "Grilled salmon, rice, seasonal vegetables",
          image: fishIcon,
        },
      ],
    },
    {
      title: "Bento",
      items: [
        {
          name: "Chicken Katsu Bento",
          price: "$18",
          description: "Cutlet, rice, salad, pickles",
          image: fishIcon,
        },
        {
          name: "Beef Teriyaki Bento",
          price: "$19",
          description: "Grilled beef, rice, vegetables",
          image: fishIcon,
        },
        {
          name: "Shrimp Tempura Bento",
          price: "$19",
          description: "Tempura, rice, salad, sauce",
          image: fishIcon,
        },
        {
          name: "Tofu Bento",
          price: "$17",
          description: "Crispy tofu, rice, vegetables",
          image: fishIcon,
        },
      ],
    },
    {
      title: "Rolls (Lunch)",
      items: [
        {
          name: "California Roll",
          price: "$10",
          description: "Crab, avocado, cucumber",
          image: fishIcon,
        },
        {
          name: "Salmon Avocado Roll",
          price: "$12",
          description: "Salmon and avocado",
          image: fishIcon,
        },
        {
          name: "Spicy Tuna Roll",
          price: "$12",
          description: "Tuna with spicy mayo",
          image: fishIcon,
        },
        {
          name: "Veggie Roll",
          price: "$9",
          description: "Seasonal vegetables",
          image: fishIcon,
        },
      ],
    },
  ],
  beverages: [
    {
      title: "Sake",
      items: [
        {
          name: "Junmai",
          price: "$12",
          description: "Clean, rice-forward profile",
          image: fishIcon,
        },
        {
          name: "Ginjo",
          price: "$14",
          description: "Aromatic, lightly fruity",
          image: fishIcon,
        },
        {
          name: "Daiginjo",
          price: "$16",
          description: "Elegant, refined finish",
          image: fishIcon,
        },
        {
          name: "Nigori",
          price: "$13",
          description: "Cloudy, softly sweet",
          image: fishIcon,
        },
      ],
    },
    {
      title: "Beer & Wine",
      items: [
        {
          name: "Sapporo",
          price: "$7",
          description: "Japanese lager",
          image: fishIcon,
        },
        {
          name: "Asahi",
          price: "$7",
          description: "Dry Japanese lager",
          image: fishIcon,
        },
        {
          name: "House White",
          price: "$10",
          description: "Crisp and refreshing",
          image: fishIcon,
        },
        {
          name: "House Red",
          price: "$10",
          description: "Smooth and balanced",
          image: fishIcon,
        },
      ],
    },
    {
      title: "Non‑Alcoholic",
      items: [
        {
          name: "Green Tea",
          price: "$4",
          description: "Hot or iced",
          image: fishIcon,
        },
        {
          name: "Sparkling Water",
          price: "$5",
          description: "Chilled",
          image: fishIcon,
        },
        {
          name: "Yuzu Soda",
          price: "$6",
          description: "Citrus + sparkle",
          image: fishIcon,
        },
        {
          name: "Ramune",
          price: "$6",
          description: "Classic Japanese soda",
          image: fishIcon,
        },
      ],
    },
  ],
};

export default function Menu() {
  const [activeMenu, setActiveMenu] = useState("dinner");
  const menuSections = useMemo(() => menuByType[activeMenu] ?? [], [activeMenu]);
  const pageRef = usePageAnimation(100, 100);

  const getAllOpen = (sections) =>
    Object.fromEntries((sections ?? []).map((s) => [s.title, true]));

  const [openSections, setOpenSections] = useState(() =>
    getAllOpen(menuByType.dinner)
  );
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    // Whenever a menu tab changes, start with all sections expanded.
    setOpenSections(getAllOpen(menuSections));
    setSelectedItem(null);
  }, [menuSections]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeSidePanel = () => {
    setSelectedItem(null);
  };

  return (
    <section ref={pageRef} className="bg-[#f4eadc] pt-24 relative">
      <div className="mx-auto w-[70%] px-4 py-10">
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <img
            src={fishIcon}
            alt="Hanami fish icon"
            className="page-fade-up h-32 w-auto md:h-40"
          />
          <h1
            className="page-fade-up menu-title-fluid uppercase tracking-[0.4em] text-black"
            style={{ fontFamily: '"Aleo", serif' }}
          >
            Menu
          </h1>
          <div className="page-fade-up flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setActiveMenu("lunch")}
              className={`rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition ${
                activeMenu === "lunch"
                  ? "bg-black hover:bg-black/90"
                  : "bg-[#8A0403] hover:bg-[#6A0302]"
              }`}
            >
              Lunch Menu
            </button>
            <button
              type="button"
              onClick={() => setActiveMenu("dinner")}
              className={`rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition ${
                activeMenu === "dinner"
                  ? "bg-black hover:bg-black/90"
                  : "bg-[#8A0403] hover:bg-[#6A0302]"
              }`}
            >
              Dinner Menu
            </button>
            <button
              type="button"
              onClick={() => setActiveMenu("beverages")}
              className={`rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition ${
                activeMenu === "beverages"
                  ? "bg-black hover:bg-black/90"
                  : "bg-[#8A0403] hover:bg-[#6A0302]"
              }`}
            >
              Beverages
            </button>
          </div>
        </div>

        <div className="space-y-12">
          {menuSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <button
                onClick={() => toggleSection(section.title)}
                className="page-fade-up w-full flex items-center justify-center relative pb-4 border-b border-black/20"
              >
                <h2
                  className="menu-section-title-fluid font-normal text-black"
                  style={{ fontFamily: '"Aleo", serif' }}
                >
                  {section.title}
                </h2>
                <span className="absolute right-0 text-3xl text-black font-light">
                  {openSections[section.title] ? "−" : "+"}
                </span>
              </button>

              {openSections[section.title] && (
                <div className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {section.items.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleItemClick(item)}
                        className="page-fade-up text-left space-y-1 hover:opacity-80 transition-opacity"
                      >
                        <div className="flex items-start justify-between">
                          <h3
                            className="menu-item-name-fluid font-medium"
                            style={{
                              color: "#8A0403",
                              fontFamily:
                                '"Noto Serif JP","Noto Serif",serif',
                            }}
                          >
                            {item.name}
                          </h3>
                        </div>
                        <p
                          className="menu-item-desc-fluid text-black/70 leading-relaxed min-h-[3rem]"
                          style={{
                            fontFamily:
                              '"Noto Serif JP","Noto Serif",serif',
                          }}
                        >
                          <span className="text-black/80">{item.price}</span>
                          <span className="px-2 text-black/40">·</span>
                          <span>{item.description}</span>
                        </p>
                        {index < section.items.length - 1 && (
                          <hr className="mt-6 border-t border-[#8A0403]/5" style={{ borderWidth: '0.1px', opacity: 0.35 }} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Side Panel */}
      {selectedItem && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={closeSidePanel}
          />
          <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-[#f4eadc] z-50 shadow-2xl overflow-y-auto">
            <div className="p-6">
              <button
                onClick={closeSidePanel}
                className="mb-6 text-2xl text-black hover:opacity-70"
              >
                ×
              </button>
              <div className="space-y-6">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover rounded"
                />
                <div>
                  <h3
                    className="menu-panel-title-fluid font-normal mb-2"
                    style={{
                      color: "#8A0403",
                      fontFamily: '"Noto Serif JP","Noto Serif",serif',
                    }}
                  >
                    {selectedItem.name}
                  </h3>
                  <p
                    className="menu-panel-desc-fluid text-black/80 leading-relaxed"
                    style={{
                      fontFamily: '"Noto Serif JP","Noto Serif",serif',
                    }}
                  >
                    <span className="text-black">{selectedItem.price}</span>
                    <span className="px-2 text-black/40">·</span>
                    <span>{selectedItem.description}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
