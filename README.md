Steps to run the application
CLone the repository to your local machine
go to the project FullStackEngineerChallenge folder
1. run npm install
2. go inside the client folderrun npm install (again)
3. come back to the root folder
4. start the app by hitting `npm run dev` script
5. go to localhost:3000 // it will automatically route you to the browser
6. click on sign In on top right to go inside the App
7. Admin stub credentials
// username - rahil
// password - 123456


Tech Stack used
React, Redux on client
Node js as a backend
MongoDB as a database


// Folder structures
client folder
/public for // for static resources HTML file and css
/src folder has
 ->actions // since i am using redux
 ->components // different components like  Header / Admin View etc
 ->containers // smart components that hold control for child components
 ->reducers // pure functions to update App's state

Server Folder
 ->  models (Employee and Performance model)
 -> routes (auth and admin)

index file serving as an entry point for server side code
