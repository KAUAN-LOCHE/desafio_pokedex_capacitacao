# Pokédex - Boilerplate Frontend

## 📋 Sobre o Projeto

Este é um **boilerplate para aprendizado de desenvolvimento frontend** desenvolvido pela **EJCOMP - Empresa Júnior de Computação**. O projeto consiste em uma aplicação **Pokédex moderna** que consome a [PokéAPI](https://pokeapi.co/docs/v2/) para exibir, filtrar e paginar informações sobre Pokémon.

O objetivo é servir como base de aprendizado para capacitações de frontend, combinando boas práticas, arquitetura clara e requisitos práticos de desenvolvimento web.

Instrutor: [Raphael Leiva](https://github.com/raphaelglv)\
Boilerplate: [Pedro Alonso Oliveira](https://github.com/pedro-alonso)

---

## 🏗️ Arquitetura do Projeto

```
boilerplate-pokedex/
├── src/
│   ├── api/
│   │   └── http-client.ts          # Cliente HTTP (Axios) centralizado
│   ├── assets/                      # Imagens e recursos estáticos
│   ├── App.tsx                      # Componente principal
│   ├── App.hook.ts                  # Lógica do componente App
│   ├── App.css                      # Estilos da aplicação
│   ├── main.tsx                     # Ponto de entrada da aplicação
│   └── index.css                    # Estilos globais
├── public/                          # Arquivos públicos estáticos
├── index.html                       # Arquivo HTML principal
├── vite.config.ts                   # Configuração do Vite
├── tsconfig.json                    # Configuração do TypeScript
├── eslint.config.js                 # Configuração do ESLint
└── package.json                     # Dependências e scripts

```

### Hierarquia de Componentes

```
App (Principal)
├── Hooks (useApp)
│   └── Lógica de negócio
└── UI
    ├── Header/Navegação (a implementar)
    ├── Listagem de Pokémon (grid com paginação)
    ├── Filtros (nome, tipo)
    └── Detalhes do Pokémon (a implementar)
```

---

## 🎯 Objetivo

Desenvolver uma **Pokédex funcional e responsiva** que:
- Demonstre boas práticas de desenvolvimento React/TypeScript
- Implemente gerenciamento de estado global (Redux)
- Consuma dados de uma API REST pública (PokéAPI)
- Implemente paginação, filtragem e navegação de rotas
- Seja responsivo para diferentes tamanhos de tela

---

## 📋 Requisitos do Sistema

### Stack Mínimo

- **Node.js**: versão 18+ (recomendado: 20 LTS)
- **npm**: versão 9+ ou **yarn** versão 3.6+
- **Sistema Operacional**: Windows, macOS ou Linux

### Verificar Instalação

```bash
# Verificar Node.js
node --version

# Verificar yarn
yarn --version
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 19.2.4 | Framework UI |
| **TypeScript** | 5.9.3 | Tipagem estática |
| **Vite** | 8.0.0 | Bundler e dev server |
| **Axios** | 1.13.6 | Cliente HTTP |
| **CSS** | Vanilla | Estilização (sem frameworks) |
| **React Router** | - | Navegação entre páginas (a instalar) |
| **Redux** | - | Gerenciamento de estado global (a instalar) |
| **ESLint** | 9.39.4 | Linting e qualidade de código |

---

## 🚀 Como Rodar a Aplicação

### 1. Clonar o Repositório

```bash
git clone git@github.com:ejcompunesp/boilerplate-pokedex.git
cd boilerplate-pokedex
```

### 2. Instalar Dependências

```bash
yarn install
```

### 3. Modo Desenvolvimento

Para rodar a aplicação em modo desenvolvimento com hot-reload:

```bash
yarn dev
```

A aplicação abrirá automaticamente em `http://localhost:5173`


### 4. Executar Linting

Para verificar a qualidade do código:

```bash
yarn lint
```

---

## 📡 API - PokéAPI

### Documentação

A aplicação consome a [PokéAPI v2](https://pokeapi.co/docs/v2/), uma REST API pública **totalmente gratuita** que fornece dados sobre Pokémon.

Para realizar a integração e visualizar os endpoints disponíveis, acesse a documentação oficial da PokéAPI.

---

## ✅ Exigências do Projeto

Todas as funcionalidades abaixo **são obrigatórias**:

### 1. **Usar a Versão REST da PokéAPI**
- ✅ Consumir a REST API (não GraphQL)
- ✅ Fazer requisições com Axios pelo cliente HTTP centralizado (`src/api/http-client.ts`)

### 2. **Navegação de Páginas**
- ✅ Implementar navegação com **React Router v7+**
- ✅ Páginas esperadas:
  - **Home**: Listagem de Pokémon com paginação
  - **Detalhes**: Página individual de um Pokémon (ex: `/pokemon/:id`)
  - Pode incluir: Sobre, Contato, etc.

### 3. **Listagem com Paginação**
- ✅ Exibir Pokémon em **grid responsivo**
- ✅ Implementar controles de paginação (Anterior/Próximo)
- ✅ Mínimo 20 itens por página
- ✅ Sincronizar paginação com URL (ex: `?page=1`)
- ✅ Preferencialmente, realizar a paginação com infinite scroll.

### 4. **Filtragem**
- ✅ **Filtro por nome**: Buscar Pokémon pelo nome em tempo real ou com botão
- ✅ **Filtro por tipo**: Filtrar por tipos (Fire, Water, Grass, etc.)
- ✅ Podem ser implementados filtros adicionais conforme desejar
- ✅ Filtros devem funcionar **combinados** (nome E tipo)

### 5. **Responsividade Mínima**
- ✅ Layout deve se adaptar para diferentes **larguras de tela**:
  - Desktop (1920px)
  - Notebook (1366px, 1024px)
  - Tablet (768px)
- ⚠️ Não precisa suportar mobile (< 480px), mas fica a critério implementar
- ✅ Usar **CSS Grid/Flexbox** para layouts responsivos

### 6. **Gerenciamento de Estado Global (Redux)**
- ✅ Implementar **Redux** (ou Redux Toolkit) para gerenciar:
  - Lista de Pokémon
  - Filtros aplicados (nome, tipo)
  - Página atual
  - Estado de carregamento
  - Erros de requisições
- ✅ Usar **Redux DevTools** para debug (extensão do navegador)

---

## 📦 Instalando Dependências Necessárias

Após clonar o projeto, instale as bibliotecas faltantes:

```bash
npm install react-router-dom @reduxjs/toolkit react-redux
```

---

## 🔗 Referências Úteis

- **React**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Vite**: https://vite.dev
- **Axios**: https://axios-http.com/docs/intro
- **React Router**: https://reactrouter.com/
- **Redux**: https://redux.js.org
- **Redux Toolkit**: https://redux-toolkit.js.org
- **PokéAPI**: https://pokeapi.co/docs/v2

---

## 💡 Dicas de Desenvolvimento

1. **Comece simples**: Importe dados manualmente ou via `curl` para testar componentes sem API
2. **Use Redux DevTools**: Instale a extensão no navegador para debugar estado
3. **Teste no console**: Use `fetch` ou `axios` no console para testar endpoints antes de integrar
4. **Modularize**: Crie componentes pequenos e reutilizáveis
5. **Estile gradualmente**: Não se preocupe com perfeição visual, foque em funcionalidade


---

## 🤝 Contribuindo

Este é um boilerplate de aprendizado. Sinta-se livre para:
- Adicionar funcionalidades extras
- Melhorar a estilização
- Refatorar código
- Implementar boas práticas adicionais

---

## 📧 Suporte

Para dúvidas sobre o projeto, entre em contato com a **EJCOMP**.

---

## 📄 Licença

Este projeto é um boilerplate educacional e está disponível para uso interno da EJCOMP.

**Boa sorte com o desenvolvimento! 🚀**
