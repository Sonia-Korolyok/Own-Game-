import type {Topic} from "../utils/types";
import * as React from "react";
import {useAppSelector} from "../app/hooks.ts";


interface Props {
    topics: Topic[];
    onQuestionClick: React.Dispatch<React.SetStateAction<{
        title: string,
        price: number,
        question: string,
        answer: string
    } | null>>;
}

const GameBoard = ({topics, onQuestionClick}: Props) => {
    const selectedMap = useAppSelector(s => s.topics.selectedIndexByTitleAndPrice);
    const answeredMap = useAppSelector(s => s.topics.answeredStatusByTitleAndPrice);
    return (
        <div>

            <div className="flex flex-col gap-2 w-fit mx-auto">

                {topics.map((topic, i) =>
                    <div key={i}  className="flex">
                        <div className="w-32 bg-[#1f1f6b] hover:bg-[#000088] cursor-pointer text-white text-lg font-semibold p-4
                        border-custom">
                            {topic.title}
                        </div>


                        {[100,200,300,400,500].map((priceVal) => {
                            const idx = selectedMap[topic.title]?.[priceVal];
                            const picked = typeof idx === 'number' ? topic.questions[idx] : undefined;
                            const status = answeredMap[topic.title]?.[priceVal];
                            const isAnswered = status === 'correct' || status === 'wrong';
                            const bg = status === 'correct' ? 'bg-green-700' : status === 'wrong' ? 'bg-red-700' : 'bg-[#000066] hover:bg-[#000088]';
                            return (
                                <button key={priceVal}
                                        onClick={() => picked && onQuestionClick({
                                            title: topic.title,
                                            price: priceVal,
                                            question: picked.question,
                                            answer: picked.answer
                                        })}
                                        disabled={!picked || isAnswered}
                                        className={`${bg} ${isAnswered ? 'opacity-80 cursor-not-allowed' : 'cursor-pointer'} text-yellow-400 text-xl font-bold
                                    p-4 border-custom w-32 text-center transition-transform duration-300 active:scale-95`}
                                >
                                    {priceVal}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};


export default GameBoard;