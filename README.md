# desafio-convicti

Este projeto é um dashboard que consome uma API para exibir estatísticas de uso de aplicativos móveis, feedbacks dos usuários e novas funcionalidades. Ele foi desenvolvido com Vue.js e utiliza Docker para facilitar a configuração do ambiente.

---

Algumas funcionalidades ainda não estão concluídas, tais como Integração da API e CRUD de perfis e usuários, tais como algumas melhorias no código. Por isso, informo abaixo as credenciais de acesso mockadas para acessar o painel:

Admin: admin@convicti.com
Dev: dev@convicti.com
RH: rh@convicti.com

A senha para todos os perfis é : 12345678

---

## Funcionalidades

- **Estatísticas**:
  - Downloads totais.
  - Avaliações dos usuários.
  - Erros reportados.
- **Feedbacks**:
  - Lista de feedbacks dos usuários.
- **Novas Funcionalidades**:
  - Lista de funcionalidades recentes e suas taxas de uso.

---

## Estrutura do Projeto

frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── services/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── .env
├── package.json
└── README.md

## Tecnologias Utilizadas

- Vue.js
- Vuex
- Axios
- Docker
- Docker Compose

## Licença

Este projeto está licenciado sob a MIT License.

