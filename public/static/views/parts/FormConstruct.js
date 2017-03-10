/**
 * Created by pacman29 on 28.02.17.
 */
(function () {
    window.FormConstruct = function (opt) {
        let inputs = opt.inputs;
        let buttons = opt.buttons;
        let form = document.createElement('form');
        form.setAttribute('class', 'input_form');
        let div_inputs = document.createElement('div');
        div_inputs.setAttribute('class', 'inputs');

        div_inputs.innerHTML = `<h1>${opt.text.toString()}</h1>`;

        inputs.forEach(iter => {
            let div = document.createElement('div');
            div.appendChild(window.InputContruct(iter));
            div_inputs.appendChild(div);
        });

        form.appendChild(div_inputs);

        let div_buttons = document.createElement('div');
        div_buttons.setAttribute('class', 'buttons row')
        buttons.forEach(iter => {
            div_buttons.appendChild(window.ButtonConstruct(iter));
        });
        form.appendChild(div_buttons);

        return form;
    };
}());
