'use client';

import React from "react";
import { useSelector } from "react-redux";
import DasboardContent from "./widgets/DasboardContent";
import UnAuthorizedView from "./widgets/UnAuthorizedView";

const Dashboard = () => {

    const admin = useSelector((state: any) => state.admin.admin);

    return (
        <React.Fragment>
            {(admin) && <DasboardContent />}
            {(!admin) && <UnAuthorizedView />}
        </React.Fragment>
    )
}

export default Dashboard;