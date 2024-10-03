## Descrição

Este projeto é uma aplicação web simples construída com Express.js e Pug, que permite ao usuário inserir e visualizar nomes. Ele foi projetado para ser executado em um ambiente Docker e é parte do projeto Full Cycle.

## Tecnologias Utilizadas

- Node.js
- Express.js
- Pug
- dotenv

## Pré-requisitos

Certifique-se de que você tenha o Node.js e o Docker instalados em seu sistema.

## Instalação

1. **Clone o repositório**:

```bash
git clone https://github.com/seu_usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

2.  **Instale as dependências**:

```bash
npm install
```

3. Configuração do Ambiente:
Crie um arquivo .env na raiz do projeto com as variáveis de ambiente necessárias. Você também pode criar um arquivo .env.local para configurações locais.

```
# env template
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
POSTGRES_HOST=db
```


4. Criar a tabela no banco de dados:
A tabela de nomes será criada automaticamente na inicialização da aplicação.

## Uso

1. Inicie o servidor:
```bash
docker-compose up --build -d
```

2. Acesse a aplicação
Abra o navegador e vá para http://localhost:8080.

3. Adicionar Nomes
Na página inicial, você pode adicionar nomes ao formulário. Os nomes inseridos serão salvos e exibidos na lista.

```
.
├── .env
├── .env.local
├── index.js           # Código principal da aplicação
├── repository
│   └── names.repository.js # Módulo de repositório para gerenciar nomes
└── views
    └── index.pug     # Template Pug para renderização.
```
## Contribuição
Sinta-se à vontade para abrir problemas ou enviar solicitações de pull. Para alterações significativas, por favor, abra um problema primeiro para discutir o que você gostaria de mudar.

## Licença
Este projeto está licenciado sob a Licença MIT.

## Agradecimentos
A equipe do Full Cycle por fornecer esta oportunidade de aprendizado.