# Games-for-linux
An online platform where free games for linux are presented

## Tutorial

You can use Yarn or Docker for run this app. So is important to install Docker and Node.js in your machine. Also, all commands are executed in the directory of the project.

### Yarn
I. Use Yarn to install all dependencies. 
```
yarn install
```

II. Finally, run this app in port 3000.
```
yarn dev
```
III. Click in this link: http://localhost:3000

### Docker
I. Use Docker for build the image and run the app container.
```
docker build -t games-4-linux . && docker run --name CLIENT_CONTAINER -p 0.0.0.0:5000:3000 games-4-linux
```

II. Click in this link: http://localhost:5000