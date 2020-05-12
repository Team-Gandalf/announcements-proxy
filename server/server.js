const app = require('./index.js');

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    console.error('Server Error: ', err);
  } else {
    console.log(`Server is listening on port ${port}`);
  }
});
