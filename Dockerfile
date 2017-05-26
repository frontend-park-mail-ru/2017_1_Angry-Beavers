FROM nginx:1.13-alpine
RUN apk add --update bash

RUN ./configure --with-http_gzip_static_module
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.backup
COPY ./joking-hazard.conf        /etc/nginx/conf.d/
COPY ./joking-hazard_listen.conf /etc/nginx/


RUN mkdir /joking-hazard
COPY ./port.sh /joking-hazard/
RUN chmod +x /joking-hazard/port.sh
COPY ./public/static /joking-hazard/public/static

CMD /joking-hazard/port.sh /etc/nginx/joking-hazard_listen.conf && nginx -g 'daemon off;'
