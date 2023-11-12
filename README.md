# Moments
Mini projeto de rede social do curso Angular, do professor [Matheus Battisti](https://github.com/matheusbattisti/), permitindo que os usuários postem momentos marcantes de suas vidas, além de interagir com outras publicações. Feito com o framework Angular.

## Como rodar na sua máquina
### Preparando a api:
1. Clone o repositório da api em sua máquina:
   ```
   git clone https://github.com/alexsandro49/api_restful_adonis.git
   ```
2. Dentro da pasta do projeto, instale as dependências:
   ```
   npm install
   ```
3. Prepare as variáveis de ambiente:
   ```
   mv ./.env.example ./.env
   ```

4. Gere o banco de dados:
   ```
   node ace migration:run
   ```
5. Execute a api:
   ```
   node ace serve
   ```

#### A api é necessária para o acesso ao banco de dados.

### Preparando o projeto
1. Clone o repositório do projeto:
   ```
   git clone https://github.com/alexsandro49/moments_angular.git
   ```
2. Dentro da pasta do projeto, instale as dependências:
   ```
   npm install
   ```
3. Faça a instalação do Angular CLI:
   ```
   npm install -g @angular/cli
   ```
3. Execute o projeto:
   ```
   ng serve
   ```

#### O projeto vai estar disponível no http://localhost:4200/

## Referências
### Playlist com o projeto:
   ```
   https://youtube.com/playlist?list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw&si=jVHIsgnU5oVVM7im
   ```
### Repositório do projeto original:
   ```
   https://github.com/matheusbattisti/curso_angular_yt
   ```
### Repositório original da api:
   ```
   https://github.com/matheusbattisti/curso_adonis_api_yt
   ```

## Licença
- [MIT](https://github.com/alexsandro49/moments_angular/blob/main/LICENSE)
