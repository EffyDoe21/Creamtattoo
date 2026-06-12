const toggle = document.getElementById('language-toggle');
const labelText = document.getElementById('label-text');

const texts = {
  es: {
    label: "Cambiar a inglés",
    tabInfo: "Lanolina",
    tabCare: "Cuidados del tatuaje",

    title: "Cream Tattoo",
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
    originText: "La lanolina se extrae de la lana de oveja, de las secreciones sebáceas que protegen su piel del clima.",
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

    footerCopy: "© 2025 Cream Tattoo. Todos los derechos reservados.",

    careHTML: `
      <h2>Cuidados después de hacerte un tatuaje</h2>

      <h3>Fase 1: Las primeras horas (El blindaje)</h3>
      <p><strong>Respeta el vendaje:</strong> Deja el film transparente o el parche de curación el tiempo indicado por tu tatuador.</p>
      <p><strong>El primer lavado:</strong> Lava tus manos, retira el vendaje con cuidado y limpia el tatuaje con agua tibia y jabón neutro.</p>
      <p><strong>El secado:</strong> Seca con papel absorbente a toques suaves.</p>

      <h3>Fase 2: Los primeros 15 días</h3>
      <p><strong>Hidratación justa:</strong> Aplica una capa fina de crema cicatrizante 3 o 4 veces al día.</p>
      <p><strong>No te rasques:</strong> No retires costras ni pieles.</p>

      <h3>Lo que debes evitar</h3>
      <ul>
        <li>Piscinas, playas y jacuzzis.</li>
        <li>Exposición al sol.</li>
        <li>Ropa ajustada.</li>
        <li>Ejercicio intenso durante los primeros días.</li>
      </ul>

      <h3>☀️ Fase 3: Cuidado de por vida</h3>
      <p>Una vez que la piel esté completamente lisa y ya no haya costras, alrededor de la tercera o cuarta semana, el cuidado pasa a modo mantenimiento.</p>
      <p><strong>El secreto del color:</strong> Si quieres que tu tatuaje luzca como nuevo con el paso de los años, usa protector solar FPS 50+ cada vez que salgas al sol. Mantener la piel hidratada también ayudará a que los colores resalten más.</p>

      <h3>⚠️ ¿Cuándo consultar a un profesional?</h3>
      <p>Si notas enrojecimiento intenso, calor excesivo, pus, inflamación anormal o fiebre, consulta de inmediato con tu tatuador o con un médico.</p>
      <p>Siguiendo estas recomendaciones, tu tatuaje tendrá una cicatrización adecuada y conservará su apariencia durante muchos años.</p>
    `
  },

  en: {
    label: "Switch to Spanish",
    tabInfo: "Lanolin",
    tabCare: "Tattoo aftercare",

    title: "Cream Tattoo",
    meta: "Information about lanolin cream",
    intro:
      "Lanolin cream helps hydrate, soften, and protect the skin. It is ideal for dry, irritated, or cracked skin and for the care of nursing mothers’ nipples. It is also used in cosmetic products for lip and body care, as well as in creams and balms to help relieve diaper rash in babies.",

    benefitsTitle: "Main benefits of lanolin cream:",
    benefitsList: [
      "<strong>Hydration and moisture retention:</strong> Attracts and locks moisture into the skin, making it effective for dry, dehydrated, or cracked skin.",
      "<strong>Softness and flexibility:</strong> Acts as an emollient, softening the skin, reducing roughness, and giving it a smoother appearance.",
      "<strong>Skin barrier protection:</strong> Creates a semi-occlusive barrier that helps protect the skin from external aggressions.",
      "<strong>Anti-irritant properties:</strong> Helps soothe sensitive and irritated skin."
    ],

    usesTitle: "Common skin uses:",
    usesList: [
      "<strong>Nipple care:</strong> Helps relieve soreness and cracking during breastfeeding.",
      "<strong>Babies:</strong> Protects the baby’s skin and helps prevent diaper rash.",
      "<strong>Lips and dry skin:</strong> Ideal for lip balms, heels, and dry elbows.",
      "<strong>Face and body care:</strong> Commonly found in moisturizing and protective creams.",
      "<strong>Healing support:</strong> Helps support the regeneration and healing of minor skin damage."
    ],

    originTitle: "Origin of lanolin",
    originText: "Lanolin is extracted from sheep’s wool, specifically from the sebaceous secretions that protect their skin from the weather.",
    processTitle: "Extraction process:",
    processList: [
      "<strong>Sheep shearing:</strong> The wool and the grease that covers it are obtained.",
      "<strong>Wool washing:</strong> The grease is dissolved using hot water and soap.",
      "<strong>Lanolin separation:</strong> It is separated through centrifugation or solvents.",
      "<strong>Purification:</strong> It is bleached and deodorized for commercial use."
    ],

    functionTitle: "Function and uses:",
    functionList: [
      "<strong>Natural protection:</strong> Waterproofs and protects the sheep’s skin and fleece.",
      "<strong>Commercial uses:</strong> Used as a base for creams, ointments, and cosmetics."
    ],

    footerCopy: "© 2025 Cream Tattoo. All rights reserved.",

    careHTML: `
      <h2>Tattoo Aftercare</h2>

      <h3>Phase 1: The first few hours (Protection)</h3>
      <p><strong>Respect the bandage:</strong> Leave the transparent film or healing patch on for the time recommended by your tattoo artist.</p>
      <p><strong>The first wash:</strong> Wash your hands, carefully remove the bandage, and clean the tattoo with lukewarm water and mild, fragrance-free soap.</p>
      <p><strong>Drying:</strong> Pat dry gently with absorbent paper. Do not rub the tattoo.</p>

      <h3>Phase 2: The first 15 days</h3>
      <p><strong>Proper hydration:</strong> Apply a very thin layer of tattoo aftercare cream 3 to 4 times a day.</p>
      <p><strong>Do not scratch:</strong> Do not pick at scabs or peeling skin.</p>

      <h3>What you should avoid</h3>
      <ul>
        <li>Swimming pools, beaches, and jacuzzis.</li>
        <li>Direct sun exposure.</li>
        <li>Tight clothing.</li>
        <li>Intense exercise during the first few days.</li>
      </ul>

      <h3>☀️ Phase 3: Lifelong care</h3>
      <p>Once the skin is completely smooth and there are no scabs left, usually around the third or fourth week, aftercare becomes long-term maintenance.</p>
      <p><strong>The secret to color:</strong> If you want your tattoo to look fresh over the years, use SPF 50+ sunscreen whenever you go out in the sun. Keeping your skin moisturized will also help the colors stand out.</p>

      <h3>⚠️ When should you consult a professional?</h3>
      <p>If you notice intense redness, excessive heat, pus, abnormal swelling, or fever, contact your tattoo artist or a doctor immediately.</p>
      <p>By following these recommendations, your tattoo will heal properly and keep its appearance for many years.</p>
    `
  }
};

function updateList(id, items) {
  const el = document.getElementById(id);
  if (!el) return;

  el.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = item;
    el.appendChild(li);
  });
}

function cambiarIdioma(lang) {
  const t = texts[lang];

  document.documentElement.lang = lang;
  labelText.textContent = t.label;

  document.querySelector("button[onclick=\"mostrarPestana('info')\"]").textContent = t.tabInfo;
  document.querySelector("button[onclick=\"mostrarPestana('cuidados')\"]").textContent = t.tabCare;

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

  updateList("benefits-list", t.benefitsList);
  updateList("uses-list", t.usesList);
  updateList("process-list", t.processList);
  updateList("function-list", t.functionList);

  const careCard = document.querySelector("#cuidados .card");
  if (careCard) {
    careCard.innerHTML = t.careHTML;
  }
}

toggle.addEventListener('change', () => {
  const lang = toggle.checked ? 'en' : 'es';
  cambiarIdioma(lang);
});

function mostrarPestana(id) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });

  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
  });

  document.getElementById(id).classList.add('active');

  const botonActivo = document.querySelector(
    `button[onclick="mostrarPestana('${id}')"]`
  );

  if (botonActivo) {
    botonActivo.classList.add('active');
  }
}

cambiarIdioma("es");
