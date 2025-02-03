import {useState} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

export default function Logout() {
    const router = useRouter();
    const [error, setError] = useState("");

    //log out user then redirect to log in page
    const handleLogout = async () => {
        setError("");
        try {
            await signOut(auth);
            router.push("/login");
        } catch (err) {
            setError(Object(error).message);
        }
    };

    return (
        <div>
            {error && (
                <p className="text-center text-sm bg-red-300 p-5">
                    {error}
                </p>
            )}
            <div className="flex justify-end items-center">
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    Logout
                </button>
            </div>
        </div>
    );
}
