
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {changeLogin} from "../features/userSlice.ts";

const UserData = () => {
    const userName = useAppSelector(state => state.userLayer.user.login);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(changeLogin(""));
        navigate("/");
    };

    return (
        <div className="flex items-center gap-4 text-yellow-400 text-right">
            <div>
                <div className="text-sm">Nickname:</div>
                <div className="text-lg font-bold">{userName + "" || "Guest"}</div>
            </div>
            <button onClick={logout} className="btn-yellow py-1 px-3">
                Logout
            </button>
        </div>
    );
};

export default UserData;
