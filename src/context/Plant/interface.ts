export interface IPlant{
    id: number;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: string[];
    frequency: {
      times: number;
      repeat_every: "week" | "day" | "month"
    }
    dateTimeNotification: Date;
}

export interface IPlantLoad extends IPlant{
    hour: string;
}

export interface IPlantContext{
    [id: string]: { 
        data: IPlant;
        notificationId: string;
    };
}

export interface IPlants {
    plants: IPlantContext;
    savePlant: (plant: IPlant) => void;
    loadPlants: () => Promise<IPlantLoad[] | undefined>;
    removePlant: (plant: IPlant, callbackOnYes?: () => void) => void;
}