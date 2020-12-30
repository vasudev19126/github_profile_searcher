const express = require("express");
const app = express();


const static = express.static("public");
app.use(static);

app.listen(3000);