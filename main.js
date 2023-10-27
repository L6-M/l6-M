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

firstTabFirstSection.addEventListener('click', clickFirstTabFirstSection);
secondTabFirstSection.addEventListener('click', clickSecondTabFirstSection);
thirdTabFirstSection.addEventListener('click', clickThirdTabFirstSection);
fourthTabFirstSection.addEventListener('click', clickFourthTabFirstSection);

firstTabSecondSection.addEventListener('click', clickFirstTabSecondSection);
secondTabSecondSection.addEventListener('click', clickSecondTabSecondSection);

function clickFirstTabFirstSection () {
    firstTabFirstSection.classList.remove('inactive-tab');
    firstTabFirstSection.classList.add('active-tab');
    contentFirstTabFirstSection.classList.remove('inactive-content-tab');
    contentFirstTabFirstSection.classList.add('active-content-tab');
    
    secondTabFirstSection.classList.remove('active-tab');
    secondTabFirstSection.classList.add('inactive-tab');
    contentSecondTabFirstSection.classList.remove('active-content-tab');
    contentSecondTabFirstSection.classList.add('inactive-content-tab');
    
    
    thirdTabFirstSection.classList.remove('active-tab');
    thirdTabFirstSection.classList.add('inactive-tab');
    contentThirdTabFirstSection.classList.remove('active-content-tab');
    contentThirdTabFirstSection.classList.add('inactive-content-tab');
    
    fourthTabFirstSection.classList.remove('active-tab');
    fourthTabFirstSection.classList.add('inactive-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');
}

function clickSecondTabFirstSection () {
    firstTabFirstSection.classList.remove('active-tab');
    firstTabFirstSection.classList.add('inactive-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');
    
    secondTabFirstSection.classList.remove('inactive-tab');
    secondTabFirstSection.classList.add('active-tab');
    contentSecondTabFirstSection.classList.remove('inactive-content-tab');
    contentSecondTabFirstSection.classList.add('active-content-tab');


    thirdTabFirstSection.classList.remove('active-tab');
    thirdTabFirstSection.classList.add('inactive-tab');
    contentThirdTabFirstSection.classList.remove('active-content-tab');
    contentThirdTabFirstSection.classList.add('inactive-content-tab');

    fourthTabFirstSection.classList.remove('active-tab');
    fourthTabFirstSection.classList.add('inactive-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');

}

function clickThirdTabFirstSection () {
    firstTabFirstSection.classList.remove('active-tab');
    firstTabFirstSection.classList.add('inactive-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');

    secondTabFirstSection.classList.remove('active-tab');
    secondTabFirstSection.classList.add('inactive-tab');
    contentSecondTabFirstSection.classList.remove('active-content-tab');
    contentSecondTabFirstSection.classList.add('inactive-content-tab');


    thirdTabFirstSection.classList.remove('inactive-tab');
    thirdTabFirstSection.classList.add('active-tab');
    contentThirdTabFirstSection.classList.remove('inactive-content-tab');
    contentThirdTabFirstSection.classList.add('active-content-tab');

    fourthTabFirstSection.classList.remove('active-tab');
    fourthTabFirstSection.classList.add('inactive-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');

}

function clickFourthTabFirstSection () {
    firstTabFirstSection.classList.remove('active-tab');
    firstTabFirstSection.classList.add('inactive-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');
    
    secondTabFirstSection.classList.remove('active-tab');
    secondTabFirstSection.classList.add('inactive-tab');
    contentSecondTabFirstSection.classList.remove('active-content-tab');
    contentSecondTabFirstSection.classList.add('inactive-content-tab');

    thirdTabFirstSection.classList.remove('active-tab');
    thirdTabFirstSection.classList.add('inactive-tab');
    contentThirdTabFirstSection.classList.remove('active-content-tab');
    contentThirdTabFirstSection.classList.add('inactive-content-tab');

    fourthTabFirstSection.classList.remove('inactive-tab');
    fourthTabFirstSection.classList.add('active-tab');
    contentFourthTabFirstSection.classList.remove('inactive-content-tab');
    contentFourthTabFirstSection.classList.add('active-content-tab');
}


function clickFirstTabSecondSection () {
    firstTabSecondSection.classList.remove('inactive-tab');
    firstTabSecondSection.classList.add('active-tab');
    
    secondTabSecondSection.classList.remove('active-tab');
    secondTabSecondSection.classList.add('inactive-tab');
}

function clickSecondTabSecondSection () {
    firstTabSecondSection.classList.remove('active-tab');
    firstTabSecondSection.classList.add('inactive-tab');
    
    secondTabSecondSection.classList.remove('inactive-tab');
    secondTabSecondSection.classList.add('active-tab');
}