FROM node:18-alpine as development

ENV NODE_ENV=development

WORKDIR /app 

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY prisma ./

# Install app dependencies
RUN npm install

# Generate prisma client, leave out if generating in `postinstall` script
RUN npx prisma generate

COPY ./ ./

RUN npm run build

RUN npm run seed

FROM node:18-alpine as production

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY --from=development /app/dist ./dist
COPY --from=development /app/node_modules ./node_modules
COPY --from=development /app/package*.json ./
COPY --from=development /app/prisma ./prisma

CMD ["node", "dist/src/main"]
