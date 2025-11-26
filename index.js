import express from 'express';
import cluster from 'cluster';
import os from 'os';
import users from './src/controllers/user.js'

const app = express();


app.use('/users',users)
if (cluster.isPrimary) {   
    console.log("Primary PID:", process.pid);

    const cpuCount = os.cpus().length;
    console.log("CPU Count:", cpuCount);

    for (let i = 0; i < cpuCount; i++) {
        cluster.fork();
    }

    

} else {
    app.listen(2000, () => {
        console.log(`Worker PID ${process.pid} running on port 2000`);
    });
}
