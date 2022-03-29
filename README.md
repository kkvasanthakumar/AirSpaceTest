## AirSpace Test Automation

In this project, testscenarios are automated for the provided web application https://the-internet.herokuapp.com/login. 

### Language and tools 

- **Programming lanugage**: Java script 
- **Test Automation tools**: Cypress
- **Packaging Manager**: npm, yarn
- **Version Control**: Github
- **IDE**: Microsoft Visual Studio Code

### Prerequisite
Yarn and npm to be installed 

### To run Tests 

use the following command in terminal in home directory of the project

1. Open cmd prompt

2. Create new folder 

3. cd to the new folder 

4. git clone https://github.com/kkvasanthakumar/AirSpaceTest.git 
5. Run the following commands to run the script

```
npm install cypress --save-dev
```
```
yarn add cypress --dev
```
```
./node_modules/.bin/cypress open
```
6. After Cypress is opened click AirSpaceLoginTest.js in the Cypress window. 

7. This will start executing the test cases in the default browser. 
