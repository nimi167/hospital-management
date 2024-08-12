import React, { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';
import Loadable from 'component/Loadable';

const DashboardDefault = Loadable(lazy(() => import('views/Dashboard/Default')));
const Specialities = Loadable(lazy(() => import('views/Pages/Specialities')));
const Healthcare = Loadable(lazy(() => import('views/Pages/HealthcareSection')));
const AppointmentForm = Loadable(lazy(() => import('views/Pages/AppointmentForm')));
const Appointments = Loadable(lazy(() => import('views/Pages/AppointmentList')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/dashboard/default',
      element: <DashboardDefault />
    },
    { path: '/services/Specialities', element: <Specialities /> },
    { path: '/services/Healthcare', element: <Healthcare /> },
    { path: '/appointment/add-appointment', element: <AppointmentForm /> },
    { path: '/appointment/view-appointment', element: <Appointments /> },
  ]
};

export default MainRoutes;
