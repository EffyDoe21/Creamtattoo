const toggle = document.getElementById('language-toggle');
const labelText = document.getElementById('label-text');

// Diccionario con traducciones completas
const texts = {
  es: {
    label: "Cambiar a inglés",
    title: "Cream Tatto",
    meta: "Información sobre crema de lanolina",
    intro:
      "La crema de lanolina sirve para hidratar, suavizar y proteger la piel, siendo ideal para tratar pieles secas, irritadas o agrietadas, y para el cuidado de los pezones de las madres que amamantan. También se utiliza en productos cosméticos para el cuidado labial y corporal, y en cremas y bálsamos para aliviar el eritema del pañal en bebés.",
    benefitsTitle: "Beneficios principales de la crema de lanolina:",
    benefitsList: [
      "<strong>Hidratación y retención de humedad:</strong> Atrae y retiene la humedad en la piel, haciéndola efectiva para pieles secas, deshidratadas o agrietadas.",
      "<strong>Suavidad y flexibilidad:</strong> Actúa como emoliente, suavizando la piel, reduciendo la aspereza y dándole un aspecto más terso.",
      "<strong>Protección de la barrera cutánea:</strong> Crea una barrera semioclusiva que ayuda a proteger la piel de las agresiones externas.",
      "<strong>Propiedades anti-irritantes:</strong> Ayuda a calmar la piel sensible e irritada."
    ],
    usesTitle: "Usos comunes en la piel:",
    usesList: [
      "<strong>Cuidado del pezón:</strong> Alivia el dolor y las grietas del pezón durante la lactancia.",
      "<strong>Bebés:</strong> Protege la piel del bebé y previene el eritema del pañal.",
      "<strong>Labios y piel seca:</strong> Ideal para bálsamos labiales, talones y codos resecos.",
      "<strong>Cuidado facial y corporal:</strong> Presente en cremas hidratantes y protectoras.",
      "<strong>Cicatrización:</strong> Facilita la regeneración y cicatrización de heridas leves."
    ],
    originTitle: "Origen de la lanolina",
    originText:
      "La lanolina se extrae de la lana de oveja, de las secreciones sebáceas que protegen su piel del clima.",
    processTitle: "Proceso de extracción:",
    processList: [
      "<strong>Esquila de la oveja:</strong> Se obtiene la lana y la grasa que la recubre.",
      "<strong>Lavado de la lana:</strong> Se disuelve la grasa con agua caliente y jabón.",
      "<strong>Separación de la lanolina:</strong> Se logra por centrifugación o solventes.",
      "<strong>Purificación:</strong> Se blanquea y desodoriza para su uso comercial."
    ],
    functionTitle: "Función y usos:",
    functionList: [
      "<strong>Protección natural:</strong> Impermeabiliza y protege la piel y el pelaje de la oveja.",
      "<strong>Usos comerciales:</strong> Base para cremas, ungüentos y cosméticos."
    ],
    footerCopy: "© 2025 Cream Tatto. Todos los derechos reservados."
  },

  en: {
    label: "Switch to Spanish",
    title: "Cream Tatto",
    meta: "Information about lanolin cream",
    intro:
      "Lanolin cream helps to hydrate, soften, and protect the skin. It is ideal for treating dry, irritated, or cracked skin and for the care of nursing mothers’ nipples. It is also used in cosmetic products for lip and body care, and in creams and balms to relieve diaper rash in babies.",
    benefitsTitle: "Main benefits of lanolin cream:",
    benefitsList: [
      "<strong>Hydration and moisture retention:</strong> Attracts and locks moisture into the skin, making it effective for dry, dehydrated, or cracked skin.",
      "<strong>Softness and flexibility:</strong> Acts as an emollient, softening the skin, reducing roughness, and giving it a smoother appearance.",
      "<strong>Protection of the skin barrier:</strong> Creates a semi-occlusive barrier that helps protect the skin from external aggressions.",
      "<strong>Anti-irritant properties:</strong> Helps soothe sensitive and irritated skin."
    ],
    usesTitle: "Common skin uses:",
    usesList: [
      "<strong>Nipple care:</strong> Relieves soreness and cracking during breastfeeding.",
      "<strong>Babies:</strong> Protects the baby's skin and prevents diaper rash.",
      "<strong>Lips and dry skin:</strong> Ideal for lip balms, heels, and dry elbows.",
      "<strong>Facial and body care:</strong> Found in moisturizing and protective creams.",
      "<strong>Healing:</strong> Promotes regeneration and healing of minor wounds."
    ],
    originTitle: "Origin of lanolin",
    originText:
      "Lanolin is extracted from sheep’s wool, from the sebaceous secretions that protect their skin from the weather.",
    processTitle: "Extraction process:",
    processList: [
      "<strong>Sheep shearing:</strong> The wool and the grease that covers it are obtained.",
      "<strong>Wool washing:</strong> The grease is dissolved with hot water and soap.",
      "<strong>Lanolin separation:</strong> Achieved by centrifugation or solvents.",
      "<strong>Purification:</strong> It is bleached and deodorized for commercial use."
    ],
    functionTitle: "Function and uses:",
    functionList: [
      "<strong>Natural protection:</strong> Waterproofs and protects the sheep’s skin and fleece.",
      "<strong>Commercial uses:</strong> Used as a base for creams, ointments, and cosmetics."
    ],
    footerCopy: "© 2025 Cream Tatto. All rights reserved."
  }
};

// === Cambio dinámico ===
toggle.addEventListener('change', () => {
  const lang = toggle.checked ? 'en' : 'es';
  document.documentElement.lang = lang;

  const t = texts[lang];
  labelText.textContent = t.label;

  document.getElementById('title-text').textContent = t.title;
  document.getElementById('meta-text').textContent = t.meta;
  document.getElementById('intro-text').textContent = t.intro;
  document.getElementById('benefits-title').textContent = t.benefitsTitle;
  document.getElementById('uses-title').textContent = t.usesTitle;
  document.getElementById('origin-title').textContent = t.originTitle;
  document.getElementById('origin-text').textContent = t.originText;
  document.getElementById('process-title').textContent = t.processTitle;
  document.getElementById('function-title').textContent = t.functionTitle;
  document.getElementById('footer-copy').textContent = t.footerCopy;

  // Actualizar listas
  const updateList = (id, items) => {
    const el = document.getElementById(id);
    el.innerHTML = "";
    items.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = item;
      el.appendChild(li);
    });
  };

  updateList("benefits-list", t.benefitsList);
  updateList("uses-list", t.usesList);
  updateList("process-list", t.processList);
  updateList("function-list", t.functionList);
});
