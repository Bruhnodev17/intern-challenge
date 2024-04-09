## Descrição do Desafio: CRUD de Produto com Angular, TypeScript, PHP, Laravel e PostgreSQL

Neste desafio, você será responsável por desenvolver um aplicativo de CRUD (Create, Read, Update, Delete) de produtos, utilizando uma arquitetura desacoplada entre o frontend e o backend. O frontend será desenvolvido em Angular, utilizando TypeScript como linguagem de programação, enquanto o backend será desenvolvido em PHP Laravel. O banco de dados utilizado será o PostgreSQL.

### Requisitos do CRUD de Produto:

1. O aplicativo deverá permitir a criação, leitura, atualização e exclusão de produtos.
2. Os campos do produto são os seguintes:
   - Nome do Produto: uma string que representa o nome do produto.
   - Categoria: uma chave estrangeira que referencia a categoria à qual o produto pertence.
   - Valor do Produto: um número de ponto flutuante que representa o valor monetário do produto.
   - Data de Vencimento: uma data que indica a data limite de validade do produto.
   - Quantidade em Estoque: um número inteiro que representa a quantidade disponível em estoque.
   - Produto Perecível: um valor booleano que indica se o produto é perecível ou não.

3. O frontend deverá apresentar uma interface amigável ao usuário, permitindo que ele visualize, crie, edite e exclua produtos. Será necessário criar formulários para a criação e edição de produtos, além de exibir a lista de produtos existentes.

4. O backend deverá fornecer uma API RESTful para o frontend se comunicar. Será necessário implementar rotas para criar, ler, atualizar e excluir produtos no banco de dados PostgreSQL.

5. O banco de dados PostgreSQL será responsável pelo armazenamento persistente dos produtos. Será necessário criar uma estrutura de tabelas que representam os campos mencionados acima, bem como estabelecer relacionamentos entre as tabelas, como a relação entre produto e categoria.

### Sugestões adicionais:

- Considere implementar validações nos formulários para garantir a integridade dos dados, como a verificação de campos obrigatórios e restrições de tipos.
- Utilize boas práticas de codificação, seguindo os padrões estabelecidos pela comunidade Angular, TypeScript e Laravel.
- Você pode utilizar bibliotecas e frameworks adicionais para facilitar o desenvolvimento, desde que sejam compatíveis com a pilha de tecnologias escolhidas.
- Lembre-se de documentar seu código e fornecer instruções claras sobre como executar a aplicação.

### Como entregar:

- Publicar o projeto no GitHub com a seguinte estrutura de pastas:
  - backend
  - db
  - frontend
  - README

Certifique-se de seguir essas orientações ao criar e entregar seu projeto. Boa sorte!


   ### COMO EXECUTAR A APLICAÇÃO:
    BACKEND     

1- Abra primeiramente o arquivo backend em seu editor de código;<br>
2- Inicie um novo terminal pelo seu editor e use o comando: <b>composer install</b>,e instalar todas as dependências necessárias para rodar seu projeto;<br>
3- Finalmente use o comando <b>php artisan serve</b>, e pronto, a API estará rodando!<br>
4- Caso não ocorra nenhum erro em sua máquina, use o POSTMAN para testar a API e suas requisições, por exemplo, com esse endereço:<br>

  <img width="847" alt="Captura de Tela 2024-04-09 às 13 32 36" src="https://github.com/Bruhnodev17/intern-challenge/assets/150696467/ae495040-a62a-4bdc-ba5a-dd5063574eb0"><br>
5- Se você recebeu algum erro, certifique-se de ter instalado globalmente o <b>composer</b> e o <b>php</b> instalado de forma global em sua máquina!
<br></br>


    FRONTEND

1- Abra em uma nova janela de seu editor de código o arquivo frontend, certifique-se de deixar o backend rodando!;<br>
2- Inicie um novo terminal dentro de seu editor e use o comando <b>npm install</b> eter todas as dependências necessárias para rodar seu projeto;<br>
3- Execute  finalmente o comando <b>ng serve</b> e pronto, seu frontend estará rodando;
4- Caso não ocorra nenhum erro, cheque se a página está abrindo corretamente:<br>
<img width="1261" alt="Captura de Tela 2024-04-09 às 13 52 39" src="https://github.com/Bruhnodev17/intern-challenge/assets/150696467/24a6d586-6963-45d0-95c3-91d002242e4b"><br>

5-Caso receba algum erro, certifique-se de ter instalado globalmente em sua máquina o <b>npm;</b><br>
6- Se a sua página abriu, as aplicações estão interligadas e funcionando de forma dinâmica!<br><br><br>

    POSTGRESsql

    Para executar o backend no banco de dados POSTGRES, vá na pasta do backend em seu arquivo ".env" copie e cole este comando acima das linhas 11 a 16:

        DB_CONNECTION=pgsql
        DB_HOST=127.0.0.1
        DB_PORT=5433
        DB_DATABASE=postgres
        DB_USERNAME=postgres
        DB_PASSWORD=1234

  Voce cria uma nova database com o nome postgre em seu PGAdmin, com a senha 1234 e tenta conectar clicando 2 vezes nela:<br>


  <img width="371" alt="Captura de Tela 2024-04-09 às 14 12 16" src="https://github.com/Bruhnodev17/intern-challenge/assets/150696467/aaa69463-57f8-4fc5-bc62-a24b9b9b0889">

Quando conseguir navegar entre as tabelas, vá até o caminho especificado abaixo (Tables):<br>

<img width="1280" alt="Captura de Tela 2024-04-09 às 14 09 19" src="https://github.com/Bruhnodev17/intern-challenge/assets/150696467/0c6d8670-9113-4e6f-937d-7ec296b5853b"> <br>

  Navegue até a tabela de produtos conforme abaixo e crie as tabelas para vê-las de forma dinâmica em seu banco de dados!

  <img width="1280" alt="Captura de Tela 2024-04-09 às 14 18 28" src="https://github.com/Bruhnodev17/intern-challenge/assets/150696467/1c36cd4d-d567-478a-bcdd-43a384d88a0c">


Feito por: https://github.com/Bruhnodev17
 








