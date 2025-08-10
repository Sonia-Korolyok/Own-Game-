import {useSelector} from "react-redux";
import type {StateInterface} from "../utils/types.ts";

const ScoreData = () => {
    const score = useSelector<StateInterface, number>(state => state.scores.score);

    return (
        <div className="userData p-4 border-custom relative top-0 text-yellow-400 text-right">
            <div className="text-2xl font-bold">Score: {score}</div>
        </div>
    );
};

export default ScoreData;
