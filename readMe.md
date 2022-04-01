# Go Out!

Go Out! is a mobile app that gives its users the platform to find, attend, and organise a range of interesting activities that they enjoy, within the local area. All activities are organised by fellow users, giving them the opportunity to connect with like-minded people, hopefully increasing the sense of community within its local user base.

#

<img src="https://firebasestorage.googleapis.com/v0/b/get-out-21a4f.appspot.com/o/homepage.png?alt=media&token=a6d5ca93-2c8e-4894-90db-0363c8185d2f" style="width:200px;"/>
<img src="https://firebasestorage.googleapis.com/v0/b/get-out-21a4f.appspot.com/o/activityList.png?alt=media&token=c655b0e5-4a14-43f6-809b-139b2ad8273b" style="width:200px;">
<img src="https://firebasestorage.googleapis.com/v0/b/get-out-21a4f.appspot.com/o/organiser.png?alt=media&token=4a61fca3-8706-4ffd-b89d-e5176cd47856" style="width:200px;">
<img src="https://firebasestorage.googleapis.com/v0/b/get-out-21a4f.appspot.com/o/userProfile.png?alt=media&token=20a6009a-dd27-44c4-90db-b10c2f386c7c" style="width:200px;">

<br/>

## Link to our repository

---

[GoOut](https://github.com/kam-cheng/get-out)

<br/>

## Download and run our App (support for android devices only)

---

[Download Link](https://expo.dev/artifacts/eas/j3WiqqvYhFLwrpCtBwEwZF.apk)

### Emulator Recommended:

If you have an emulator installed, simple drag the downloaded file to the emulator, swipe up to open the app drawer and open the "get-out" app".

For android devices, ensure that you have enabled apk installation from external sources. [Guide here](https://www.expressvpn.com/support/vpn-setup/enable-apk-installs-android/)

If you are unable to install the app using google chrome, we recommend using [ES File Explorer](https://es-file-explorer.en.uptodown.com/android)

Once enabled, click on the .apk file to install.
<br/>

## Tech Stack

---

- React Native
- Firebase
- Expo
- Android Emulator

<br/>

## Installation Instructions

In your terminal input the following:

```bash
git clone https://github.com/kam-cheng/get-out.git
cd get-out
npm install
```

As Go Out! uses [react-native-google-autoplaces-complete](https://github.com/FaridSafi/react-native-google-places-autocomplete), you will need to add your own API key to the App.

To do so, get your [Google Places API keys](https://developers.google.com/maps/documentation/places/web-service/get-api-key/) and enable "Google Places API" in the console. Billing must be enabled on the account.

In the get-out directory create the folder `key`.

Inside the folder, create the file `Maps.js`.

In the file, input the following (replacing YOUR_API_KEY with the google places API key):

```
const MAPS_API_KEY = YOUR_API_KEY;

export default MAPS_API_KEY;

```

<br/>

## Minimum Versions Supported

---

- Node.js - 16.14.0

<br/>

## Enviroment Set-up

---

For development purposes you will need to set up [React Native](https://reactnative.dev/docs/environment-setup).

In order ot load the app on an android device, you will need to set up an emulator. We recommend using [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/) to run the app.

As we are using Expo’s bare workflow, due to App's integration with React Native Firebase, you will not be able to load the app using Expo Go.

<br/>

## Running the App

---

In the terminal input the following:

```bash
npx react-native start
npx react-native run-android
```

<br/>

## App Features

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
