import * as Notifications from 'expo-notifications';
import { IPlant } from "../Plant/interface";

export async function removeNotification(id: string) {
    Notifications.cancelScheduledNotificationAsync(id);
}

export async function createNotification(plant: IPlant) {
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = plant.frequency;

    if(repeat_every === 'week')
    {
        const interval = Math.trunc(7 / times);
        nextTime.setDate(now.getDate() + interval);
    }
    else
    {
        nextTime.setDate(now.getDate() + 1);
    }

    const seconds = Math.abs(
        Math.ceil((now.getTime() - nextTime.getTime()) / 1000)
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
        content: {
            title: 'Heeey, 🌱',
            body: `It's time to take care of ${plant.name}`,
            sound: true,
            priority: Notifications.AndroidNotificationPriority.DEFAULT,
            data: {
                plant
            }
        },
        trigger: {
            seconds: seconds < 60 ? 60 : seconds,
            repeats: true
        }
    });

    return notificationId;
}