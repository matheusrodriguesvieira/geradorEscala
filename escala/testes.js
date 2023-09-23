var edit = false;
// var campoTexto = document.querySelector('[campoDeTroca]');
var labelContainer = document.querySelectorAll('.containerLabel');
var btnEditar = document.querySelector('[editar]');
var btnCancelar = document.querySelector('[cancelar]');
var btnSalvar = document.querySelector('[salvar]');
var controlesContainer = document.querySelector('.controles');


function removerCheck() {
    labelContainer.forEach((element, index) => {
        let label = document.querySelector(`[for = input${index + 1}]`);
        element.innerHTML = '';
        element.appendChild(label);
        // labelContainer.innerHTML = `ola`;
    });
}

function renderizarControles(renderizar) {
    let campoTexto = document.querySelector('[campoDeTroca]');
    if (renderizar) {
        campoTexto.hidden = false
        btnCancelar.hidden = false
        btnSalvar.hidden = false

        campoTexto.disabled = false;
        btnCancelar.disabled = false;
        btnSalvar.disabled = false;
    } else {
        campoTexto.hidden = true
        btnCancelar.hidden = true
        btnSalvar.hidden = true
        
        campoTexto.disabled = true;
        btnCancelar.disabled = true;
        btnSalvar.disabled = true;
    }
}


btnEditar.addEventListener('click', () => {
    console.log('clicou');
    let campoTexto = document.querySelector('[campoDeTroca]');

    edit = !edit;
    
    renderizarControles(true);

    if (edit) {
        labelContainer.forEach((element) => {
            element.innerHTML = `<input type="checkbox" name="1" id="input1">` + element.innerHTML;
        });

    } else{
        // labelContainer.forEach((element, index) => {
        //     let label = document.querySelector(`[for = input${index + 1}]`);
        //     element.innerHTML = '';
        //     element.appendChild(label);
        //     // labelContainer.innerHTML = `ola`;
        // });
        renderizarControles(false);
        removerCheck()
    }
});

btnSalvar.addEventListener('click', () => {
    edit = !edit;
    let checkboxes = document.querySelectorAll('[type = checkbox]');
    let campoTexto = document.querySelector('[campoDeTroca]');

    // btnCancelar.disabled = true;
    // btnSalvar.disabled = true;
    // campoTexto.disabled = true;

    checkboxes.forEach((element, index) => {
        if (element.checked) {
            let label = document.querySelector(`[for = input${index + 1}]`);
            label.innerHTML = campoTexto.value;
        }
    });

    campoTexto.value = "";
    renderizarControles(false);
    removerCheck()
});

btnCancelar.addEventListener('click', () => {
    edit = !edit;
    let campoTexto = document.querySelector('[campoDeTroca]');
    // btnCancelar.disabled = true;
    // btnSalvar.disabled = true;
    // campoTexto.disabled = false;
    campoTexto.value = "";

    renderizarControles(false);
    removerCheck()
});