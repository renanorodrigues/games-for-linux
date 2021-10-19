# Games-for-linux
An online platform where free games for linux are presented

## Tutorial

I. For using this app in your browser, is important to install Docker in your machine. After that, access the root directory project and execute this command:
```
docker build -t games-4-linux . && docker run --name CLIENT_CONTAINER -p 0.0.0.0:5000:3000 games-4-linux
```

II. Click in this link: http://localhost:5000