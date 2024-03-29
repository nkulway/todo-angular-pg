# Just ToDo It



<h3>Project Scope</h>
<hr>

<p>Just ToDo It is an activity organizer for your everyday tasks</p>

<h3>Steps to build database and deploy this app locally</h3>
<hr>

<li>Clone repo and open in your IDE of choice - I use VS Code</li>
<li>In the root terminal run 'npm install'</li>
<li>From the terminal, cd into the '/client' directory and run 'npm install'</li>
<li>From the terminal, cd back into the root directory and install sequelize cli using 'npm install sequelize-cli'</li>
<li>Verify the username in config.json</li>
<li>Make sure Postgres is running on your machine.  If you require a password please enter it in config.json</li>
<li>In the root terminal run 'npm run db:setup' in order to create the database and migrate tables</li>
<li>Run 'npm run dev' in the backend terminal and leave running</li>
<li>In a separate terminal, cd into the '/client' directory and run 'npm run start' and leave running</li>
<li>At this point, the app will be running locally on http://localhost:4200/</li>
<li>I would like to point out that the '.env' file is exposed.  While I understand that this is not best practice, I have removed it from the .gitignore file to simplify the remote construction of this application.</li>

<h3>Database/Backend Scripts</h3>
<hr>
    <li>"start": "node ./bin/www"</li>
    <li>"dev": "nodemon ./bin/www",
    <li>"heroku-postinstall": "cd client && npm install && ng build --aot --prod"</li>
    <li>"db:create": "npx sequelize-cli db:create"</li>
    <li>"db:destroy": "npx sequelize-cli db:drop"</li>
    <li>"db:migrate": "npx sequelize-cli db:migrate"</li>
    <li>"db:reset": "npm run db:destroy; npm run db:create && npm run db:migrate"</li>
    <li>"db:setup": "npm run db:create && npm run db:migrate"</li>

<h3>Functionality</h3>
<hr>

<p>Users are able to:</p>
<ul>
<li>Register a user with a username and password - passwords are hashed and stored in database</li>
<li>Login as user and review all todos created by user - each todo is unique and held in a Todos table which is related to the Users table.  A todo list will only populate if a User is logged in and has added todos.</li>
<li>Organize Todos list alphabetically</li>
<li>Organize Todos list by due date</li>
<li>Delete Todos as they are completed</li>
<li>Log Out to hide todos</li>
</ul>

<h3>Technologies Used</h3>
<hr>
<ul>
<h5>Backend:</h5>
<li>Node.js https://nodejs.org/en/</li>
<li>Express https://expressjs.com/</li>
<li>Database: PostgreSQL https://www.postgresql.org/</li>
<li>ORM: Sequelize https://sequelize.org/</li>
<h5>Frontend:</h5>
<li>Angular 13 https://angular.io/</li>  
<li>Typescript https://www.typescriptlang.org/</li>
<h5>Authentication:</h5>
<li>JWT https://jwt.io/</li>

<h3>Future Goals</h3>
<hr>
<ul>
<li>Debug deployment to Heroku</li>
<li>Implement a store to pass state</li>


<h3>Credits</h3>
<p>
Nick Kulway (nkulway)</p>