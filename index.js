/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee from '@notifee/react-native';


notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification, pressAction } = detail;
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default2',
      name: 'Default Channel',
    });


    console.log(channelId);
    

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'prince sapra now the new notiication is coming  Main body content of the notification',
      android: {
        channelId,
       // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  });
  

AppRegistry.registerComponent(appName, () => App);
