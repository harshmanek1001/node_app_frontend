# stage 1 : using basic alpine image of node and installing the 
# required dependencies
FROM node:20-alpine as builder
WORKDIR /app
COPY package.json package-lock.json .
RUN npm ci
COPY . .
RUN npm run build

# stage 2 : copying the dependencies installed in stage 1 to the 
# final image of nginx that will serve the frontend
FROM nginx:alpine as final
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80

