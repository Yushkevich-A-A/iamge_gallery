export default class FieldInput {
  constructor() {
    // this.inputBox;

    this.createForm();
  }

  createForm() {
    this.formContainer = document.createElement('div');
    this.formContainer.classList.add('form-container');

    this.form = document.createElement('form');
    this.form.classList.add('form');
    this.form.innerHTML = `<div class="input-container name-container">
                            <label class="label" for="name">Название</label>
                            <input  type="text" class="input name" id="name"> 
                          </div>
                          <div class="input-container address-container">
                            <label class="label" for="url-address">Ссылка на изображение</label>
                            <input  type="text" class="input url-address" id="url-address"> 
                            <div class="url-error">Неверный URL изображения</div>
                          </div>
                          <div class="button-container">
                            <button class="button">Добавить</button>
                          </div>`;

    this.formContainer.appendChild(this.form);
    document.body.appendChild(this.formContainer);

    this.inputName = document.querySelector('.name');
    this.inputURL = document.querySelector('.url-address');
    this.button = document.querySelector('.button');
    this.error = document.querySelector('.url-error');
  }

  addError() {
    this.error.classList.add('active');
  }

  removeError() {
    this.error.classList.remove('active');
  }

  resetValues() {
    this.inputName.value = '';
    this.inputName.blur();
    this.inputURL.value = '';
    this.inputURL.blur();
  }
}
