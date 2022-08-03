const express = require('express');
const v1loginRouter = require("./v1/routes/loginRoutes")

const app = express();
const PORT = process.nextTick.PORT || 3000;

app.use("/api/v1/login", v1loginRouter);


app.listen(PORT, () => { 
    console.log(`Server listening now on port ${PORT}`) 
});