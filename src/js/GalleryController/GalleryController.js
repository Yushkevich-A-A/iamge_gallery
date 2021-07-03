import FieldImages from "../FieldImages/FieldImages";

export default class GalleryController {
  constructor(form) {
    this.form = form;
    this.arrURL = [];
    
    this.init();
  }

  init() {
    this.drawGalleryContainer();
    this.addListeners()
  }

  drawGalleryContainer() {
    this.GalleryContainer = document.createElement('div');
    this.GalleryContainer.classList.add('gallery-container');
    document.body.appendChild(this.GalleryContainer)
  }

  addListeners() {
    document.addEventListener('click', event => {
      event.preventDefault();
      if(event.target.closest('.button')) {
        this.checkValidityURL();
      }

      if(event.target.closest('.remove-button')) {
        this.GalleryContainer.removeChild(event.target.closest('.container-img'));
      }
    });

    document.addEventListener('keydown', event => {
      if (event.code === 'Enter') {
        this.form.button.click();
      }
    })
  }

  checkValidityURL() {
    this.form.removeError();
    const img = document.createElement('img');
    img.src = this.form.inputURL.value;
    img.onload = () => new FieldImages(img, this.form.inputText);
    img.onerror = () => this.form.addError();
    this.form.resetValues();
  }
}