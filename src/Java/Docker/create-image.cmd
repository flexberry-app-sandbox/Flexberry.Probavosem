docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probavosem-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t probavosem-java/app ../../..
