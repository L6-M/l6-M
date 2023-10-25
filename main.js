const firstTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(1)');
const secondTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(2)');
const thirdTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(3)');
const fourthTabFirstSection = document.querySelector('.imAlxy-section__tabs-tab:nth-child(4)');

firstTabFirstSection.addEventListener('click', clickFirstTabFirstSection);
secondTabFirstSection.addEventListener('click', clickSecondTabFirstSection);
thirdTabFirstSection.addEventListener('click', clickThirdTabFirstSection);
fourthTabFirstSection.addEventListener('click', clickFourthTabFirstSection)

function clickFirstTabFirstSection (){
    firstTabFirstSection.classList.add('active-tab');
    
    secondTabFirstSection.classList.add('inactive-tab');
    secondTabFirstSection.classList.remove('active-tab');

    thirdTabFirstSection.classList.add('inactive-tab');
    thirdTabFirstSection.classList.remove('active-tab');

    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
}

function clickSecondTabFirstSection (){
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    
    secondTabFirstSection.classList.add('active-tab');

    thirdTabFirstSection.classList.add('inactive-tab');
    thirdTabFirstSection.classList.remove('active-tab');

    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
}

function clickThirdTabFirstSection (){
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    
    secondTabFirstSection.classList.add('inactive-tab');
    secondTabFirstSection.classList.remove('active-tab');

    thirdTabFirstSection.classList.add('active-tab');

    fourthTabFirstSection.classList.add('inactive-tab');
    fourthTabFirstSection.classList.remove('active-tab');
}

function clickFourthTabFirstSection (){
    firstTabFirstSection.classList.add('inactive-tab');
    firstTabFirstSection.classList.remove('active-tab');
    
    secondTabFirstSection.classList.add('inactive-tab');
    secondTabFirstSection.classList.remove('active-tab');

    thirdTabFirstSection.classList.add('inactive-tab');
    thirdTabFirstSection.classList.remove('active-tab');

    fourthTabFirstSection.classList.add('active-tab');
}
