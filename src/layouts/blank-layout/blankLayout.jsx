import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const BlankLayout = () => {
    const isAuth = !!localStorage.getItem("userToken");
    if (isAuth) return <Outlet />;
    <Navigate to={"login"} />;
}

export default BlankLayout;
