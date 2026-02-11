const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const display = document.querySelector('.display');
        const valorBoton = boton.textContent;

        let valorDisplay = display.textContent;

        display.textContent = valorDisplay + valorBoton;
        //alert(valorBoton) ggvg
    })

})



