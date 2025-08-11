import {Route, Routes} from "react-router";
import Game from "./components/Game.tsx";
import Login from "./components/Login.tsx";
import {store} from "./configureStore/store.ts";
import {Provider} from "react-redux";
import { collection, getDocs } from "firebase/firestore";
import {db} from "./data/firestore.ts"

const App = () => {
       getDocs(collection(db, "users")).then(querySnapshot =>
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
        })
    )


    return (
        <div className="min-h-screen bg-gradient-to-b from-[#1a1a4f] to-[#000032]
            text-white p-4 flex flex-col items-center gap-6">
            <Provider store={store}>
                    <Routes>
                        <Route path="/game" element={<Game />} />
                        <Route path="/" element={<Login />} />
                    </Routes>
            </Provider>
        </div>
    );
};

export default App;
