name: Ci pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs: 
  build-and-test:
runs-on: ubuntu-latest
steps:
-name: baixar código
uses: action/checkout@v4
-name: instalar dependências
run: npm install
name: Rodar  testes
run: npm test
