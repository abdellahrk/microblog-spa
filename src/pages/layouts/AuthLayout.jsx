import {Outlet} from "react-router";

export default function AuthLayout() {
    return (
        <div>
            <h1>Auth Page</h1>
            <Outlet />
            <h1>Footer</h1>
        </div>
    )
}