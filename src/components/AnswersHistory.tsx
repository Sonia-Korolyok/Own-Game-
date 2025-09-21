import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {fetchAnswersHistory} from "../features/answers/answersSlice.ts";
import {NavLink} from "react-router";

const AnswersHistory = () => {
    const dispatch = useAppDispatch();
    const userId = useAppSelector(s => s.userLayer.id);
    const {items, loading} = useAppSelector(s => s.answers);

    useEffect(() => {
        if (userId) {
            dispatch(fetchAnswersHistory({userId}));
        }
    }, [dispatch, userId]);

    if (!userId) {
        return <div className="text-center">Требуется вход для просмотра истории.</div>;
    }

    return (
        <div className="w-full max-w-3xl mx-auto p-4 border-custom rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">История ответов</h2>
            <div className="mb-4">
                <NavLink to={'/game'} className="btn-yellow py-1 px-3">Вернуться к игре</NavLink>
            </div>
            {loading && <div>Загрузка...</div>}
            {!loading && items.length === 0 && <div>Пока нет ответов.</div>}
            <div className="flex flex-col gap-2">
                {items.map((a) => (
                    <div key={a.id} className={`p-3 rounded border-custom ${a.result === 'correct' ? 'bg-green-800/40' : 'bg-red-800/40'}`}>
                        <div className="flex justify-between">
                            <div className="font-semibold">{a.title} — {a.price}</div>
                            <div className="opacity-80 text-sm">{new Date(a.answeredAt).toLocaleString()}</div>
                        </div>
                        <div className="mt-1 text-sm opacity-90">{a.question}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnswersHistory;


