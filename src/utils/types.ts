

export interface UserStateInterface {
    id: string;
    user: {
        login: string,
        password: string,
    }
}

export interface ScoreStateInterface {
    scores: {
        score: number
    }
}
export interface UserInfo {
    login: string,
    password: string
}