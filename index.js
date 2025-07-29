const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Node.js app running on EC2!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
