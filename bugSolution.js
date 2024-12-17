const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello!');
  }).catch(err => {
    console.error('Error:', err);
    res.status(500).send('Internal Server Error');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Simulate an asynchronous operation that might fail
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a failure condition
    const success = Math.random() < 0.5;
    if (success) {
      resolve();
    } else {
      reject(new Error('Something went wrong!'));
    }
  });
}