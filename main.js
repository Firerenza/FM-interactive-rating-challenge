const ratingOptions = document.querySelectorAll('.rating');
const submitButton = document.querySelector('.button');
const chosenRating = document.getElementById('result');
const pre_container = document.querySelector('.pre_container');
const post_container = document.querySelector('.post_container');

let result = null;

ratingOptions.forEach((ratingOptions)=> {
    ratingOptions.addEventListener('click', (e) => {
        const active = document.querySelector('.clicked');
        if (active) {
            active.classList.remove('clicked');
        }
        const card = e.target;
        card.classList.add('clicked');
        result = e.target.innerText;
    });
});

submitButton.addEventListener('click', () => {
    if(result) {
        chosenRating.innerText = result;
        pre_container.style.display = "none";
        post_container.style.display = "flex";
    }
});


