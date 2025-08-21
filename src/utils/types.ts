

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
