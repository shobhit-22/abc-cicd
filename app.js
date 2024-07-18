import express from 'express';

const app = express();
const port = 4200;

app.get('/', (req, res) => {
  res.send('Hello, ABC Company!');
});

const server = app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
export { server };