React versão 16.12.0

## Scripts úteis

### `yarn install`

Atualiza as bibliotecas do sistema.<br />
Execute este comando logo após baixar as atualizações no repositório.

### `yarn start`

Executa o sistema.<br />
Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação no navegador.

## Executando a aplicação junto com a API

Para que o sistema funcione corretamente, você primeiro deve executar o back-end(api). O Back-end roda no django então acesse a pasta do projeto (projeto-marmita2) através da virtualenv e execute o comando: 

### `python manage.py runserver`

Após certificar-se que o sistema em python está rodando, execute o front-end.

#### *os comandos para execução da aplicação no front-end estão descritos logo acima!

## Comando do git para a atualização de versão

exemplo: atualizar a versão para 0.2.1

### `git tag -a v0.2.1 -m "Mensagem da versão"`

subir as versões para o repositório

###  `git push --tags`

## Sobre versionamento

Entenda e aprenda mais sobre o versionamento e como aplicá-lo, acessando: [versionamento](https://semver.org/lang/pt-BR/).
