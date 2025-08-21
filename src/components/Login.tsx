
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../app/hooks.ts";
import {fetchUserSaveInDB} from "../features/userSlice.ts";

const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userName = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function handleSubmit() {
        const login = userName.current!.value || "Guest";
        const password = passwordRef.current!.value || "";
        dispatch(fetchUserSaveInDB({login, password}));
        navigate("/game");
    }

    return (
        <div className="min-h-screen p-4 flex flex-col justify-center text-center gap-7">
            <label className={"font-bold"}>Login
                <input id={"login-input"}
                       className={"p-4 ms-5 ml-13 border-custom w-42 text-center transition-transform duration-300 active:scale-95"}
                       type={"text"} ref={userName}></input>
            </label>
            <label className={"font-bold"}>Password
                <input id={"password-input"}
                       className={"p-4 ms-5 border-custom w-42 text-center transition-transform duration-300 active:scale-95"}
                       type={"password"} ref={passwordRef}></input>
            </label>
            <button className="btn-yellow" onClick={handleSubmit}>Sign in</button>
        </div>
    );
};

export default Login;
