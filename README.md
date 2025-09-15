# API de Transações Financeiras

Uma API REST desenvolvida em Node.js com Fastify para gerenciamento de transações financeiras.

## 📋 Funcionalidades

- ✅ Criar nova transação
- ✅ Obter resumo da conta
- ✅ Listar todas as transações
- ✅ Visualizar uma transação única

## 🚀 Tecnologias

- **Node.js** (>= 18)
- **Fastify** - Framework web rápido e eficiente
- **TypeScript** - Tipagem estática
- **Knex.js** - Query builder SQL
- **SQLite** - Banco de dados
- **Zod** - Validação de schemas
- **Vitest** - Framework de testes

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd moneyTransaction-main

# Instale as dependências
npm install

# Execute as migrações do banco de dados
npm run knex migrate:latest

# Inicie o servidor em modo de desenvolvimento
npm run dev
```

## ⚙️ Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
NODE_ENV=development
DATABASE_URL=./db/banco.db
PORT=3333
```

## 📚 Endpoints da API

### Base URL
```
http://localhost:3333
```

### 1. Criar Transação

**POST** `/transaction`

Cria uma nova transação financeira.

#### Body (JSON)
```json
{
  "title": "Salário",
  "amount": 5000.00,
  "type": "credit"
}
```

#### Parâmetros
- `title` (string, obrigatório): Título da transação
- `amount` (number, obrigatório): Valor da transação
- `type` (string, obrigatório): Tipo da transação (`"credit"` ou `"debit"`)

#### Resposta
- **Status**: `201 Created`
- **Body**: Vazio

#### Exemplo de uso
```bash
curl -X POST http://localhost:3333/transaction \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Freelance",
    "amount": 1500.00,
    "type": "credit"
  }'
```

### 2. Listar Transações

**GET** `/hello`

Retorna todas as transações cadastradas.

#### Resposta
- **Status**: `200 OK`
- **Body**: Array de transações

```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Salário",
    "amount": 5000.00,
    "created_at": "2023-04-08T22:33:44.000Z"
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "title": "Conta de luz",
    "amount": -150.00,
    "created_at": "2023-04-08T22:35:12.000Z"
  }
]
```

#### Exemplo de uso
```bash
curl http://localhost:3333/hello
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: transactions

| Campo | Tipo | Descrição |
|-------|------|----------|
| id | UUID | Identificador único (chave primária) |
| title | TEXT | Título da transação |
| amount | DECIMAL(10,2) | Valor da transação (positivo para crédito, negativo para débito) |
| created_at | TIMESTAMP | Data e hora de criação |

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia o servidor em modo de desenvolvimento

# Banco de dados
npm run knex         # Executa comandos do Knex

# Qualidade de código
npm run lint         # Executa o ESLint

# Build
npm run build        # Compila o projeto para produção

# Testes
npm test            # Executa os testes
```

## 🔧 Regras de Negócio

- **Tipos de transação**:
  - `credit`: Soma o valor ao saldo (valor positivo no banco)
  - `debit`: Subtrai o valor do saldo (valor negativo no banco)

- **Identificação do usuário**: Implementação futura para requisições autenticadas

- **Visualização**: Usuários poderão visualizar apenas suas próprias transações (funcionalidade futura)

## 🚧 Funcionalidades Futuras

- [ ] Autenticação de usuários
- [ ] Endpoint para obter resumo da conta (saldo total)
- [ ] Endpoint para visualizar transação específica por ID
- [ ] Filtros e paginação na listagem
- [ ] Categorização de transações

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença ISC.

---

**Desenvolvido com ❤️ usando Node.js e Fastify**
