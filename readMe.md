# Go Out!

Go Out! is a mobile app that gives its users the platform to find, attend, and organise a range of interesting activities that they enjoy, within the local area. All activities are organised by fellow users, giving them the opportunity to connect with like-minded people, hopefully increasing the sense of community within its local user base.

#

<img src="../get-out/screenshots/homepage.png" style="width:200px;"/>
<img src="../get-out/screenshots/activityList.png" style="width:200px;">
<img src="../get-out/screenshots/organiser.png" style="width:200px;">
<img src="../get-out/screenshots/userProfile.png" style="width:200px;">

<br/>

## Link to our repository

---

[GoOut](https://github.com/kam-cheng/get-out)

<br/>

## Tech stack we used

---

- React Native
- Firebase
- Expo
- Android Emulator

<br/>

## Install

---

```bash
npm install
```

<br/>

## Minimum Versions

---

- Node.js - 16.14.0

<br/>

## Enviroment Set-up

---

For development purposes you will need to set up [React Native](https://reactnative.dev/docs/environment-setup).

You will need [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) to run the app.

We’re using Expo’s bare workflow due to the integration with react native firebase, so you will not be able to load the app using expo go.

<br/>

## To run the app

---

```bash
npx react-native start
npx react-native run-android
```

<br/>

## Features

---

- Users can search for activities by category of activity.
- Users can also search for activities based on distance, using the map screen tab. Activities are displayed as pins on the map, and link to the Activity.
- Users can view details of Activities, including the organiser, location, description, reviews and ratings.
- Users can book and cancel bookings.
- Users can create their own events via the link on the Profile Page
- Activity Creation page allows users to upload their own photos, select location using google places autocomplete.
- Users can cancel activities they have organised.
- Users can rate and review past activities they have attended.

<br/>

## Future Developments

---

- Using the phones location to bring up activities in realtime
- Using authentication with a user log in.
- Adding a payment options for activities
- A live chat feature for contacting an organiser
- A notification feature so that users are alerted when an activity is due to start
- Having a verified user feature
- And adding a moderator feature for user safety so that a user can add a complaint if required.
