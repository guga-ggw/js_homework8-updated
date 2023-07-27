
const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
  
      data.forEach(element => {
        const post = document.createElement('div');
        post.setAttribute('id', 'post')


        const h2 = document.createElement('h2')
        h2.innerText = element.title


        const head = document.createElement('div')
        head.setAttribute('id', 'head')
        head.innerText = element.id

        const maintxt = document.createElement('h3')
        maintxt.innerHTML = element.body

        post.append(head, h2, maintxt)
        const container = document.querySelector('.container')
        container.append(post)
       
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  fetchData();


