const http = require("http");

const server = http.createServer((req, res) => {
    let html = `
    <!doctype html>
    <html dir="ltr" lang="pt">
    <head>
        <meta charset="utf-8">
        <title>Portfolio</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: chocolate;
        }
        .container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }
        h1 {
            margin-bottom: 10px;
        }
        button {
            padding: 10px 20px;
            background-color: #007bff;
            border: none;
            color: white;
            cursor: pointer;
            border-radius: 5px;
        }
    
        button:hover {
            background-color: #0056b3;
        }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Programas</h1>

            <button id="calculateButton">Calculadora</button>
            <button id="colorButton">Color Picker</button>
            <button id="equacaoButton">Equações</button>
            <button id="imgButton">Troca Imagens</button>
            <button id="letraButton">Letras Maiusculas</button>
        </div>

        <script>
            calculateButton.addEventListener("click", () => {
                document.location.href = '../DOM/Calculadora.html';
            }
            colorButton.addEventListener("click", () => {
                document.location.href = '../DOM/CorDeFundo.html';
            }
            equacaoButton.addEventListener("click", () => {
                document.location.href = '../DOM/EntradaSaida.html';
            }
            imgButton.addEventListener("click", () => {
                document.location.href = '../DOM/ImgLadoALado.html';
            }
            letraButton.addEventListener("click", () => {
                document.location.href = '../DOM/Maiuscula.html';
            }
        </script>
    </body>
    </html>`

    res.end(html)
})

server.listen(3000, () => {
    console.log("Funcionando");
})