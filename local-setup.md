### Local DB setup

```
docker-compose -f docker-compose-dev.yaml up -d --build
```

`cd src`

`npx sequelize db:migrate`