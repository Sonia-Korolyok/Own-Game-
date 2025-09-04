
export interface UserStateInterface {
    id: string;
    user: UserInfo
}

export interface UserInfo {
    login: string,
    password: string,
}

export interface ScoreStateInterface {
    scores: {
        score: number
    }
}

export interface Question {
    price: number;
    question: string;
    answer: string;
}

export interface Topic {
    title: string;
    questions: Question[];
}
