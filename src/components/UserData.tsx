import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {StateInterface} from "../utils/types.ts";
import {changeLogin} from "../actions/userAction.ts";

const UserData = () => {
    const userName = useSelector<StateInterface>(state => state.user.login);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(changeLogin(""));
        navigate("/");
    };

    return (
        <div className="flex items-center gap-4 text-yellow-400 text-right">
            <div>
                <div className="text-sm">Nickname:</div>
                <div className="text-lg font-bold">{userName!.toString() || "Guest"}</div>
            </div>
            <button onClick={logout} className="btn-yellow py-1 px-3">
                Logout
            </button>
        </div>
    );
};

export default UserData;
