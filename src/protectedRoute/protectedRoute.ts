import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom"

interface protectedRouteProps {
    children: ReactNode
}
const ProtectedRoute: React.FC<protectedRouteProps> = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            alert('Sesi Anda Berakhir, Silahkan Login Kembali!');
            navigate('/');
        }
    }, [token, navigate]);

    return token ? children : null;
}

export default ProtectedRoute;