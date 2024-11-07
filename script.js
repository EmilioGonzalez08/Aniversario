function checkAnswer1() {
    const answer1 = document.getElementById("answer1").value.toLowerCase().trim();
    
    // Definimos las respuestas válidas en un arreglo
    const validAnswers = [
        "16 de noviembre",
        "dieciseis de noviembre"
    ];

    // Verificamos si la respuesta ingresada coincide con alguna de las válidas
    if (validAnswers.includes(answer1)) {
        document.getElementById("feedback1").textContent = "¡Correcto! Avanza al siguiente acertijo.";
        document.getElementById("puzzle1").classList.add("hidden");
        document.getElementById("puzzle2").classList.remove("hidden");
    } else {
        document.getElementById("feedback1").textContent = "Inténtalo de nuevo.";
    }
}


function checkAnswer2() {
    const answer2 = document.getElementById("answer2").value.toLowerCase().trim();
    
    // Definimos las respuestas válidas en un arreglo
    const validAnswers = [
        "resta 3 letras",
        "resta tres letras"
    ];

    // Verificamos si la respuesta ingresada coincide con alguna de las válidas
    if (validAnswers.includes(answer2)) {
        document.getElementById("feedback2").textContent = "¡Correcto! Avanza al siguiente acertijo.";
        document.getElementById("puzzle2").classList.add("hidden");
        document.getElementById("puzzle3").classList.remove("hidden");
    } else {
        document.getElementById("feedback2").textContent = "Inténtalo de nuevo.";
    }
}

function checkAnswer3() {
    const answer3 = document.getElementById("answer3").value.toLowerCase().trim();
    
    // Definimos las respuestas válidas en un arreglo
    const validAnswers = [
        "fin de la prueba"
    ];

    // Verificamos si la respuesta ingresada coincide con alguna de las válidas
    if (validAnswers.includes(answer3)) {
        document.getElementById("feedback3").textContent = "¡Correcto! Avanza al siguiente acertijo.";
        document.getElementById("puzzle3").classList.add("hidden");
        document.getElementById("message").classList.remove("hidden");
    } else {
        document.getElementById("feedback3").textContent = "Inténtalo de nuevo.";
    }
}

