export const CHANGE_LOGIN = 'CHANGE_LOGIN' as const;
export const INCREASE_SCORE = 'INCREASE_SCORE' as const;
export const DECREASE_SCORE = 'DECREASE_SCORE' as const;

export const changeLogin = (login: string) => ({
    type: CHANGE_LOGIN,
    payload: login
})

export const increaseScore = (price: number) => ({
    type: INCREASE_SCORE,
    payload: price
})

export const decreaseScore = (price: number) => ({
    type: DECREASE_SCORE,
    payload: price
})