const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await fetchResponse.json();
    // const addingLove = data.map((data) => {
    //   return {...data, "love": "steph"}
    // })
    
    const deleteTitle = data.map((todo) => {
      const { title, ...rest } = todo;
      return rest
    }
    )

    const url = 'https://httpbin.org/post'
    const postResponse = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(deleteTitle),
  })
  
  const postData = await postResponse.json();

  console.log(postData)

    res.json(deleteTitle);

  } catch (error) {

  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});