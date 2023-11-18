FROM mysql:8.0.34-debian

COPY ./sql/*.sql /docker-entrypoint-initdb.d/

EXPOSE 3306