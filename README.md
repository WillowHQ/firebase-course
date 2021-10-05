# 2 - Storing Firebase Config in a `.env` File


This tutorial is based on the **React and Firebase Starter💞** that we created. You can read more about it in its [readme](https://github.com/codebusters-ca/react-firebase-starter#react--firebase-starter).

## Prerequisites

In the [first tutorial](https://github.com/codebusters-ca/firebase-course/tree/01-project-setup#1---setting-up-a-react-and-firebase-project), we set up a brand new React and Firebase app, initialized a local Firebase directory with Emulators, and connected it to a Firebase project. You need to have all of that working in order to use this branch's code.

## Use

Check out this branch with `git checkout 02-firebase-configs`.

Install new dependencies with `npm install`.

**Optional**: if you want to switch to a different project from the one you chose when running `firebase init`:
  - Get the list of all Firebase projects available to you: `firebase projects:list`
  - Copy the id of the project you want to switch to
  - Switch with `firebase use <your-project-id>`

To create the `.env` file, run `node configTool.js` from the root directory of your project. You should see the `.env` file appear with your project's config in it.

To make sure that the environment variables are being passed to the app, run it with:
* `npm run start`

You should see your app compiled and working successfully.

## What's Next?

Move on to the next tutorial with `git checkout 03-create-read-update` and follow instructions in its Readme to start reading from and writing to the Firestore database.

## Contribute

We ❤️ feedback and help from fellow devs! Check out [open issues](https://github.com/codebusters-ca/react-firebase-starter/issues), create a [new one](https://github.com/codebusters-ca/react-firebase-starter/issues/new?labels=bug), or send us a [pull request](https://github.com/codebusters-ca/react-firebase-starter/compare).

## Licence

This project is licensed under the [MIT license](https://github.com/codebusters-ca/firebase-course/blob/main/LICENSE).
