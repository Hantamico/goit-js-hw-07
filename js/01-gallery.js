import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const imagesMarkup = addImagesMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', imagesMarkup);

galleryEl.addEventListener('click', onGalleryClick);


function addImagesMarkup(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) =>
            `<li class="gallery__item">
                <a class="gallery__link" href="${original}" >
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </li>`).join(' ');
};



function onGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return
    };

    const instance = basicLightbox.create(`
     <img src="${evt.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    galleryEl.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
        instance.close();
        };
    });  
} 



