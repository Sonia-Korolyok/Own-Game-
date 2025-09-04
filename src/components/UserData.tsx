import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {logOutAction} from "../app/store.ts";

const UserData = () => {
    const userName = useAppSelector(state => state.userLayer.user.login);
    const isGuest = !userName || userName === "Guest"; // or id ?
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const logout = () => {
        localStorage.removeItem("userId");
        dispatch(logOutAction());
        navigate("/login");
    };

    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="flex items-center gap-4 text-yellow-400 text-right">
            <div>
                <div className="text-sm">Nickname:</div>
                <div className="text-lg font-bold">{userName || "Guest"}</div>
            </div>
            {isGuest ? (
                <button onClick={goToLogin} className="btn-yellow py-1 px-3">
                    Go to Login Page
                </button>
            ) : (
                <button onClick={logout} className="btn-yellow py-1 px-3">
                    Logout
                </button>
            )}
        </div>
    );
};

export default UserData;
