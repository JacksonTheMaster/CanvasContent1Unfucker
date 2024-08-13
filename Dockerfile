FROM nginx:alpine-slim
COPY ./nginx.conf /etc/nginx/nginx.conf


COPY ./web/. /usr/share/nginx/html/  