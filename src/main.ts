import { CONFIG } from './constants';
import { PostService } from './services/postService';
import { UserService } from './services/userService';
import './style.css';
import { UserDetails } from './type/user';
import { HtmlUtil } from './utils/html';

// Rendering of the views
const root = document.querySelector<HTMLDivElement>('#app');
HtmlUtil.render(root);

if (root) {
  root.innerHTML = `
    <div>
      <h1>Users7</h1>
    </div>
  `;
}


// Handling the data
const postService = new PostService(CONFIG.baseUrl);
postService.getAll().then((data) => {
  console.log('posts: ', data);
});

// Read All Users
const userService = new UserService(CONFIG.baseUrl);
userService.getAll().then((data) => {
  console.log('users: ', data);
});

const user: UserDetails = {
  id: 100,
  name: "Pesho Petrov",
  username: "Pesho",
  email: "Pesho@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496"
    }
  },
  phone: "0876123123123",
  website: "peshoivanov.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets"
  }
};

// userService.create(user).then((data) => {
//   console.log('created user: ', data);
// });

// Read One
userService.getSingleUser(7, (id: number) => {
  postService.getUserPosts(id).then((data) => {
    console.log('user s posts: ', data[0]);
  });
});

// userService.getOne(1).then((data) => {
//   console.log('single user: ', data);
// });

// userService.update(1, user).then((data) => {
//   console.log('updated user: ', data);
// });


// Delete
// userService.delete(1).then((data) => {
//   console.log('deleted user: ', data);
// });