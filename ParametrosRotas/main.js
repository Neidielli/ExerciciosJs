// Atividades Web - Middleware, parâmetros e rotas
// 1. Crie 2 rotas e apresente uma hiperligação (link) em cada uma delas para a outra.


// 2. Crie uma rota que ao ser acessada faz um redirecionamento para uma das 2 rotas
// criadas anteriormente. O sistema deve em uma requisição redirecionar para a rota A e
// na segunda requisição redirecionar para a rota B, e assim sucessivamente.


// 3. Crie uma rota que receba um texto por parâmetro GET (query) e exiba o mesmo
// invertido.


// 4. Crie uma rota que receba um texto por parâmetro da URL (params) e exiba o mesmo
// invertido.


// 5. Considerando as 4 operações básicas (adição, subtração, multiplicação e divisão), crie
// uma única rota utilizando os parâmetros que receba 2 valores enviados por GET e exiba
// na tela o resultado da operação desejada. Exemplo:
// /operacao/soma?x=1&y=2
// /operacao/subtracao?x=1&y=2
// /operacao/multiplicacao?x=1&y=2
// /operacao/divisao?x=1&y=2
// Observação: O nome da operação deve ser tratado como um parâmetro


// 6. Crie uma página estática em HTML que exiba um formulário com 2 campos: um para
// digitar o nome do usuario e outro para a digitação da senha. Torne este este recurso
// público e crie uma rota alternativa que também disponibiliza o mesmo arquivo.


// 7. Crie uma rota que receba 2 valores por POST (usuário e senha) e faça a validação da
// mesma. Se a senha for 2 vezes o nome do usuário, exiba uma mensagem de que o
// usuário possui permissão de acesso, caso contrário informe que não possui. Exemplo:
// usuário: root, senha: rootroot, acesso ok.


// 8. Escreva um middleware de rota que faz a validação e conversão de um código recebido
// por parâmetro pelo nome :id. O código deve ser positivo e par, caso contrário o
// middleware deve retornar uma mensagem de erro. Este middleware deve funcionar em
// conjunto em um rota que irá exibir o código informado.


// 9. Escreva um middleware de aplicação que realiza a contagem do número de requisições
// recebidas pelo servidor. Em seguida, crie uma rota que exiba este número.


// 10. Crie uma rota que receba um número indeterminado de valores numéricos por GET e
// informe quantos e a média dos valores recebidos.