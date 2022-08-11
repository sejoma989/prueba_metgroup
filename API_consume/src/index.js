const express = require('express');
const v1loginRouter = require("./v1/routes/userRoutes");
const v1storeRouter = require("./v1/routes/storeRoutes");

const app = express();
const PORT = process.nextTick.PORT || 3000;

app.use("/api/v1/login", v1loginRouter);
app.use("/api/v1/store", v1storeRouter);


app.listen(PORT, () => { 
    console.log(`Server listening now on port ${PORT}`) 
});