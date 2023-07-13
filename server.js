const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

const qoutesRouter = require('./routes/quotes');
app.use('/api/quotes', qoutesRouter);

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${PORT}`);
})