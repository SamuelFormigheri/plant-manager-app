export interface IUser{
    name: string;
}

export interface IAuthContext{
    user: IUser;
    profilePic: string;
    signUser: (user: IUser) => void;
    updatePhoto: () => void;
}