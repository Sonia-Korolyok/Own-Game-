import ScoreData from "./ScoreData";
import UserData from "./UserData";
import {NavLink} from "react-router";
import {useAppSelector} from "../app/hooks.ts";

const PageHeader = () => {
    const userId = useAppSelector(s => s.userLayer.id);
    return (
        <div className="w-full max-w-5xl bg-[#1f1f6b] border-custom py-2 px-4 mb-4 animate-fade-in-up rounded-lg mx-auto">
        <div className="flex justify-between items-center">
                <ScoreData />
                <h1 className="text-2xl font-bold text-yellow-400 tracking-wider animate-pulse-glow text-center">
                    Own Game
                </h1>
                <div className="flex items-center gap-3">
                    {userId && (
                        <NavLink to={'/history'} className="btn-yellow py-1 px-3">History</NavLink>
                    )}
                    <UserData />
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
