/* ══════════════════════════════════════════════════════
   MAIN.JS — Assemblées du Bénin
══════════════════════════════════════════════════════ */

/* ── ICÔNES SVG ──────────────────────────────────────── */
const WA = `<svg viewBox="0 0 32 32"><path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.65 4.86 1.89 6.97L2 30l7.25-1.86A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.06 19.41c-.3.85-1.75 1.62-2.44 1.72-.62.09-1.42.13-2.3-.14-.53-.17-1.21-.39-2.08-.77-3.68-1.59-6.08-5.3-6.27-5.55-.19-.25-1.52-2.02-1.52-3.85 0-1.83.96-2.73 1.3-3.1.34-.37.74-.46.99-.46.25 0 .49.01.7.02.23.01.53-.09.83.63.3.73 1.02 2.56 1.11 2.75.09.19.15.41.03.66-.12.25-.18.4-.36.62-.18.22-.38.48-.54.65-.18.18-.37.38-.16.74.21.36.93 1.54 2 2.5 1.37 1.23 2.53 1.61 2.89 1.79.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1 1.0 2.46 1.18.36.18.6.27.69.42.09.15.09.87-.21 1.72z"/></svg>`;
const PIN = `<svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;

/* ── BUILD CARDS ─────────────────────────────────────── */
const grid = document.getElementById('cards-grid');
if (grid) {
  grid.innerHTML = '';
  ASSEMBLEES.forEach((a, i) => {
    const hHTML = a.horaires && a.horaires.length > 0
      ? a.horaires.map(h => `
          <div class="sch-row">
            <span class="sch-day">${h.j}</span>
            <span class="sch-time">${h.h}</span>
          </div>`).join('')
      : '<p class="no-contact">Horaires non communiqués.</p>';

    const mapHTML = a.map
      ? `<a class="map-btn" href="${a.map}" target="_blank" rel="noopener">
           ${PIN} Voir sur Google Maps
         </a>`
      : '';

    let ctHTML = '';
    if (!a.contacts || a.contacts.length === 0) {
      ctHTML = '<p class="no-contact">Contactez-nous par email pour cette assemblée.</p>';
    } else {
      ctHTML = a.contacts.map(c => {
        const t   = c.tel.replace(/\D/g, '');
        const msg = encodeURIComponent("Bonjour, je souhaite des informations sur l'" + a.nom + ". Merci !");
        return `<a class="ct-btn" href="https://wa.me/${t}?text=${msg}" target="_blank" rel="noopener">
                  <div class="wa-circ">${WA}</div>
                  <div class="ct-info">
                    <span class="ct-name">${c.nom}</span>
                    <span class="ct-tel">${c.tel}</span>
                  </div>
                </a>`;
      }).join('');
    }

    const card = document.createElement('div');
    card.className = 'card rv';
    card.style.transitionDelay = (i * 60) + 'ms';
    card.innerHTML =
      `<div class="card-body">
        <div class="card-name">${a.nom}</div>
        <div class="sch-lbl">Horaires</div>
        ${hHTML}
        ${mapHTML}
        <div class="ct-wrap">
          <div class="ct-lbl">WhatsApp</div>
          ${ctHTML}
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

/* ── HEADER SCROLL ───────────────────────────────────── */
window.addEventListener('scroll', function () {
  document.getElementById('hdr').classList.toggle('scrolled', scrollY > 30);
});

/* ── HAMBURGER ───────────────────────────────────────── */
const ham = document.getElementById('ham');
const nav = document.getElementById('nav');
ham.addEventListener('click', function () {
  ham.classList.toggle('open');
  nav.classList.toggle('open');
});
nav.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    ham.classList.remove('open');
    nav.classList.remove('open');
  });
});

/* ── REVEAL ON SCROLL ────────────────────────────────── */
const obs = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.08 });
document.querySelectorAll('.rv, .rl, .rr').forEach(function (el) { obs.observe(el); });

