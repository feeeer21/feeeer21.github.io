function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar el login con credenciales predefinidas
    if (username === "alumno" && password === "2024") {
        document.getElementById('login').style.display = "none";
        document.getElementById('course-content').style.display = "block";
    } else {
        document.getElementById('error-message').textContent = "Usuario o contraseña incorrectos.";
    }
}

function startQuiz() {
    document.getElementById('course-content').style.display = "none";
    document.getElementById('quiz').style.display = "block";
}

function submitQuiz() {
    const form = document.getElementById('quiz-form');
    const data = new FormData(form);
    let score = 0;

    // Calcular la puntuación de las respuestas
    data.forEach(value => {
        score += parseInt(value);
    });

    document.getElementById('score').textContent = "Tu calificación es: " + score + "/5";
}
