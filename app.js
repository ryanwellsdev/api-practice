const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const fetchResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await fetchResponse.json();

    // const capitalizeTitles = data.map((todo) => {
    //   const capitalizeTitle = todo.title.split(' ')
    //     .map(word => word[0].toUpperCase() + word.slice(1))
    //     .join(' ');
    //   return { ...todo, title: capitalizeTitle };
    // });

    const capitalizeAll = data.map((todo) => {
      const capitalizeAll = todo.title.toUpperCase();
      return { ...todo, title: capitalizeAll };
    });

    // const addingLove = data.map((data) => {
    //   return {...data, "love": "steph"}
    // })

    // const deleteTitle = data.map((todo) => {
    //   const { title, ...rest } = todo;
    //   return rest
    // }
    // )

    // const addField = data.map((data) => {
    //   return {...data, "adding love": "extra love"} 
    // })

    // const result = Object.groupBy(data, ({userId}) => userId);

    const url = 'https://httpbin.org/post'
    const postResponse = await fetch(url, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(capitalizeAll),
  })
  
  const postData = await postResponse.json();

  console.log(postData)

    res.json(capitalizeAll);

  } catch (error) {

  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});