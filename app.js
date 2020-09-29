const express = require('express');
const app = express();
app.use(express.static('public'));



app.listen(3000, () => console.log('Test test, this is homebase on 3000'))