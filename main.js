const tabsFirstSection = document.querySelectorAll('.imAlxy-section__tabs-tab');
const contentFirstSection = document.querySelectorAll('.imAlxy-section__content > li');
const tabsSecondSection = document.querySelectorAll('.proyects-section__proyect__tabs-tab');
const contentSecondSection = document.querySelectorAll('.proyects-section__proyect__content > li');

function addTabClickListeners(tabs, content) {
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        t.classList.remove('active-tab');
        t.classList.add('inactive-tab');
      });
      content.forEach((c) => c.classList.add('inactive-content-tab'));

      tab.classList.remove('inactive-tab');
      tab.classList.add('active-tab');
      content[index].classList.remove('inactive-content-tab');
      content[index].classList.add('active-content-tab');
    });
  });
}

addTabClickListeners(tabsFirstSection, contentFirstSection);
addTabClickListeners(tabsSecondSection, contentSecondSection);


// Obtén todas las secciones de proyectos
const projectSections = document.querySelectorAll('.proyects-section__proyect');

projectSections.forEach((section) => {
  // Para cada sección de proyectos, obtén sus pestañas y contenido
  const tabs = section.querySelectorAll('.proyects-section__proyect__tabs-tab');
  const content = section.querySelectorAll('.proyects-section__proyect__content > li');

  // Agrega un manejador de clic para las pestañas de esta sección
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Restablece el estado de todas las pestañas y contenido en esta sección
      tabs.forEach((t) => t.classList.remove('active-tab'));
      content.forEach((c) => c.classList.add('inactive-content-tab'));

      // Establece la pestaña clickeada como activa y su contenido correspondiente
      tab.classList.add('active-tab');
      content[index].classList.remove('inactive-content-tab');
    });
  });
});

// let scrolling = false;

// window.addEventListener('wheel', (event) => {
//   if (!scrolling) {
//     scrolling = true;

//     const windowHeight = window.innerHeight;
//     const currentScroll = window.scrollY;
//     const newScroll = currentScroll + (event.deltaY > 0 ? windowHeight : -windowHeight);

//     window.scrollTo({
//       top: newScroll,
//       behavior: 'smooth'
//     });

//     setTimeout(() => {
//       scrolling = false;
//     }, 10); // Ajusta el tiempo que se espera entre eventos de scroll y la duración de la transición
//   }
// });

