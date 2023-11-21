# Tech Blog CMS - MVC Challenge 🚀

## Description
In this assignment, the goal is to develop a CMS-style blog site similar to WordPress, enabling developers to publish articles, blog posts, and engage in discussions. The application follows the Model-View-Controller (MVC) paradigm and incorporates technologies such as Handlebars.js, Sequelize ORM, and express-session for authentication. For a comprehensive list of requirements, refer to the User Story and Acceptance Criteria sections.

## Motivation 🌟
As a technology enthusiast, the significance of sharing knowledge and experiences resonates with me. This assignment aligns with my vision of creating an intuitive platform where tech enthusiasts can connect, learn, and collaborate. I am driven to provide a seamless user experience, ensuring value for both readers and writers on this platform.

## Installation ⚙️
To run this CMS-style blog site locally, follow these steps:
1. Clone the repository to your local machine using `git clone git@github.com:NormallyRayne/Tech-blog.git`.
2. Navigate to the project directory using the terminal.
3. Run `npm install` to install the required dependencies.
4. Create a `.env` file in the project root and add necessary environment variables like database connection details and session secret key.
```
DB_NAME='TechBlog_db'
DB_USER='root'
DB_PASSWORD='password'
```
5. Run `npm start` to start the local server.
6. Access the application in your web browser at `http://localhost:3000`.

## Usage 🚦
- Upon visiting the site, users encounter the homepage with existing blog posts, navigation links, and an option to log in.
- Clicking on the homepage option redirects users to the homepage.
- Other navigation links prompt users to sign up or sign in.
- After signing up and logging in, users can create, edit, and delete their blog posts and comment on existing posts.
- The dashboard offers an overview of the user's created blog posts and the option to add new posts.
- Users can log out using the navigation option.

## Screenshots 📷
![Images1](./assets/images/Screenshot%202023-11-21%20at%204.34.18 PM.png)
![Images2](./assets/images/Screenshot%202023-11-21%20at%204.35.03 PM.png)
![Images3](./assets/images/Screenshot%202023-11-21%20at%204.35.13 PM.png)
![Images4](./assets/images/Screenshot%202023-11-21%20at%204.35.24 PM.png)
![Images5](./assets/images/Screenshot%202023-11-21%20at%204.35.35 PM.png)


## Contribution 🤝
Contributions are welcomed! Here's how to contribute:
1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make changes and commit them with descriptive commit messages.
5. Push your changes to your forked repository on GitHub.
6. Create a pull request to the main repository's `develop` branch, explaining your changes.

## Technology Stack 💻
- **Frontend:** HTML, CSS, JavaScript, Handlebars.js
- **Backend:** Node.js, Express.js
- **Database:** MySQL, Sequelize ORM
- **Authentication:** express-session, bcrypt
- **Deployment:** Heroku

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

By [NormallyRayne](https://github.com/NormallyRayne)