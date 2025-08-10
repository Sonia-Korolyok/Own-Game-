import {Route, Routes} from "react-router";
import Game from "./components/Game.tsx";
import Login from "./components/Login.tsx";
import {store} from "./configureStore/store.ts";
import {Provider} from "react-redux";

const App = () => {

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
