import { CONFIG } from './constants';
import { PostService } from './services/postService';
import { UserService } from './services/userService';
import './style.css'

const root = document.querySelector<HTMLDivElement>('#app');

const userService = new UserService(CONFIG.baseUrl);
const postService = new PostService(CONFIG.baseUrl);

root!.innerHTML = `
  <div>
    <h1>Hello Vite</hjson>
  </div>
`;