
# Ciclo Completo de Testes de Software

Neste trabalho, elaboramos o ciclo completo de testes de software como componente do projeto final da matéria. Usamos o site Demoblaze **https://www.demoblaze.com/**, Site de demonstração para simular interações com uma loja online.


## Autores

- [Eduardo Paza Flores](https://github.com/Eduardopaza)
- [Gabriel Vieira](https://github.com/Gabrielvieira1215)
- [Guilherme Uliano](https://github.com/guilhermeuliano)
- [Luan Galvani](https://github.com/Luangalvani)
- [Pedro Neves Marques de Aquino](https://github.com/SmurfdoPedro)
- [Thomas Labes](https://github.com/Thomaslabes)
## Documentação e Arquivos do projeto

A documentação do projeto está no diretório [documentation](https://github.com/guilhermeuliano/A3_Gestao_e_qualidade_de_software/tree/main/documentation)\
Os arquivos de testes do Cypress estão no diretório [cypress/e2e/](https://github.com/guilhermeuliano/A3_Gestao_e_qualidade_de_software/tree/main/cypress/e2e)\
Os arquivos de teste de carga e limite estão no diretório [Jmeter](https://github.com/guilhermeuliano/A3_Gestao_e_qualidade_de_software/tree/main/Jmeter)

## Preparando o ambiente

Para rodar os testes, precisa instalar o [Node.js](https://nodejs.org/pt)\
Após instalar o Node, instalamos o [Cypress](https://www.cypress.io/) com o comando no terminal

```bash
  npm install cypress --save-dev
```
Para abrir o Cypress usamos o comando
```bash
  npx cypress open
```
O [Jmeter](https://jmeter.apache.org/download_jmeter.cgi) foi baixado a versão mais recente: *5.6.3*

## Referência

 Site utilizado  para testes: [Demoblaze](https://www.demoblaze.com/index.html)



## Ferramentas utilizadas

*Cypress* foi utilizado para automatizar testes funcionais\
*JMeter* foi utilizado para realizar testes de carga e desempenho


## Demonstração

Teste de login
![Login e logout realizado](https://imgur.com/oo9Fj6N.png)

Compra realizada com sucesso
![Compra realizada com sucesso!](https://i.imgur.com/EXV2HBR.png)

Exemplo de teste realizado
![Teste de carga!](https://i.imgur.com/NVq5tpW.jpeg)

