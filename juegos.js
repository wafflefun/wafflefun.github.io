/* ===== juegos.js · LISTA CENTRAL DE JUEGOS =====
   Los ecosistemas son solo para ordenar entre nosotros: NO se muestran en el portal ni en el menú.
   Edita SOLO este archivo para agregar o cambiar juegos: se actualizan
   el portal y el botón "¡Aquí hay más!" de todos tus juegos a la vez.

   CAMBIAR : nombres (n), emojis (e) y links (u).
   AGREGAR : copia una línea {n:...} dentro de un ecosistema, o copia un ecosistema completo.
   pronto:true = aparece como "Próximamente" (sin link). Cuando esté listo, quita pronto:true y pon u:'link'.
*/
const BASE = 'https://wafflefun.github.io/';   // CAMBIAR: si algún día tienes dominio propio
window.ECOSISTEMAS = [
  { nombre: 'Social / Personalidad', emoji: '🎭', juegos: [
    { n: 'El Gusano',        e: '🐛', u: BASE + 'gusanoloco/' },
    { n: 'Tu nivel de caos', e: '🌀', u: BASE + 'tucaos/' },
    { n: 'Crea tu monstruo', e: '👾', u: BASE + 'tumonstruo/' },
    { n: 'Crea tu villano',  e: '😈', u: BASE + 'tuvillano/' }
    // AGREGAR: más juegos de este ecosistema aquí
  ]},
  { nombre: 'Agilidad / Precisión', emoji: '🎯', juegos: [
    { n: 'No pares el cursor',   e: '🎯', u: BASE + 'noparess/' },
    { n: 'No toques la pared',   e: '🧱', u: BASE + 'ntlp/' },
    { n: 'Pelota saltarina',     e: '🏀', pronto: true }
  ]}
  // AGREGAR: un nuevo ecosistema completo aquí (copia uno de arriba)
];
window.PORTADA = BASE;

/* ----- Botón "¡Aquí hay más!" (se agrega solo en cada juego; en el portal no) ----- */
(function () {
  if (document.documentElement.hasAttribute('data-portal')) return;
  function go() {
    // CAMBIAR: colores y tamaños del botón y del menú
    const css = '.ma-b{position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 14px);transform:translateX(-50%);z-index:9998;min-height:44px;padding:0 1.1rem;border-radius:999px;border:1px solid rgba(255,255,255,.3);background:rgba(30,24,60,.85);color:#fff;font:600 .95rem system-ui,sans-serif;cursor:pointer;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}' +
      '.ma-o{position:fixed;inset:0;z-index:9999;background:rgba(8,6,20,.8);display:none;align-items:flex-end;justify-content:center}.ma-o.on{display:flex}' +
      '.ma-p{width:100%;max-width:480px;max-height:85%;overflow:auto;background:#17123a;color:#fff;border-radius:20px 20px 0 0;padding:14px 18px calc(env(safe-area-inset-bottom,0px) + 18px);font-family:system-ui,sans-serif;box-sizing:border-box}' +
      '.ma-p h2{margin:0;font-size:1.2rem;line-height:44px}.ma-p h3{margin:16px 0 8px;font-size:.8rem;opacity:.7;text-transform:uppercase;letter-spacing:.05em}' +
      '.ma-p a,.ma-p .s{display:flex;align-items:center;gap:10px;min-height:44px;padding:0 12px;margin-bottom:6px;border-radius:12px;background:rgba(255,255,255,.08);color:#fff;text-decoration:none;font-size:1rem}' +
      '.ma-p .s{opacity:.45}.ma-p .here{outline:2px solid #ffd23f}' +
      '.ma-x{float:right;background:none;border:0;color:#fff;font-size:1.4rem;min-height:44px;min-width:44px;cursor:pointer}';
    const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    let h = '<button class="ma-x" aria-label="Cerrar">✕</button><h2>¡Aquí hay más!</h2><a href="' + PORTADA + '">🏠 Portada</a>';
    for (const g of ECOSISTEMAS) {
      for (const j of g.juegos) {
        if (j.pronto) h += '<span class="s">' + j.e + ' ' + j.n + ' · Próximamente</span>';
        else h += '<a href="' + j.u + '"' + (location.href.indexOf(j.u) === 0 ? ' class="here"' : '') + '>' + j.e + ' ' + j.n + '</a>';
      }
    }
    const o = document.createElement('div'); o.className = 'ma-o';
    o.innerHTML = '<div class="ma-p" role="dialog" aria-label="Más juegos">' + h + '</div>';
    const b = document.createElement('button'); b.className = 'ma-b'; b.textContent = '✨ ¡Aquí hay más!';  // CAMBIAR: texto del botón
    b.onclick = () => o.classList.add('on');
    o.onclick = (e) => { if (e.target === o || e.target.className === 'ma-x') o.classList.remove('on'); };
    addEventListener('keydown', (e) => { if (e.key === 'Escape') o.classList.remove('on'); });
    document.body.appendChild(o); document.body.appendChild(b);
  }
  document.body ? go() : addEventListener('DOMContentLoaded', go);
})();
/* ===== MÚSICA DE LA PORTADA ===== */
(function () {
  // Solo funciona en la página principal
  if (!document.documentElement.hasAttribute('data-portal')) return;

  function iniciarMusica() {
    const audio = document.createElement('audio');

    audio.src = 'coin_slot_serenade.mp3';
    audio.loop = true;
    audio.preload = 'auto';

    const boton = document.createElement('button');

    boton.textContent = '🎵';
    boton.setAttribute('aria-label', 'Activar música');

    const css = `
      .wf-musica {
        position: fixed;
        right: 16px;
        bottom: calc(env(safe-area-inset-bottom, 0px) + 16px);
        z-index: 9998;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.3);
        background: rgba(30,24,60,.85);
        color: white;
        font-size: 1.3rem;
        cursor: pointer;
        -webkit-backdrop-filter: blur(6px);
        backdrop-filter: blur(6px);
      }
    `;

    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    boton.className = 'wf-musica';

    boton.onclick = () => {
      if (audio.paused) {
        audio.play();
        boton.textContent = '🔊';
        boton.setAttribute('aria-label', 'Apagar música');
      } else {
        audio.pause();
        boton.textContent = '🎵';
        boton.setAttribute('aria-label', 'Activar música');
      }
    };

    document.body.appendChild(audio);
    document.body.appendChild(boton);
  }

  document.body
    ? iniciarMusica()
    : addEventListener('DOMContentLoaded', iniciarMusica);
})();
