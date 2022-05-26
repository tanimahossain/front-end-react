import { StrictMode } from 'react';
import {
    BrowserRouter,
    Route,
    // eslint-disable-next-line prettier/prettier
    Routes
} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.js';
import ProfilePage from './Pages/ProfilePage.js';
import SignUpLogIn from './Pages/SignUpLogIn';
import StoryDetails from './Pages/StoryDetails.js';
function App() {
    return (
        <>
            <StrictMode>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/homepage"
                            exact
                            element={<HomePage />}
                        />
                        <Route
                            path="/stories/:id"
                            exact
                            element={<StoryDetails />}
                        />
                        <Route
                            path="/users/:id"
                            exact
                            element={<ProfilePage />}
                        />
                        <Route
                            path="/auth"
                            exact
                            element={<SignUpLogIn />}
                        />
                        <Route
                            path="*"
                            element={<HomePage />}
                        />
                    </Routes>
                </BrowserRouter>
            </StrictMode>
        </>
    );
}

export default App;
