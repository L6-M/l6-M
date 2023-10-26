const firstTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(1)');
const secondTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(2)');
const thirdTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(3)');
const fourthTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(4)');
const contentFirstTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(1)');
const contentSecondTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(2)');
const contentThirdTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(3)');
const contentFourthTabFirstSection = document.querySelector ('.imAlxy-section__content > li:nth-child(4)');

firstTabFirstSection.addEventListener('click', clickFirstTabFirstSection);
secondTabFirstSection.addEventListener('click', clickSecondTabFirstSection);
thirdTabFirstSection.addEventListener('click', clickThirdTabFirstSection);
fourthTabFirstSection.addEventListener('click', clickFourthTabFirstSection)

function clickFirstTabFirstSection (){
    firstTabFirstSection.classList.add('active-tab');
    contentFirstTabFirstSection.classList.add('active-content-tab')
    contentFirstTabFirstSection.classList.remove('inactive-content-tab')
    
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

function clickSecondTabFirstSection (){
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');
    
    secondTabFirstSection.classList.add('active-tab');
    contentSecondTabFirstSection.classList.add('active-content-tab')
    contentSecondTabFirstSection.classList.remove('inactive-content-tab')


    thirdTabFirstSection.classList.add('inactive-tab');
    thirdTabFirstSection.classList.remove('active-tab');
    contentThirdTabFirstSection.classList.add('inactive-content-tab');
    contentThirdTabFirstSection.classList.remove('active-content-tab');

    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');

}

function clickThirdTabFirstSection (){
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    contentFirstTabFirstSection.classList.add('inactive-content-tab');
    contentFirstTabFirstSection.classList.remove('active-content-tab');

    secondTabFirstSection.classList.add('inactive-tab');
    secondTabFirstSection.classList.remove('active-tab');
    contentSecondTabFirstSection.classList.add('inactive-content-tab');
    contentSecondTabFirstSection.classList.remove('active-content-tab');


    thirdTabFirstSection.classList.add('active-tab');
    contentThirdTabFirstSection.classList.add('active-content-tab')
    contentThirdTabFirstSection.classList.remove('inactive-content-tab')

    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
    contentFourthTabFirstSection.classList.add('inactive-content-tab');
    contentFourthTabFirstSection.classList.remove('active-content-tab');

}

function clickFourthTabFirstSection (){
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
    contentFourthTabFirstSection.classList.add('active-content-tab')
    contentFourthTabFirstSection.classList.remove('inactive-content-tab')
}
