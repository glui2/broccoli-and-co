# About Broccoli & Co 

This project is a landing page for a fictional online services company known as Broccoli & Co. While the description of the company was open to interpretation, I opted for a light, natural feel for the application as my immediate impression was that the company could be marketing a product that promotes good health and well-being. 

Clicking the "REQUEST AN INVITE" button shows a form for the user to complete if they would like an invitation emailed to them. Validation is performed on the respective inputs, and will not submit the request if any of the inputs returns an error. When validation is successful, the input data is sent to a mock API, which will return a 200 OK unless a certain email is used to which the mock API has been hard coded to return a 400 error response. The form will display and alert the user of this error message if this occurs, and will not proceed with the form.

This project was developed with React and Webpack (through create-react-app), with the help of Material-UI and SCSS for visuals and components and Formik to generate and validate the form. Tests were created using react-testing-library. 

## Setting up the project

After cloning the repository you can run `npm install` (or `yarn install`) to install the required dependencies. 
Once this has completed you can run the following commands to run the web app. 

## Commands to run

In the project directory, you can run:

### Windows: `npm start`   Mac: `yarn start` 

This will run the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Windows: `npm test <filename.test.js>`    Mac: `yarn test <filename.test.js>` 

Run this command in the root folder with a specific test filename in place of <filename.test.js> to run that respective test file. Or, leave <filename.test.js> blank to run all tests.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


