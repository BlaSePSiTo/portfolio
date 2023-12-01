// Simula el efecto de escribir en el párrafo
const descriptionElement = document.getElementById('description');
const textArray = [
    "Soy David V, un desarrollador web especializado en lenguajes frontend como JavaScript y backend como PHP.",
    "Con experiencia independiente, he creado 'DvSpace', una red social basada en PHP.",
    "Destaco por mi enfoque mobile-first, priorizando la experiencia en dispositivos móviles.",
    "Siempre aprendiendo y actualizándome, fusiono creatividad y funcionalidad en cada línea de código.",
    "Explora mi portfolio para descubrir cómo elevar tus ideas web al siguiente nivel."
];
let index = 0;

function typeWriter() {
    const currentText = textArray[index];
    const speed = 30;

    if (currentText.length > 0) {
        descriptionElement.innerHTML += currentText.charAt(0);
        textArray[index] = currentText.substring(1);
    } else if (index < textArray.length - 1) {
        descriptionElement.innerHTML += "<br>";
        index = (index + 1) % textArray.length;
    }

    setTimeout(typeWriter, speed);
}

setTimeout(function () {
    typeWriter();
},5500)


function toggleMenu() {
    $(".overlay").slideToggle('slow');
}