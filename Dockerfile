FROM nginx:1.13-alpine
ENV MODULES_DIR /usr/src/nginx-modules
RUN apk add --update bash

RUN cd /usr/src/nginx-1.13-alpine && ./configure \
    --with-http_gzip_static_module \
    --add-module=${MODULES_DIR}/nginx-upload-module \
RUN cd /usr/src/nginx-1.13-alpine && make && make install
RUN useradd --no-create-home nginx && \
     mkdir -p /var/lib/nginx/tmp && \
     chown -R nginx:nginx /var/lib/nginx && \
     chmod u+rws /var/lib/nginx

RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.backup
COPY ./joking-hazard.conf        /etc/nginx/conf.d/
COPY ./joking-hazard_listen.conf /etc/nginx/


RUN mkdir /joking-hazard
COPY ./port.sh /joking-hazard/
RUN chmod +x /joking-hazard/port.sh
COPY ./public/static /joking-hazard/public/static

CMD /joking-hazard/port.sh /etc/nginx/joking-hazard_listen.conf && nginx -g 'daemon off;'
