const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencytasks = document.getElementsByClassName('emergency-tasks')[0];
emergencytasks.style.backgroundColor = 'salmon';

const noemergencytasksh3 = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noemergencytasksh3.length; index += 1) {
    noemergencytasksh3[index].style.backgroundColor = 'black';
}

const noemergencytasks = document.querySelector('.no-emergency-tasks');
noemergencytasks.style.backgroundColor = 'yellow';


const emergencytasksh3 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencytasksh3.length; index += 1) {
    emergencytasksh3[index].style.backgroundColor = 'purple';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'darkgreen';
