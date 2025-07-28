const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`📨 New contact from ${name} (${email}): ${message}`);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
