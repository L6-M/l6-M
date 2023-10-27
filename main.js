const firstTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(1)');
const secondTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(2)');
const thirdTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(3)');
const fourthTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(4)');
const contentFirstTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(1)');
const contentSecondTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(2)');
const contentThirdTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(3)');
const contentFourthTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(4)');

const firstTabSecondSection = document.querySelector('.proyects-section__proyect__tabs-tab:first-child');
const secondTabSecondSection = document.querySelector('.proyects-section__proyect__tabs-tab:last-child');
const contentFirstTabSecondSection = document.querySelector('.proyects-section__proyect__content > li:first-child');
const contentSecondTabSecondSection = document.querySelector('.proyects-section__proyect__content > li:last-child');


firstTabFirstSection.addEventListener('click', clickFirstTabFirstSection);
secondTabFirstSection.addEventListener('click', clickSecondTabFirstSection);
thirdTabFirstSection.addEventListener('click', clickThirdTabFirstSection);
fourthTabFirstSection.addEventListener('click', clickFourthTabFirstSection);

firstTabSecondSection.addEventListener('click', clickFirstTabSecondSection);
secondTabSecondSection.addEventListener('click', clickSecondTabSecondSection);

function clickFirstTabFirstSection () {
    firstTabFirstSection.classList.add('active-tab');
    firstTabFirstSection.classList.remove('inactive-tab');
    contentFirstTabFirstSection.classList.add('active-content-tab');
    contentFirstTabFirstSection.classList.remove('inactive-content-tab');
    
    secondTabFirstSection.classList.add('inactive-tab');
    secondTabFirstSection.classList.remove('active-tab');
    contentSecondTabFirstSection.classList.add('inactive-content-tab');
    contentSecondTabFirstSection.classList.remove('active-content-tab');
    
    
    thirdTabFirstSection.classList.add('inactive-tab');
    thirdTabFirstSection.classList.remove('active-tab');
    contentThirdTabFirstSection.classList.add('inactive-content-tab');
    contentThirdTabFirstSection.classList.remove('active-content-tab');
    
    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');
}

function clickSecondTabFirstSection () {
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');
    
    secondTabFirstSection.classList.add('active-tab');
    secondTabFirstSection.classList.remove('inactive-tab');
    contentSecondTabFirstSection.classList.add('active-content-tab');
    contentSecondTabFirstSection.classList.remove('inactive-content-tab');


    thirdTabFirstSection.classList.add('inactive-tab');
    thirdTabFirstSection.classList.remove('active-tab');
    contentThirdTabFirstSection.classList.add('inactive-content-tab');
    contentThirdTabFirstSection.classList.remove('active-content-tab');

    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');

}

function clickThirdTabFirstSection () {
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');

    secondTabFirstSection.classList.add('inactive-tab');
    secondTabFirstSection.classList.remove('active-tab');
    contentSecondTabFirstSection.classList.add('inactive-content-tab');
    contentSecondTabFirstSection.classList.remove('active-content-tab');


    thirdTabFirstSection.classList.add('active-tab');
    thirdTabFirstSection.classList.remove('inactive-tab');
    contentThirdTabFirstSection.classList.add('active-content-tab');
    contentThirdTabFirstSection.classList.remove('inactive-content-tab');

    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');

}

function clickFourthTabFirstSection () {
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');
    
    secondTabFirstSection.classList.add('inactive-tab');
    secondTabFirstSection.classList.remove('active-tab');
    contentSecondTabFirstSection.classList.add('inactive-content-tab');
    contentSecondTabFirstSection.classList.remove('active-content-tab');

    thirdTabFirstSection.classList.add('inactive-tab');
    thirdTabFirstSection.classList.remove('active-tab');
    contentThirdTabFirstSection.classList.add('inactive-content-tab');
    contentThirdTabFirstSection.classList.remove('active-content-tab');

    fourthTabFirstSection.classList.add('active-tab');
    fourthTabFirstSection.classList.remove('inactive-tab');
    contentFourthTabFirstSection.classList.add('active-content-tab');
    contentFourthTabFirstSection.classList.remove('inactive-content-tab');
}


function clickFirstTabSecondSection () {
    firstTabSecondSection.classList.add('active-tab');
    firstTabSecondSection.classList.remove('inactive-tab');
    contentFirstTabSecondSection.classList.add("active-content-tab")
    contentFirstTabSecondSection.classList.remove("inactive-content-tab")
    
    secondTabSecondSection.classList.add('inactive-tab');
    secondTabSecondSection.classList.remove('active-tab');
    contentSecondTabSecondSection.classList.add("inactive-content-tab")
    contentSecondTabSecondSection.classList.remove("active-content-tab")
}

function clickSecondTabSecondSection () {
    firstTabSecondSection.classList.add('inactive-tab');
    firstTabSecondSection.classList.remove('active-tab');
    contentFirstTabSecondSection.classList.add('inactive-content-tab');
    contentFirstTabSecondSection.classList.remove('active-content-tab');

    
    secondTabSecondSection.classList.add('active-tab');
    secondTabSecondSection.classList.remove('inactive-tab');
    console.log(5)
    contentSecondTabSecondSection.classList.add('active-content-tab')
    contentSecondTabSecondSection.classList.remove('inactive-content-tab')

}