# Usar uma imagem base
# dica: node
# latest não é uma boa prática pra publicar imagens
# latest é sempre a imagem mais atualizada / recente
FROM node:16.14-alpine
# alpine é um tipo de linux
# linux muuuuuuuito leve

# definir uma pasta padrão
# ele cria pastas
WORKDIR /my-app

# copio os arquivo necessários para instalação das dependências
# ESQUERDA LOCAL / DIREITA CONTAINER
# COPY package.json .
# package-lock ele garante a integridade das minhas versões
# COPY package-lock.json . 
# Otimização da geração da imagem
COPY package*.json . 

# instalo as dependências
# RUN npm install
# npm ci - comando para instalação referenciando o package-lock 
RUN npm ci

# copiar o código
COPY . .

EXPOSE 3000

# executar a minha aplicação
# nosso container roda esse comando
# ele não roda durante a construção da imagem
ENTRYPOINT [ "npm" ]
CMD ["start"]
# CMD ["npm", "start"]