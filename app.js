(function () {
    "use strict";
    const commentTime = 2000;
    const $comment = document.querySelectorAll('.comment-inner');
    let intervalId;
    let currentComment = 1;

    function commentTo(index){
        currentComment = index >= $comment.length-4 || index < 1 ? 0 : index;
        $comment.forEach($elt => $elt.style.transform = `translateX(-${currentComment * 145}%)`);
    }

    function showComment(){
        commentTo(currentComment);
        currentComment++;
    }

    intervalId = setInterval(showComment, commentTime);
    $comment.forEach($elt => $elt.addEventListener('mouseenter', () => clearInterval(intervalId)));
    $comment.forEach($elt => $elt.addEventListener('mouseleave', () => intervalId = setInterval(showComment, commentTime)));
})();


const infoButtons = document.querySelectorAll('.mission-info');

infoButtons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        const tooltip = button.previousElementSibling;
        tooltip.style.display = 'flex';
    });

    button.addEventListener('mouseout', () => {
        const tooltip = button.previousElementSibling;
        tooltip.style.display = 'none';
    });
});

missionButtons = document.querySelectorAll('.mission-button');
missionDiv = document.querySelector('.mission');

missionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id == "sortie-locative-button"){
            missionDiv.style.display = 'none';
            etatsDesLieuxDiv = document.querySelector('#etats-des-lieux');
            etatsDesLieuxDiv.style.display = 'flex';
            window.scrollTo(0, 0);
        }

        else if (button.id == "entree-locative-button"){
            missionDiv.style.display = 'none';
            etatsDesLieuxDiv = document.querySelector('#etats-des-lieux');
            etatsDesLieuxDiv.style.display = 'flex';
            window.scrollTo(0, 0);
        }

        else if (button.id == "acquisitif-usufruit-button"){
            missionDiv.style.display = 'none';
            etatsDesLieuxDiv = document.querySelector('#etats-des-lieux');
            etatsDesLieuxDiv.style.display = 'flex';
            window.scrollTo(0, 0);
        }

        else if (button.id == "evaluation-immobiliere-button"){
            missionDiv.style.display = 'none';
            etatsDesLieuxDiv = document.querySelector('#immobilier');
            etatsDesLieuxDiv.style.display = 'flex';
            window.scrollTo(0, 0);
        }

        else if (button.id == "reception-provisoire-button"){
            missionDiv.style.display = 'none';
            etatsDesLieuxDiv = document.querySelector('#reception-provisoire');
            etatsDesLieuxDiv.style.display = 'flex';
            window.scrollTo(0, 0);
        }

        else if (button.id == "visite-locative-annuelle-button"){
            missionDiv.style.display = 'none';
            etatsDesLieuxDiv = document.querySelector('#visite-locative');
            etatsDesLieuxDiv.style.display = 'flex';
            window.scrollTo(0, 0);
        }

        else if (button.id == "enquete-button"){
            missionDiv.style.display = 'none';
            etatsDesLieuxDiv = document.querySelector('#enquete');
            etatsDesLieuxDiv.style.display = 'flex';
            window.scrollTo(0, 0);
        }
    });
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.header');
    var logoImg = document.querySelector('.header__logo img');

    if (window.scrollY > 0) {
        logoImg.classList.add('scrolled');
        navbar.classList.add('scrolled');
    } else {
        logoImg.classList.remove('scrolled');
        navbar.classList.remove('scrolled');
    }
});