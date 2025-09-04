import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../app/hooks.ts";
import {fetchUserCheckExistInDB} from "../features/userData/userDataSlice.ts";
import {NavLink} from "react-router";



const Login = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userNameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function handleSubmitSignIn() {

        const login = userNameRef.current!.value;
        const password = passwordRef.current!.value;
        if (login && password) {
            dispatch(fetchUserCheckExistInDB({login, password}));
            // todo ... dispatch(changeScore(fetchedUser.score))
            // todo ... dispatch(fetchScoreFromDB(userId))
            navigate("/game");
        } else {
            alert("Please fill in all fields");
        }
    }

    function handleSubmitGuest() {
        navigate("/game");
    }

    return (
        <div className="min-h-screen p-4 flex flex-col justify-center text-center gap-7">
            <label className={'font-bold ms-1'}>Login
                <input id={"login-input"}
                    className={"p-4 border-custom ml-13 w-45 text-center transition-transform duration-300 active:scale-95"}
                    type={"text"} ref={userNameRef}></input>
            </label>
            <label className={'font-bold'}>Password
                <input id={"password-input"}
                    className={"p-4 border-custom ml-6 w-45 text-center transition-transform duration-300 active:scale-95"}
                    type={"password"} ref={passwordRef}></input>
            </label>
            <button className="btn-yellow" onClick={handleSubmitSignIn}>Sign in</button>
            <button className="btn-yellow" onClick={handleSubmitGuest}>Sign in as a guest</button>
            <button className="btn-yellow"><NavLink to={'/register'}>Go to registration</NavLink></button>
        </div>
    );
};

export default Login;