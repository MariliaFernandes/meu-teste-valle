# Event Management App
 Back-End:
Implementação de uma API RESTful em Node.js.
Autenticação de usuários utilizando JWT (somente login e registro).
CRUD básico de eventos (criação, leitura e listagem de eventos).
Armazenamento de dados em  MySQL.
Documentação dos endpoints básicos usando Postman.
2. Front-End:
Uma interface web básica utilizando React/React-native e tailwind
Tela de login/registro conectada ao back-end.
Tela de dashboard para visualização de eventos.
Formulário para criação de eventos, consumindo a API do back-end.
Interface adaptada para desktop e dispositivos móveis.

## Como Rodar o Projeto Localmente

Para executar a aplicação localmente, siga os passos abaixo:

### Pré-requisitos

- Certifique-se de ter o [Docker](https://www.docker.com/get-started) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados no seu sistema.
- Tenha o [Node.js](https://nodejs.org/) instalado, caso você deseje rodar diretamente sem Docker.

### Passos para Executar

1. **Clone o Repositório**:
   Abra o terminal e execute o seguinte comando:
   ```bash
   git clone <https://github.com/MariliaFernandes/meu-teste-valle.git>
   cd <NOME_DA_PASTA_CLONADA>
Configurar o Docker: No diretório do projeto, onde o arquivo docker-compose.yml está localizado, execute:

bash
Copiar código
docker-compose up
Isso irá construir as imagens necessárias e iniciar os serviços de back-end, front-end e banco de dados.

Acessar a Aplicação:

O front-end estará disponível em http://localhost:3001.
O back-end estará disponível em http://localhost:3000.
Observações
Caso precise interromper a aplicação, você pode usar Ctrl + C no terminal onde o Docker Compose está rodando.
Para limpar os containers e imagens após o uso, você pode rodar:
bash
Copiar código
docker-compose down
Tecnologias Utilizadas
Node.js
React
Docker
MySQL
Tailwind

https://github.com/user-attachments/assets/516f56de-887c-43c4-978b-71c3b0ea124e


