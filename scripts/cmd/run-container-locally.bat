cd ../..
docker stop neotaller
docker rm neotaller
docker build -t neotaller-img .
docker run -p 3000:3000 --env-file .env -d --name neotaller --network neotaller-network neotaller-img
cd scripts/cmd