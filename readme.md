para iniciar o projeto precisamos instalar algumas dependencias, como por exemplo:

1 - NodeJs : https://nodejs.org/en/
2 - Ruby : https://github.com/oneclick/rubyinstaller2/releases/download/rubyinstaller-2.4.3-1/rubyinstaller-2.4.3-1-x64.exe

3 - Após a instalação do Ruby escolher a opção 1.
    Logo após op termino da instalação será apresentada um box. Para finalizar basta clicar em next.

após realizar as instalações, basta rodar os seguintes comandos na primeira vez no terminal:

4 - grunt: 

-- npm install -g grunt-cli

5 - bower: 

-- npm install -g bower

esses comandos irão baixar alguns pacotes para agilizar o desenvolvimento de forma global.

depois:

-- npm install 
-- bower install
-- gem install sass

para compilar o projeto em modo desenvolvimento digite no terminal: 

-- grunt live ou grunt server

esse comando ira subir um browser e toda alteração que se fizer no projeto, o navegador sera recarregado automaticamente.

para compilar o projeto em modo release que é o pacote produção, digite no terminal: 

-- grunt release

esse comando ira criar na pasta "WebContent" o nosso pacote que sera instalado em homologação ou produção.