/* ── CONTACT FORM ────────────────────────────────────── */
function submitForm() {
  const name  = document.getElementById('f-name').value.trim();
  const tel   = document.getElementById('f-tel').value.trim();
  const asm   = document.getElementById('f-asm').value;
  const email = document.getElementById('f-email').value.trim();
  const msg   = document.getElementById('f-msg').value.trim();
  const st    = document.getElementById('form-status');

  if (!name || !tel) {
    st.className = 'err';
    st.style.display = 'block';
    st.textContent = 'Veuillez renseigner au moins votre nom et numéro.';
    return;
  }

  const body = 'Nom: ' + name
    + '%0ATel: ' + tel
    + '%0AAssemblee: ' + (asm || 'Non precisee')
    + '%0AEmail: ' + (email || 'Non fourni')
    + '%0AMessage: ' + (msg || '—');

  window.location.href = 'mailto:madocheatodjinou@gmail.com?subject=Demande de rejoindre – '
    + (asm || 'Assemblees du Littoral') + '&body=' + body;

  st.className = 'ok';
  st.style.display = 'block';
  st.textContent = "Votre client mail va s'ouvrir. À très bientôt !";
}

/* ══════════════════════════════════════════════════════
   ASSISTANT IA LOCAL
══════════════════════════════════════════════════════ */
const chatMsgs = document.getElementById('cms');

