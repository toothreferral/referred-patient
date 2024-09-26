import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import generalRoutes from './Layout/Routes/GeneralRutes';
import dashboardRoutes from './Layout/Routes/DashboardRoutes';
import DashboardLayout from './Layout/DashboardLayout';
import NotFound from './Pages/404/NotFound';
import { useAuthHook } from './Hooks/authHook';
import { useAppDispatch, useAppSelector } from './Redux/reduxHooks';
import { SelectSessionTimer } from './Redux/Features/onboardingSlice';
import { useEffect } from 'react';
import { useGetSellerDataQuery } from './api/apiSlice';
import { getCurrentUser } from './Redux/Features/userDatasSlice';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const { setSession } = useAuthHook();
  const expires = useAppSelector(SelectSessionTimer);
  const { data, isLoading } = useGetSellerDataQuery({});
  const dispatch = useAppDispatch();

  // auto logout user when the token expires
  useEffect(() => {
    expires !== '' && setSession(expires);
  }, [setSession, expires]);

  useEffect(() => {
    if (!isLoading && data) dispatch(getCurrentUser(data?.seller));
  }, [dispatch, data, isLoading]);

  return (
    <main className='App'>
      <Toaster position='top-center' />

      <Router>
        <Routes>
          {generalRoutes.map((route, idx: number) => (
            <Route key={idx} path={route.path} element={route.element} />
          ))}
          {dashboardRoutes.map((route, idx: number) => (
            <Route
              key={idx}
              path={route.path}
              element={<DashboardLayout>{route.element}</DashboardLayout>}
            />
          ))}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
