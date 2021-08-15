//Post creator

const postButton = document.getElementById('postBtn');
const blog = document.getElementById('mainBlog');
const editor = document.getElementById('editor');

postButton.onclick = () => {
    let postText = editor.value;
    let post = document.createElement('p');
    post.className = 'post';
    post.innerText = postText;
    blog.appendChild(post);
    editor.value = '';
    // document.getElementById('post').innerText += postText;
}

const api = 'http://localhost:3000/blog'

//Get posts from api
var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', api, false);
httpRequest.send(null);

console.log(JSON.parse(httpRequest.responseText))