import {useRef} from "react";
import {NavLink} from "react-router";
import {useDispatch} from "react-redux";
import {changeLogin} from "../actions/userAction.ts";

const Login = () => {
    const dispatch = useDispatch();
    const userName = useRef<HTMLInputElement>(null);

    function handleSetNickName() {
        dispatch(changeLogin(userName.current?.value || "guest"));
    }

    return (
        <div className="min-h-screen p-4 flex flex-col gap-6">
            <label>Login
                <input
                    className={"p-4 border-custom w-32 text-center transition-transform duration-300 active:scale-95"}
                    type={"text"} ref={userName}></input>
            </label>
            <label>Password
                <input
                    className={"p-4 border-custom w-32 text-center transition-transform duration-300 active:scale-95"}
                    type={"text"}></input>
            </label>
            <NavLink to={"/game"}>
                <button className="btn-yellow"
                        onClick={() => handleSetNickName()}>Sign in
                </button>
            </NavLink>
        </div>
    );
};

export default Login;