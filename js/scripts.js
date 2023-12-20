const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

const imagesContainer = document.querySelector('.images');
const previewsContainer = document.querySelector('.previews');

for (let i = 0; i < images.length; i++){
    let divClasses = 'slider';
    let previewClasses = 'preview';

    if (i == 0){
        divClasses += ' visible';
        previewClasses += ' active';
    }

    imagesContainer.innerHTML +=  ` 
    <div class="${divClasses}">
        <img src="${images[i].url}" alt="">

        <div class="description">
            <h3>
                ${images[i].title}
            </h3>
            <p>
                ${images[i].description}
            </p>
        </div>
    </div>
    `;

    previewsContainer.innerHTML +=  ` 
    <div class="${previewClasses}">
        <img src="${images[i].url}" alt="">
    </div>
    `;
};

const allSliders = document.querySelectorAll('.slider');
const allPreviews = document.querySelectorAll('.preview');

let visibleSlider = 0;

for (let i = 0; i < allPreviews.length; i++){
    allPreviews[i].addEventListener('click', function(){
        allSliders[visibleSlider].classList.remove('visible');
        allPreviews[visibleSlider].classList.remove('active');

        visibleSlider = i;

        allSliders[visibleSlider].classList.add('visible');
        allPreviews[visibleSlider].classList.add('active');

    })
}

const prevButton = document.querySelector('.prev-button');

prevButton.addEventListener('click', function(){
    allSliders[visibleSlider].classList.remove('visible');
    allPreviews[visibleSlider].classList.remove('active');

    if (visibleSlider > 0){
        visibleSlider--;
    }
    else if(visibleSlider == 0){
        visibleSlider = allSliders.length - 1;
    }
    allSliders[visibleSlider].classList.add ('visible');
    allPreviews[visibleSlider].classList.add('active');
});

const nextButton = document.querySelector('.next-button');

nextButton.addEventListener('click', function(){
    allSliders[visibleSlider].classList.remove('visible');
    allPreviews[visibleSlider].classList.remove('active');

    if (visibleSlider < (allSliders.length - 1)){
        visibleSlider++;
    }
    else if(visibleSlider == (allSliders.length - 1)){
        visibleSlider = 0;
    }
    allSliders[visibleSlider].classList.add ('visible');
    allPreviews[visibleSlider].classList.add('active');
});

