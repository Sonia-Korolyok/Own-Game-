import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../data/firestore.ts";
import {changeId, changeLogin} from "../features/userData/userDataSlice.ts";
import {useAppDispatch} from "../app/hooks.ts";

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userName = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleSubmit() {
        const login = userName.current!.value || "Guest";
        const password = passwordRef.current!.value || "";
        try {
            const docRef = await addDoc(collection(db, "users"), {
                login,
                password,
                score: 0,
                createdAt: Date.now(),
            });
            dispatch(changeId(docRef.id));
        } catch (e) {
            console.error("Error adding user to Firestore:", e);
        }
        dispatch(changeLogin(login));
        navigate("/game");
    }

    return (
        <div className="min-h-screen p-4 flex flex-col justify-center text-center gap-7">
            <label className={'font-bold ms-1'}>Login
                <input id={"login-input"}
                    className={"p-4 border-custom ml-13 w-45 text-center transition-transform duration-300 active:scale-95"}
                    type={"text"} ref={userName}></input>
            </label>
            <label className={'font-bold'}>Password
                <input id={"password-input"}
                    className={"p-4 border-custom ml-6 w-45 text-center transition-transform duration-300 active:scale-95"}
                    type={"password"} ref={passwordRef}></input>
            </label>
            <button className="btn-yellow" onClick={handleSubmit}>Sign in</button>
        </div>
    );
};

export default Login;