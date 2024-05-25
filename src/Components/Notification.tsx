import React from 'react';
import { View, Button } from 'react-native';
import notifee from '@notifee/react-native';

export default function Screen() {
  async function onDisplayNotification() {
    console.log("yes this is wokring");
    
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });


    console.log(channelId);
    

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'now the new notiication is coming  Main body content of the notification',
      android: {
        channelId,
       // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });

    await notifee.displayNotification({
      id: '123',
      title: 'Updated Notification Title',
      body: 'Updated main body content of the notification',
      android: {
        channelId,
      },
    });
  }

  return (
    <View>
      <Button title="Display Notification" onPress={() => onDisplayNotification()} />
    </View>
  );
}