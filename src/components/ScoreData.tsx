
import {useAppSelector} from "../app/hooks.ts";

const ScoreData = () => {
    const score = useAppSelector(state => state.score.scores.score);

    return (
        <div className="userData p-4 border-custom relative top-0 text-yellow-400 text-right">
            <div className="text-2xl font-bold">Score: {score}</div>
        </div>
    );
};

export default ScoreData;
