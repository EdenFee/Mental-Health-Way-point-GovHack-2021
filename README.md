# Hackathon - Project Name!

### DEMO
> App: https://dev.d37me77xm1k14c.amplifyapp.com/

### Lean Canvas
![Lean Canvas](https://github.com/EdenFee/Mental-Health-Way-point-GovHack-2021/blob/main/Lean_Canvas.png)

### Architecture
![Architecture](https://github.com/EdenFee/Mental-Health-Way-point-GovHack-2021/blob/main/architecture-gov-hack.png)

### DEV SETUP

GIT Clone this repo and follow the below steps to setup the project.

> Pre-requisites for installation

Install Node.js® and NPM if they are not already on your machine.
Verify that you are running at least Node.js version 10.x and npm version 6.x or greater by running node -v and npm -v in a terminal/console window

> Create AWS Account. 

If you don’t already have an AWS account, you’ll need to create one in order to follow the steps outlined in this tutorial.

> Install Packages:
```
npm install
```

> Install the Amplify CLI

The Amplify Command Line Interface (CLI) is a unified toolchain to create AWS cloud services for your app. Let’s go ahead and install the Amplify CLI.
```
npm install -g @aws-amplify/cli
amplify configure --usage-data-off
```

> Configure Amplify by running the following command:
```
amplify configure
```
amplify configure will ask you to sign into the AWS Console.

Once you’re signed in, Amplify CLI will ask you to create an IAM user.
```
Specify the AWS Region
region:  # Your preferred region

Specify the username of the new IAM user:
user name:  # User name for Amplify IAM user
```
Complete the user creation using the AWS console

> Create a user with AdministratorAccess to your account to provision AWS resources for you like AppSync, Cognito etc.

Once the user is created, Amplify CLI will ask you to provide the accessKeyId and the secretAccessKey to connect Amplify CLI with your newly created IAM user.

```
Enter the access key of the newly created user:
accessKeyId:  # YOUR_ACCESS_KEY_ID
secretAccessKey:  # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
Profile Name:  # (default)
```
Successfully set up the new user.

> Work within your frontend project:
```
amplify init
```

### Serve Locally
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
