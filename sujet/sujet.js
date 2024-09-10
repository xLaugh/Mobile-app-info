function loading() {
    var sujets = document.querySelectorAll('.sujet');
    for (i=0;i<sujets.length;i++) {
        sujets[i].addEventListener('click', select);
    }
}

function select() {
    if(this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
}