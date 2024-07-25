let darkMode = false
const toggle = document.getElementById('toggle');
        const body = document.body;

        toggle.addEventListener('click', function() {
            if (!darkMode) {
                body.classList.add('dark-mode');
                darkMode = true
            } else {
                body.classList.remove('dark-mode');
                darkMode = false
            }
        });
let blogPosts=document.getElementById("blogPosts")
  let posts = JSON.parse(localStorage.getItem('posts')) || [];
  console.log(posts)
  for (let i = 0; i < posts.length; i++) {
    let username = posts[i].username
    let title = posts[i].title
    let content = posts[i].content
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    h3.textContent=title
    p1.textContent=content
    p2.textContent="Posted by: "+ username
    div.appendChild(h3)
    div.appendChild(p1)
    div.appendChild(p2)
    blogPosts.appendChild(div)
  }