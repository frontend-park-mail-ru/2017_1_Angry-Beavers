/**
 * Created by pacman29 on 16.02.17.
 */
(function () {
    // import
    class Form {
        /*
         * Конструктор класса Form
         */
        constructor(options = {data: {}}) {
            this.data = options.data;
            this.el = options.el;

            this.render();
        }

        render() {
            this.updateHtml();
            this.installControls();
        }

        /*
         * Вернуть поля формы
         * @return {string}
         */
        getFields() {
            const {fields = []} = this.data;

            return fields.map(field => {
                return `<div class="col-lg-12">
                            <input ${field.required ? 'required' : ''} 
                                placeholder="${field.placeholder}" 
                                type="${field.type}" 
                                name="${field.name}">
                        </div>`;
            }).join(' ');
        }

        /**
         * Обновить html компонента
         */
        updateHtml() {
            this.el.innerHTML = `
                <form class=${this.data.class}>
					<h1>${this.data.title}</h1>
					<div>
						${this.getFields()}
					</div>
					<div class="controls">
					    <div class="row">
					        <div>
					        
                            </div>
					    </div>
					</div>
				<form>
			`;
        }

        /*
         * Вставить управляющие элементы в форму
         */
        installControls() {
            const {controls = []} = this.data;

            controls.forEach(data => {
                const control = new window.Button({text: data.text, attrs: data.attrs}).render();
                this.el.querySelector('div.row').appendChild(control.el);
            });
        }

        /*
         * Подписка на событие
         * @param {string} type - имя события
         * @param {function} callback - коллбек
         */
        on(type, callback) {
            this.el.addEventListener(type, callback);
        }

        /*
         * Взять данные формы
         * @return {object}
         */
        getFormData() {
            const form = this.el.querySelector('form');
            const elements = form.elements;
            const fields = {};

            Object.keys(elements).forEach(element => {
                const node = elements[element];

                if (!node.name || node.tagName.toLowerCase() !== 'input') {
                    return;
                }

                fields[node.name] = node.value;
                console.log("LOGIN: ");
                console.log(node.value);
            });

            return fields;
        }
    }
    window.Form = Form;
}())();
