import {Route, Routes} from "react-router";
import Game from "./components/Game.tsx";
import Login from "./components/Login.tsx";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./data/firestore.ts";
import {useEffect} from "react";
import {useAppDispatch} from "./app/hooks.ts";
import {changeScore} from "./features/scoreData/scoreSlice.ts";
import {changeId, changeLogin} from "./features/userData/userDataSlice.ts";
import Registration from "./components/Registration.tsx";

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        console.log(userId);
        getDocs(collection(db, "users"))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {
                    if(doc.id === userId) {
                        const user = doc.data();
                        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                        dispatch(changeScore(user.score));
                        dispatch(changeLogin(user.login));
                        dispatch(changeId(user.id));
                    }
                });
            })
            .catch((error) => {
                console.error("Error fetching users from Firestore:", error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1a1a4f] to-[#000032]
            text-white p-4 flex flex-col items-center gap-6">
                    <Routes>
                        <Route path="/game" element={<Game/>}/>
                        <Route path="/register" element={<Registration/>}/>
                        <Route path="/" element={<Login/>}/>
                        <Route path="/login" element={<Login />} />
                    </Routes>
        </div>
    );
};

export default App;
