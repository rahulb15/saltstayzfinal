import React from 'react';
import AlertArea from './AlertArea';
import CardBoxArea from './CardBoxArea';
import RecentActivity from './RecentActivity';
import DashBreadCrumb from '../common/breadcrumb/DashBreadCrumb';

const DashboardMain = () => {
    return (
        <>
            <DashBreadCrumb titleOne='Dashboard' titleTwo='Dashboard' />
            <AlertArea />
            <CardBoxArea />
            <RecentActivity />
        </>
    );
};

export default DashboardMain;