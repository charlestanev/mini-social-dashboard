import { CONFIG } from './constants';
import { HttpService } from './services/httpService';
import { PostService } from './services/postService';
import { UserService } from './services/userService';
import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

// const userService = new UserService(CONFIG.baseUrl);
// const postService = new PostService(CONFIG.baseUrl);

if (root) {
  root!.innerHTML = `
  <div>
    <h1>Users</h1>
  </div>
`;
}