function addMsg(txt, r) {
  const d = document.createElement('div');
  d.className = 'msg ' + (r === 'user' ? 'user' : 'bot');
  d.textContent = txt;
  chatMsgs.appendChild(d);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function showTyping() {
  const d = document.createElement('div');
  d.className = 'typing';
  d.id = 'typing-ind';
  d.innerHTML = '<span></span><span></span><span></span>';
  chatMsgs.appendChild(d);
  chatMsgs.scrollTop = chatMsgs.scrollHeight;
}

function norm(s) {
  return s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[''`]/g, ' ');
}

function findAssemblee(q) {
  const nq = norm(q);
  for (let i = 0; i < ASSEMBLEES.length; i++) {
    const nomNorm = norm(
      ASSEMBLEES[i].nom.replace("Assemblée de ", "").replace("Assemblée d'", "")
    );
    if (nq.indexOf(nomNorm) !== -1) return ASSEMBLEES[i];
  }
  return null;
}

function has(q, words) {
  const nq = norm(q);
  return words.some(w => nq.indexOf(norm(w)) !== -1);
}

function repondre(q) {
  const a = findAssemblee(q);

  if (has(q, ['bonjour', 'bonsoir', 'salut', 'hello', 'hi'])) {
    return "Bonjour et bienvenue ! 😊 Je suis l'assistant des Assemblées du Bénin. Je peux vous renseigner sur les horaires, les contacts, les localisations ou comment nous rejoindre. Comment puis-je vous aider ?";
  }

  if (has(q, ['merci', 'thank', 'super', 'parfait', 'ok merci'])) {
    return "Avec plaisir ! 🙏 N'hésitez pas si vous avez d'autres questions.";
  }

  if (a) {
    if (has(q, ['horaire', 'heure', 'quand', 'reunion', 'réunion', 'culte', 'priere', 'prière', 'etude', 'étude', 'programme', 'ecodim', 'veillée', 'veille'])) {
      const h = a.horaires.map(x => '• ' + x.j + ' : ' + x.h).join('\n');
      return '📅 Horaires de l\'' + a.nom + ' :\n\n' + h;
    }
    if (has(q, ['contact', 'numero', 'numéro', 'whatsapp', 'appeler', 'joindre', 'responsable'])) {
      if (a.contacts.length === 0) return 'Pour l\'' + a.nom + ', veuillez écrire à madocheatodjinou@gmail.com et nous vous mettrons en relation. 📧';
      const c = a.contacts.map(x => '• ' + x.nom + ' : ' + x.tel).join('\n');
      return '📲 Contacts WhatsApp – ' + a.nom + ' :\n\n' + c;
    }
    if (has(q, ['lieu', 'localisation', 'adresse', 'où', 'ou ', 'situe', 'trouver', 'maps', 'map'])) {
      if (a.map) return '📍 ' + a.nom + ' : cliquez sur le bouton "Voir sur Google Maps" dans la carte de cette assemblée pour accéder à la localisation exacte.';
      return '📍 La localisation de l\'' + a.nom + ' n\'est pas encore renseignée en ligne. Contactez-nous à madocheatodjinou@gmail.com.';
    }
    const hors = a.horaires.map(x => x.j + ' (' + x.h + ')').join(', ');
    const cts  = a.contacts.length
      ? a.contacts.map(x => x.nom + ' ' + x.tel).join(' | ')
      : 'Email : madocheatodjinou@gmail.com';
    return 'ℹ️ ' + a.nom + '\n\n📅 Réunions : ' + hors + '\n\n📲 Contacts : ' + cts;
  }

  if (has(q, ['toutes', 'liste', 'assemblée', 'assemblee', 'eglise', 'église', 'avez vous', 'combien'])) {
    const liste = ASSEMBLEES.map(x => '• ' + x.nom).join('\n');
    return 'Nous avons 19 assemblées au Bénin :\n\n' + liste + '\n\nDites-moi laquelle vous intéresse ! 😊';
  }

  if (has(q, ['rejoindre', 'rejoins', 'membre', 'inscrire', 'participer', 'venir', 'nouveau', 'bapteme', 'baptême'])) {
    return "🤝 Pour nous rejoindre, remplissez le formulaire dans la section « Nous rejoindre » en bas de la page, ou écrivez à madocheatodjinou@gmail.com. Nous reviendrons vers vous rapidement !";
  }

  const jours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  let jourTrouve = null;
  for (let i = 0; i < jours.length; i++) {
    if (norm(q).indexOf(jours[i]) !== -1) { jourTrouve = jours[i]; break; }
  }
  if (jourTrouve) {
    const res = ASSEMBLEES.filter(a =>
      a.horaires.some(h => norm(h.j).indexOf(jourTrouve) !== -1)
    );
    if (res.length) {
      const rep = res.map(a => {
        const h = a.horaires
          .filter(x => norm(x.j).indexOf(jourTrouve) !== -1)
          .map(x => x.h).join(' / ');
        return '• ' + a.nom + ' : ' + h;
      }).join('\n');
      return '📅 Assemblées avec réunion le ' + jourTrouve + ' :\n\n' + rep;
    }
  }

  if (has(q, ['qui etes', 'qui êtes', 'qui sommes', 'presentation', 'reseau', 'réseau', 'c est quoi'])) {
    return "Nous sommes un réseau de 19 assemblées chrétiennes au Bénin, réparties dans les départements de l'Ouémé, du Littoral et de l'Atlantique. Un espace de foi, de prière et de communion ouvert à tous. 🙏";
  }

  if (has(q, ['activite', 'activité', 'jeunesse', 'famille', 'programme'])) {
    return "🎯 Nos activités : culte dominical, étude biblique, réunions de prière, Ecodim (école du dimanche), veillées de prière, activités jeunesse & familles. Chaque assemblée a son propre programme. Laquelle vous intéresse ?";
  }

  if (has(q, ['contact', 'email', 'mail', 'numero', 'numéro', 'whatsapp'])) {
    return "📧 Email général : madocheatodjinou@gmail.com\n\nPour les contacts d'une assemblée précise, dites-moi laquelle (ex: Godomey, Djeffa...) et je vous donne les numéros WhatsApp directs. 😊";
  }

  return "Je n'ai pas bien compris votre question. 😊 Je peux vous aider sur :\n• Les horaires d'une assemblée\n• Les contacts WhatsApp\n• La localisation\n• Comment nous rejoindre\n\nNommez l'assemblée qui vous intéresse ou reformulez votre question !";
}

function sendMsg() {
  const inp = document.getElementById('ci');
  const txt = inp.value.trim();
  if (!txt) return;
  inp.value = '';
  addMsg(txt, 'user');
  showTyping();
  const delay = 700 + Math.floor(Math.random() * 400);
  setTimeout(function () {
    const t = document.getElementById('typing-ind');
    if (t) t.remove();
    addMsg(repondre(txt), 'bot');
  }, delay);
}

function quickAsk(q) {
  document.getElementById('ci').value = q;
  sendMsg();
}

/* ── MODE CLAIR / SOMBRE ─────────────────────────────── */
(function () {
  const btn  = document.getElementById('brightness-btn');
  const body = document.body;
  if (!btn) return;
  if (localStorage.getItem('lightMode') === '1') {
    body.classList.add('light-mode');
    btn.textContent = '☀️';
  }
  btn.onclick = function () {
    const isLight = body.classList.toggle('light-mode');
    btn.textContent = isLight ? '☀️' : '🌙';
    localStorage.setItem('lightMode', isLight ? '1' : '0');
  };
})();

/* ── HERO SLIDESHOW ──────────────────────────────────── */
(function () {
  const slides = document.querySelectorAll('.hero-bg img.slide');
  if (!slides.length) return;
  let cur = 0;
  setInterval(function () {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 5000);
})();
