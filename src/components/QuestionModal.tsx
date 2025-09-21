import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {fetchScoreUpdateDB} from "../features/scoreData/scoreSlice.ts";
import {markAnswered} from "../features/topics/topicsSlice.ts";
import {addAnswerToHistory} from "../features/answers/answersSlice.ts";


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
        if (!id) {
            alert("Сохранение очков доступно только для авторизованных пользователей");
            return;
        }
        dispatch(fetchScoreUpdateDB({price, oldScore, id}));
    }

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
                                    dispatch(markAnswered({ title, price, result: 'correct' }));
                                    if (id) {
                                        dispatch(addAnswerToHistory({ userId: id, answer: {
                                                title,
                                                price,
                                                question,
                                                result: 'correct',
                                                answeredAt: Date.now()
                                            }}));
                                    }
                                    changeScore(price)
                                    onClose()
                                }}> YES
                        </button>
                        <button className="btn-yellow"
                                onClick={() => {
                                    dispatch(markAnswered({ title, price, result: 'wrong' }));
                                    if (id) {
                                        dispatch(addAnswerToHistory({ userId: id, answer: {
                                                title,
                                                price,
                                                question,
                                                result: 'wrong',
                                                answeredAt: Date.now()
                                            }}));
                                    }
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