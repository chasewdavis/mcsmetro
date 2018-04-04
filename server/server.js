const express = require('express');
// const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/../src`))

const PORT = 3005;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));