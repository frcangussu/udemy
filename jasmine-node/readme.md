# Configuração do jasmine + NodeJS

1. ### Instalar o '[NodeJS](https://nodejs.org)' e o '[npm](https://nodejs.org)'
    - acessar o [nodejs.org](https://nodejs.org) e fazer o download

1. #### Instalar o Jasmine 
    ```bash
    npm install --save-dev jasmine
    ```
    ```bash
    npm install -g jasmine
    ```

1. #### Alterar as permissões da pasta global "node_modules"
    ```bash
    sudo chown f3268634:153268634 -R /usr/local/lib/node_modules
    ```
1. ### Executar os testes: comando ***jasmine***
    ```bash
    f3268634@ES9600112520404801: jasmine
    ```
1. ### Executar testes com o '***npm***'
    - alterar o 'package.json'
        ```json
        ...
        "scripts":{
            "test": "jasmine"
        }
        ...
        ```
    - executar o comando
        ```bash
        npm run test
        ```
1. ### Gerando exemplos
    - executar o comando: "jasmine examples"
        ```bash
        jasmine examples
        ```

# Configuração do 'karma'

1. ### Instale o karma
    ```bash
    npm install --save-dev karma
    ```
1. ### Instale a integração karma com jasmine
    ```bash
    npm install --save-dev karma-jasmine
    ```
1. ### Instale o gerenciador do Firefox
    ```bash
    npm install --save-dev karma-firefox-launcher
    ```
1. ### Instale globalmente o cliente do karma
    ```bash
    npm install -g karma-cli
    ```    
    - verifique/altere as permissões da pasta: ***/usr/local/lib/node_modules/karma-cli***

1. ### Verificação de instalação
    - Verifique se o karma foi instalado
        ```bash
        karma --version
        ```    
    - verifique se as entradas do karma foram adicionadas ao arquivo 'package.json'
        ```json
        ...
        "devDependencies": {
            "jasmine": "^3.4.0",
            "karma": "^4.1.0",
            "karma-firefox-launcher": "^1.1.0",
            "karma-jasmine": "^2.0.1"
        }
        ...
        ```
1. ### Configuração do Karma
    - Execute o comando abaixo para gerar o arquivo de configuração
        ```bash
        karma init karma.conf.js
        ```
    - Respostas indicadas
        - jasmine, no, Firefox, spec/**/*Spec.js, [enter], yes
        ```bash
        Which testing framework do you want to use ?
        Press tab to list possible options. Enter to move to the next question.
        > jasmine

        Do you want to use Require.js ?
        This will add Require.js plugin.
        Press tab to list possible options. Enter to move to the next question.
        > no

        Do you want to capture any browsers automatically ?
        Press tab to list possible options. Enter empty string to move to the next question.
        > Firefox
        > 

        What is the location of your source and test files ?
        You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
        Enter empty string to move to the next question.
        > spec/**/*Spec.js
        > 

        Should any of the files included by the previous patterns be excluded ?
        You can use glob patterns, eg. "**/*.swp".
        Enter empty string to move to the next question.
        >

        Do you want Karma to watch all the files and run the tests on change ?
        Press tab to list possible options.
        > yes        
        ```

1. ### Inicializando o Karma
    - Inicie o Karma
        ```bash
        karma start
        ```
    - Saia do modo escuta
        ```bash
        Ctrl+C
        ```

# Executando o Karma com NodeJS
- Renomeie o script do Jasmine de 'test' para 'test-jasmine'
- Adicione os novos scripts de testes contendo
    - "test": "karma start --single-run"
    - "test-dev":"karma start"
- resultado:
    ```json
    "scripts": {
        "test-jasmine": "jasmine",
        "test-dev": "karma start",
        "test": "karma start --single-run"
    },
    ```
- Execute os testes
    ```bash
    npm run test
    ```
- Termine os testes
    - Ctrl+C


# Karma com o Browserify
- converte os "require" para a tag "script"
1. ### Instalação
    ```bash
    npm install --save-dev browserify
    ```
    ```bash
    npm install --save-dev watchify
    ```
    ```bash
    npm install --save-dev karma-browserify
    ```

1. ### karma.conf.js
    
    - Em 'frameworks' adicione 'browserify'
        ```javascript
        frameworks: ['jasmine','browserify']
        ```

    - Adicione o diretório 'helpers' em 'files'
        ```javascript
        'spec/helpers/**/SpecHelper.js'
        ```

    - Adicione em 'preprocessors'
        ```javascript
        'spec/**/Spec.js':['browserify']
        ```

    - Execute os testes
        ```bash
        npm test
        ```

    - Edite o arquivo de teste 'exemploSpec.js' e salve-o para que os testes sejam executados novamente de modo automático

    - Termine os testes
        ```
        Ctrl+C
        ```



