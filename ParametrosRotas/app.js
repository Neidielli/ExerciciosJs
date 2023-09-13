const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Porta em que a aplicação irá rodar

// 1. Crie 2 rotas e apresente uma hiperligação (link) em cada uma delas para a outra.
app.get('/rota1', (req, res) => {
  res.send('Esta é a Rota 1. <a href="/rota2">Ir para Rota 2</a>');
});

app.get('/rota2', (req, res) => {
  res.send('Esta é a Rota 2. <a href="/rota1">Ir para Rota 1</a>');
});

// 2. Crie uma rota que ao ser acessada faz um redirecionamento para uma das 2 rotas
// criadas anteriormente. O sistema deve em uma requisição redirecionar para a rota A e
// na segunda requisição redirecionar para a rota B, e assim sucessivamente.
let lastRoute = 'rota2';

function alternarRota() {
  lastRoute = lastRoute === 'rota1' ? 'rota2' : 'rota1';
  return lastRoute;
}

app.get('/redirecionar', (req, res) => {
  const novaRota = alternarRota();
  res.redirect(`/${novaRota}`);
});

// 3. Crie uma rota que receba um texto por parâmetro GET (query) e exiba o mesmo
// invertido.
app.get('/inverter', (req, res) => {
  const texto = req.query.texto;

  if (!texto) {
    res.send('Por favor, forneça um texto para inverter.');
  } else {
    const textoInvertido = texto.split('').reverse().join('');
    res.send(`Texto invertido: ${textoInvertido}`);
  }
});

// 4. Crie uma rota que receba um texto por parâmetro da URL (params) e exiba o mesmo
// invertido.
app.get('/inverter/:texto', (req, res) => {
  const texto = req.params.texto;

  if (!texto) {
    res.send('Por favor, forneça um texto para inverter.');
  } else {
    const textoInvertido = texto.split('').reverse().join('');
    res.send(`Texto invertido: ${textoInvertido}`);
  }
});

// 5. Considerando as 4 operações básicas (adição, subtração, multiplicação e divisão), crie
// uma única rota utilizando os parâmetros que receba 2 valores enviados por GET e exiba
// na tela o resultado da operação desejada. 
// Observação: O nome da operação deve ser tratado como um parâmetro
app.get('/operacao/:operador', (req, res) => {
  const operador = req.params.operador;
  const x = parseFloat(req.query.x);
  const y = parseFloat(req.query.y);

  if (isNaN(x) || isNaN(y)) {
    res.send('Por favor, forneça valores numéricos válidos para x e y.');
  } else {
    let resultado;

    switch (operador) {
      case 'soma':
        resultado = x + y;
        break;
      case 'subtracao':
        resultado = x - y;
        break;
      case 'multiplicacao':
        resultado = x * y;
        break;
      case 'divisao':
        if (y !== 0) {
          resultado = x / y;
        } else {
          res.send('Divisão por zero não é permitida.');
          return;
        }
        break;
      default:
        res.send('Operação não reconhecida. Use soma, subtracao, multiplicacao ou divisao.');
        return;
    }

    res.send(`Resultado da operação ${operador}: ${resultado}`);
  }
});

// 6. Crie uma página estática em HTML que exiba um formulário com 2 campos: um para
// digitar o nome do usuario e outro para a digitação da senha. Torne este este recurso
// público e crie uma rota alternativa que também disponibiliza o mesmo arquivo.
app.use(express.static('public'));

app.get('/formulario', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// 7. Crie uma rota que receba 2 valores por POST (usuário e senha) e faça a validação da
// mesma. Se a senha for 2 vezes o nome do usuário, exiba uma mensagem de que o
// usuário possui permissão de acesso, caso contrário informe que não possui. Exemplo:
// usuário: root, senha: rootroot, acesso ok.

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/validar', (req, res) => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    res.send('Por favor, forneça um usuário e senha.');
  } else {
    if (senha === usuario + usuario) {
      res.send('Acesso concedido. O usuário possui permissão de acesso.');
    } else {
      res.send('Acesso negado. O usuário não possui permissão de acesso.');
    }
  }
});

// 8. Escreva um middleware de rota que faz a validação e conversão de um código recebido
// por parâmetro pelo nome :id. O código deve ser positivo e par, caso contrário o
// middleware deve retornar uma mensagem de erro. Este middleware deve funcionar em
// conjunto em um rota que irá exibir o código informado.

// Middleware
function validarCodigo(req, res, next) {
  const codigo = parseInt(req.params.id);

  if (isNaN(codigo)) {
    res.status(400).send('Código deve ser um número.');
  } else if (codigo <= 0) {
    res.status(400).send('Código deve ser positivo.');
  } else if (codigo % 2 !== 0) {
    res.status(400).send('Código deve ser par.');
  } else {
    req.codigoValido = codigo;
    next(); 
  }
}

// Middleware de validação
app.get('/codigo/:id', validarCodigo, (req, res) => {
  const codigo = req.codigoValido;
  res.send(`Código válido: ${codigo}`);
});

// 9. Escreva um middleware de aplicação que realiza a contagem do número de requisições
// recebidas pelo servidor. Em seguida, crie uma rota que exiba este número.

let contadorRequisicoes = 0;
app.use((req, res, next) => {
  contadorRequisicoes++;
  console.log(`Número total de requisições recebidas: ${contadorRequisicoes}`);
  next(); 
});

app.get('/contador', (req, res) => {
  res.send(`Número total de requisições recebidas: ${contadorRequisicoes}`);
});

// 10. Crie uma rota que receba um número indeterminado de valores numéricos por GET e
// informe quantos e a média dos valores recebidos.

app.get('/calcular-media', (req, res) => {
  const valores = req.query.valores;

  if (!valores) {
    res.send('Por favor, forneça valores numéricos na query.');
    return;
  }

  const valoresNumericos = valores.split(',').map(Number);

  if (valoresNumericos.some(isNaN)) {
    res.send('Um ou mais valores não são numéricos.');
    return;
  }

  const quantidadeValores = valoresNumericos.length;
  const somaValores = valoresNumericos.reduce((total, valor) => total + valor, 0);
  const media = somaValores / quantidadeValores;

  res.send(`Quantidade de valores recebidos: ${quantidadeValores}<br>Média dos valores: ${media}`);
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
