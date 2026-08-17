/* ============================================================
   Lineup — Presidente Music Festival
   Extraido de music-festival.js (v1.5) de presidente.com.do.
   Logica identica (flechas, snap, header apilado, autoplay).
   ============================================================ */
(function () {
  function initLineup() {

  /* ============================================================
     Lineup: tabs por fecha + navegación de flechas
     ============================================================ */
  var DAY_NAMES = [
    'DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES',
    'JUEVES', 'VIERNES', 'SÁBADO'
  ];

  document.querySelectorAll('.pmf-lineup').forEach(function (section) {
    var tabs    = section.querySelectorAll('.pmf-lineup__tab');
    var cards   = section.querySelectorAll('.pmf-lineup__card');
    var dayLabel = section.querySelector('.js-lineup-day');
    var track   = section.querySelector('.pmf-lineup__track');
    var prevBtn = section.querySelector('.pmf-lineup__arrow--prev');
    var nextBtn = section.querySelector('.pmf-lineup__arrow--next');

    function activateTab(tab) {
      tabs.forEach(function (t) { t.classList.remove('is-active'); });
      tab.classList.add('is-active');

      var activeDate = tab.dataset.date;

      /* Actualiza el label del día de la semana */
      if (dayLabel) {
        if (tab.dataset.day) {
          dayLabel.textContent = tab.dataset.day;
        } else if (activeDate) {
          /* fallback: calcular desde la fecha */
          var d = new Date(activeDate + 'T12:00:00');
          dayLabel.textContent = DAY_NAMES[d.getDay()] || '';
        }
      }

      /* Muestra las cards de la fecha activa; las que no tienen fecha
         (data-date="") se muestran siempre, sin importar el tab activo. */
      cards.forEach(function (card) {
        if (!activeDate || !card.dataset.date || card.dataset.date === activeDate) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });

      /* Vuelve al inicio del track */
      if (track) track.scrollLeft = 0;

      /* Refresca el estado de las flechas tras cambiar las cards visibles */
      updateArrows();
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () { bumpAutoplay(); activateTab(tab); });
    });

    /* Inicializa con el primer tab activo (si no hay tabs, p.ej. ningún
       artista tiene fecha, todas las cards quedan visibles por defecto). */
    if (tabs.length) activateTab(tabs[0]);

    /* Navegación con flechas.
       El paso se calcula dinámicamente = distancia real entre dos cards
       (ancho + gap). Así queda alineado en cualquier breakpoint (en mobile la
       card mide distinto que en desktop) y no aparecen cards "a mitad". */
    function stepSize() {
      if (cards.length >= 2) return Math.round(cards[1].offsetLeft - cards[0].offsetLeft);
      if (cards.length === 1) {
        var g = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 36;
        return Math.round(cards[0].getBoundingClientRect().width + g);
      }
      return 316;
    }

    function updateArrows() {
      if (!track) return;
      var maxScroll = track.scrollWidth - track.clientWidth;
      if (prevBtn) prevBtn.disabled = track.scrollLeft <= 1;
      if (nextBtn) nextBtn.disabled = track.scrollLeft >= maxScroll - 1;
    }

    if (prevBtn && track) {
      prevBtn.addEventListener('click', function () {
        bumpAutoplay();
        track.scrollBy({ left: -stepSize(), behavior: 'smooth' });
      });
    }
    if (nextBtn && track) {
      nextBtn.addEventListener('click', function () {
        bumpAutoplay();
        track.scrollBy({ left: stepSize(), behavior: 'smooth' });
      });
    }

    /* Snap al soltar el arrastre: detiene el scroll con una card alineada
       a la izquierda, o la última card completa pegada a la derecha. */
    function snapToNearest() {
      if (!track) return;
      var SCROLL_STEP = stepSize();
      var maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;                 /* sin overflow: nada que centrar */
      var sl = track.scrollLeft;
      var lastStartSnap = Math.floor(maxScroll / SCROLL_STEP) * SCROLL_STEP;
      var target = Math.round(sl / SCROLL_STEP) * SCROLL_STEP;
      if (target >= lastStartSnap) {
        /* Cerca del final: elegir por cercanía entre la última card alineada
           a la izquierda o la última card completa pegada a la derecha. */
        target = (sl - lastStartSnap) >= (maxScroll - sl) ? maxScroll : lastStartSnap;
      }
      if (target < 0) target = 0;
      if (target > maxScroll) target = maxScroll;
      if (Math.abs(target - sl) > 1) {
        track.scrollTo({ left: target, behavior: 'smooth' });
      }
    }

    if (track) {
      var snapTimer = null;
      track.addEventListener('scroll', function () {
        updateArrows();
        if (snapTimer) clearTimeout(snapTimer);   /* espera a que el scroll se detenga */
        snapTimer = setTimeout(snapToNearest, 130);
      });
      window.addEventListener('resize', updateArrows);
      updateArrows();
    }

    /* ----- Apilado adaptativo del header: compara la altura del párrafo en el layout
       actual contra la que tendría en el contenedor a su ancho máximo (1140px = desktop
       grande). Si está >1 línea más alto, es que las tabs lo comprimieron → apila.
       Auto-calibrado: se adapta al nº de tabs y al texto, sin umbral fijo de px.
       Solo desktop/intermedio; en mobile (≤768) el media query manda. ----- */
    var header    = section.querySelector('.pmf-lineup__header');
    var desc      = section.querySelector('.pmf-lineup__desc');
    var container = section.querySelector('.pmf-lineup__container');

    function updateLineupLayout() {
      if (!header || !desc || !container) return;
      if (window.innerWidth <= 768) { header.classList.remove('is-stacked'); return; }

      header.classList.remove('is-stacked');                 /* mide siempre en layout fila */

      /* Referencia: alto del párrafo con el contenedor a su ancho máximo (sin paint,
         se restaura en el mismo turno → no parpadea). */
      var maxW = parseFloat(getComputedStyle(container).maxWidth) || 1140;
      var prev = container.style.width;
      container.style.width = maxW + 'px';
      var refHeight = desc.offsetHeight;                      /* lectura → reflow sync */
      container.style.width = prev;                           /* restaura */
      var curHeight = desc.offsetHeight;

      var lineH = parseFloat(getComputedStyle(desc).lineHeight) || 17;
      if (curHeight - refHeight > lineH) {                    /* ≥2 líneas más que en desktop grande */
        header.classList.add('is-stacked');
      }
    }

    var rafPending = false;
    function onLineupResize() {
      if (rafPending) return;                                 /* throttle: 1 cálculo por frame */
      rafPending = true;
      requestAnimationFrame(function () { rafPending = false; updateLineupLayout(); });
    }
    window.addEventListener('resize', onLineupResize);
    window.addEventListener('load', updateLineupLayout);      /* recalcula tras fuentes/imágenes */
    updateLineupLayout();

    /* ----- Autoplay: avanza una card cada 3s; al final vuelve a la primera ----- */
    var AUTOPLAY_MS = 3000;
    var autoplayTimer = null;
    var resumeTimer = null;
    var isHovering = false;
    var reduceMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function autoplayStep() {
      if (!track) return;
      var maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 0) return;                  /* sin overflow: nada que rotar */
      if (track.scrollLeft >= maxScroll - 1) {
        track.scrollTo({ left: 0, behavior: 'smooth' });        /* rebobinado al inicio */
      } else {
        track.scrollBy({ left: stepSize(), behavior: 'smooth' }); /* siguiente card */
      }
    }

    function startAutoplay() {
      return;                                       /* autoplay desactivado: solo mueve el usuario */
      if (autoplayTimer || !track || isHovering || reduceMotion) return;
      if (track.scrollWidth - track.clientWidth <= 0) return;   /* no rota si no hay overflow */
      autoplayTimer = setInterval(autoplayStep, AUTOPLAY_MS);
    }

    function stopAutoplay() {
      if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null; }
    }

    /* Interacción del usuario: pausa y reanuda tras un periodo de inactividad. */
    function bumpAutoplay() {
      stopAutoplay();
      if (resumeTimer) clearTimeout(resumeTimer);
      resumeTimer = setTimeout(startAutoplay, AUTOPLAY_MS);
    }

    if (track) {
      /* Hover (desktop): pausa sólo mientras el mouse está sobre el carrusel
         (las cards), no sobre toda la sección. */
      track.addEventListener('mouseenter', function () { isHovering = true; stopAutoplay(); });
      track.addEventListener('mouseleave', function () { isHovering = false; startAutoplay(); });
      /* Red de seguridad: si la ventana pierde el foco con el flag activo
         (mouseleave que no llegó a dispararse), lo limpiamos y reanudamos. */
      window.addEventListener('blur', function () { isHovering = false; startAutoplay(); });
      /* Arrastre / touch / touchpad: pausa y reanuda tras inactividad. */
      track.addEventListener('pointerdown', bumpAutoplay);
      track.addEventListener('touchstart', bumpAutoplay, { passive: true });
      track.addEventListener('wheel', bumpAutoplay, { passive: true });
      startAutoplay();
    }
  });

  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLineup);
  } else {
    initLineup();
  }
})();
