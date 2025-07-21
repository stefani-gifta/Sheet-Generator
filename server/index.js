const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const path = require('path');

app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve frontend for non-API routes
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});