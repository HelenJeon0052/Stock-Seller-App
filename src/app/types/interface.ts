export interface iUserInfoProps {
    id:number;
    name:string;
    email:string;
}

export interface iUserState {
    isLogin: boolean;
    isLogoout: boolean;
}

export interface iFavoriteProps {
    value: number;
}