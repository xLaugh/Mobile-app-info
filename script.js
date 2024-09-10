document.addEventListener('DOMContentLoaded', function() {
var filtreBtn = document.getElementById('filtreBtn');
filtreBtn.addEventListener('click', function() {
    window.location.href = 'categorie/index.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var actus = document.querySelectorAll('.actu');

    actus.forEach(function(actu) {
        actu.addEventListener('click', function() {
            var id_actu = this.dataset.id_actu;
            //window.location.href = 'article/article.php?id_actu=' + id_actu;
            window.location.href = 'article/article.html';
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const triButton = document.getElementById('triButton');
    const optionsContainer = document.getElementById('optionsContainer');
    const options = document.querySelectorAll('.option');

    triButton.addEventListener('click', function () {
        optionsContainer.style.display = (optionsContainer.style.display === 'flex') ? 'none' : 'flex';
    });

    options.forEach(function (option) {
        option.addEventListener('click', function () {
            options.forEach(function (o) {
                o.classList.remove('selected');
            });
            option.classList.add('selected');
            optionsContainer.style.display = 'none';

            const selectedOption = option.getAttribute('data-option');
            localStorage.setItem('selectedOption', selectedOption);
        });
    });

    const storedOption = localStorage.getItem('selectedOption');
    if (storedOption) {
        const selectedOptionElement = document.querySelector(`.option[data-option="${storedOption}"]`);
        if (selectedOptionElement) {
            selectedOptionElement.classList.add('selected');
        }
    }
});
