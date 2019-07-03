Steps to run the application
# CLone the repository to your local machine
# go to the project FullStackEngineerChallenge folder
# run npm install
# go inside the client folder
# run npm install (again)
# come back to the root folder
# start the app by hitting `npm run dev` script
# go to localhost:3000 // it will automatically route you to the browser
# click on sign In on top right to go inside the App
Admin stub credentials
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
