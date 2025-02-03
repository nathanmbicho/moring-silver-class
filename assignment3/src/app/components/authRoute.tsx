"use client";

import { ReactNode } from "react";
import { useAuth } from "../context/authContext";
import { redirect } from "next/navigation";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { currentUser } = useAuth();

    if (!currentUser) {
        redirect("/login"); // Redirect if not logged in
    }

    return <>{children}</>;
};

export default ProtectedRoute;
