export interface IUser{
    name: string;
}

export interface IAuthContext{
    user: IUser;
    signUser: (user: IUser) => void;
}