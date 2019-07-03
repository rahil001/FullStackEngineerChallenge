Steps to run the application
# unzip the folder
# From terminal go to the project
# run npm install
# start the app by hitting `npm run dev` script
# go to localhost:3000
# click on sign In on top right to go inside the App


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
