import {Route, Routes} from "react-router";
import Game from "./components/Game.tsx";
import Login from "./components/Login.tsx";
import {doc, getDoc} from "firebase/firestore";
import {db} from "./data/firestore.ts";
import {useEffect} from "react";
import {useAppDispatch} from "./app/hooks.ts";
import {changeScore} from "./features/scoreData/scoreSlice.ts";
import {changeId, changeLogin} from "./features/userData/userDataSlice.ts";
import Registration from "./components/Registration.tsx";
import {runTopicsMigration} from "./data/migrate.ts";
import AnswersHistory from "./components/AnswersHistory.tsx";


const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        runTopicsMigration();
        const userId = localStorage.getItem("userId");
        if (userId) {
            const ref = doc(db, "users", userId);
            getDoc(ref).then((snapshot) => {
                if (snapshot.exists()) {
                    const user = snapshot.data() as { login?: string; score?: number };
                    dispatch(changeScore(user.score ?? 0));
                    dispatch(changeLogin(user.login ?? ""));
                    // id из snapshot.id, в документе поля id нет
                    dispatch(changeId(snapshot.id));
                }
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1a1a4f] to-[#000032]
            text-white p-4 flex flex-col items-center gap-6">
            <Routes>
                <Route path="/game" element={<Game/>}/>
                <Route path="/register" element={<Registration/>}/>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/history" element={<AnswersHistory/>}/>
            </Routes>

        </div>
    );
};

export default App;
