# WebDevTrabalho02 - Cadastro e Listagem de Pacientes com ReactJS e API REST

## 📋 Descrição do Projeto

Este projeto é uma aplicação web desenvolvida utilizando **ReactJS** para o frontend e **Node.js** com uma **API REST** para o backend. O objetivo é realizar o **cadastro**, **edição**, **listagem** e **exclusão** de pacientes, proporcionando uma interface simples e responsiva para o gerenciamento de informações.

## 🚀 Tecnologias Utilizadas

- **Frontend**: ReactJS (Vite, TypeScript, Tailwind CSS)
- **Backend**: Node.js (Express)
- **Banco de Dados**: PostgreSQL (via Docker)
- **API Client**: Axios para comunicação com a API REST

## 🔧 Pré-requisitos

Certifique-se de ter **Node.js**, **npm** e **Docker** instalados:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop)

## ⚙️ Como Rodar o Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/Pedroklg/WebDevTrabalho02.git
cd WebDevTrabalho02
```
2. Configurar o Backend (API REST)
```bash
cd backend
cp .env.example .env
# Configurar variáveis do banco de dados no arquivo .env
npm install
npm run dev
```
3. Configurar o Frontend (ReactJS)
```bash
cd frontend
npm install
npm run dev
```
4. Acessar a Aplicação
Abra o navegador e acesse: http://localhost:5173

# 📋 Endpoints da API
Aqui estão os detalhes das rotas disponíveis para o gerenciamento de pacientes:

  GET	/patients	Lista todos os pacientes
  
  GET	/patients/:id	Obtém detalhes de um paciente pelo ID
  
  GET	/patientsSamples	Retorna uma amostra de pacientes (dados fictícios)
  
  POST	/patients	Cria um novo paciente
  
  PUT	/patients/:id	Atualiza as informações de um paciente
  
  DELETE	/patients/:id	Deleta um paciente pelo ID
  


# 👥 Equipe
Pedro Gabriel Cordeiro e Silva

Gabriel da Silva Haas

Romeu Fuchs Ferreira
