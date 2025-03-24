import {Outlet} from "react-router";

export default function DashboardLayout() {
    return (<div>
        <h1>Header</h1>
        <Outlet />
        <h1>Footer</h1>
    </div>)
}