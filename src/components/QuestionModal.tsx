
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import { fetchScoreUpdateDB} from "../features/scoreSlice.ts";



interface Props {
    title: string,
    price: number,
    question: string,
    answer: string,
    onClose: () => void
}

const QuestionModal = ({title, price, question, answer, onClose}: Props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const dispatch = useAppDispatch();
    const id = useAppSelector(state => state.userLayer.id);
    const oldScore = useAppSelector(state => state.score.scores.score)

    function changeScore(price: number) {
        dispatch(fetchScoreUpdateDB({price, oldScore, id}));
    }

    // function increase(price: number) {
    //     dispatch(increaseScore(price));
    // }
    //
    // function decrease(price: number) {
    //     dispatch(decreaseScore(price));
    // }
    //
    // async function increaseScoreInDB() {
    //     const userRef = doc(db, 'users', id)
    //     await updateDoc(userRef, {score: oldScore + price})
    // }
    //
    // async function decreaseScoreInDB() {
    //     const userRef = doc(db, 'users', id)
    //     await updateDoc(userRef, {score: oldScore - price})
    // }
    // async function changeScore (price: number) {
    //     const userRef = doc(db, 'users', id)
    //     const newScore = oldScore + price
    //     await updateDoc(userRef, {score: newScore});
    //     dispatch(changeStoreScore(newScore))


    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div
                className="bg-[#1a1a4f] rounded-xl shadow-lg p-8 w-[90%] max-w-xl text-center text-white animate-fade-in-up">
                <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
                <h2 className="text-xl text-yellow-400 mb-4">{price} scores</h2>
                <p className="text-lg mb-6">{question}</p>
                {!showAnswer ? (
                    <button
                        onClick={() => setShowAnswer(true)}
                        className="btn-yellow">
                        Show answer
                    </button>
                ) : (
                    <div><p className="mt-4 text-xl text-green-300">{answer}</p>
                        <div className="flex items-center justify-center w-full">User answered correctly?</div>
                        <button className="btn-yellow"
                                onClick={() => {
                                    changeScore(price)
                                    onClose()
                                }}> YES
                        </button>
                        <button className="btn-yellow"
                                onClick={() => {
                                    changeScore(-price)
                                    onClose();
                                }}> NO
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};


export default QuestionModal;
