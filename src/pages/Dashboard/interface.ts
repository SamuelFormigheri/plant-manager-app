export interface IEnvironmentsProps{
    key: string;
    title: string;
}

export interface IPlantsProps{
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
}