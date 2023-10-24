    const pantalla = document.querySelector(".pantalla");
    const botones = document.querySelectorAll(".boton");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const botonOn = boton.textContent;

            if(boton.id === "borrar"){

                if(pantalla.textContent.length === 1 || pantalla.textContent === "¡ERROR!"){
                    pantalla.textContent ="0";

                }else{
                
                    pantalla.textContent = pantalla.textContent.slice(0, -1);
                    
                }
                return;   
            }

            if(boton.id === "igual") {
                try {
                    const expresion = pantalla.textContent;
                    if (expresion.includes("//")) {
                        pantalla.textContent = "¡ERROR!";
                    } else {
                        pantalla.textContent = eval(expresion);
                    }
                } catch (error) {
                    pantalla.textContent = "¡ERROR!";
                }
                return;
            }

            if(pantalla.textContent === "0" || pantalla.textContent === "¡ERROR!"){
                pantalla.textContent = botonOn;
            
            }else{
                pantalla.textContent += botonOn
            }

            if(boton.id === "limpiar"){
                pantalla.textContent ="0";
                return;
            }

            
        })
    })