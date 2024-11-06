import { CONFIG } from './constants';
import { HttpService } from './services/httpService';
import { PostService } from './services/postService';
import { UserService } from './services/userService';
import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

const postService = new PostService(CONFIG.baseUrl);
postService.getAll().then((data) => {
  console.log('users: ', data);
})

const userService = new UserService(CONFIG.baseUrl);
userService.getAll().then((data) => {
  console.log('posts: ', data);
});

if (root) {
  root!.innerHTML = `
  <div>
    <h1>Users</h1>
  </div>
`;
}

