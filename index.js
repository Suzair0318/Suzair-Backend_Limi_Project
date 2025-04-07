const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const connectDB = require('./src/connection/DB_connection');

const user_routes = require('./src/client/user/routes');
const test_ping = require('./src/test/routes');
const admin_device_routes = require('./src/admin/devices/routes');
const device_routes = require('./src/client/devices/routes');

app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

connectDB();
// for MQTT connection
// require('./src/client/hive_MQTT_connection/mqtt_services');


// 🔥 Auto Unlink Script Require Karo
require('./src/client/node_cron_timer/node_cron_timer');

app.use('/client' , user_routes);
app.use('/server' , test_ping);
app.use('/client/devices' , device_routes);
app.use('/admin' , admin_device_routes );


app.listen( process.env.PORT ,() => console.log('🌐 Server is running on port 3000'));
// module.exports = app;