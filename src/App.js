import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import UserContext from './context/user';
import useAuthListener from './hooks/use-auth-listener';
import './styles/app.css';

import ProtectedRoute from './helpers/protected-route';
import IsUserLoggedIn from './helpers/is-user-logged-in';

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/sign-up'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));

function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <IsUserLoggedIn
              user={user}
              loggedInpath={ROUTES.DASHBOARD}
              path={ROUTES.LOGIN}
            >
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn
              user={user}
              loggedInpath={ROUTES.DASHBOARD}
              path={ROUTES.SIGN_UP}
            >
              <Signup />
            </IsUserLoggedIn>

            {/* <IsUserLoggedIn
              user={user}
              loggedInpath={ROUTES.PROFILE}
              path={ROUTES.NOT_FOUND}
            >
              <Profile />
            </IsUserLoggedIn> */}

            <Route path={ROUTES.PROFILE} component={Profile} />

            <ProtectedRoute user={user} path={ROUTES.DASHBOARD} exact>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
