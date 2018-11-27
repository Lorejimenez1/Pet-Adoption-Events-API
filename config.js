exports.DATABASE_URL =
    process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    'mongodb://Lorejimenez1:Pregamelore11@ds019638.mlab.com:19638/adoptionevents';
exports.PORT = process.env.PORT || 8080;
