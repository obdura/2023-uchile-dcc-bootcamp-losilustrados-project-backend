docker run -e MYSQL_ROOT_PASSWORD=clave123 -p 3306:3306 --name mysql-server --network neotaller-network -d mysql:8.0.34-debian
docker cp ../../sql/01-estructura.sql mysql-server:/tmp/estructura.sql
docker cp ../../sql/02-datos.sql mysql-server:/tmp/datos.sql
docker exec mysql-server /bin/bash -c "mysql -h localhost -P 3306 -u root -pclave123 < /tmp/estructura.sql"
docker exec mysql-server /bin/bash -c "mysql -h localhost -P 3306 -u root -pclave123 < /tmp/datos.sql"