import {
    BrowserRouter,
    Navigate,
    Route,
    // eslint-disable-next-line prettier/prettier
    Routes
} from 'react-router-dom';
import './App.css';
import { AlertProvider } from './Components/AlertContext.js';
import Layout from './Components/Layout.js';
import HomePage from './Pages/HomePage.js';
import PostStoryPage from './Pages/PostStoryPage.js';
import ProfilePage from './Pages/ProfilePage.js';
import SignUpLogIn from './Pages/SignUpLogIn.js';
import StoryDetails from './Pages/StoryDetails.js';
import UpdateStory from './Pages/UpdateStory.js';
import UserUpdatePage from './Pages/UserUpdatePage.js';

function App() {
    return (
        <>
            <AlertProvider>
                <BrowserRouter>
                    <Layout>
                        <Routes>
                            <Route
                                path="/homepage"
                                exact
                                element={<HomePage />}
                            />
                            <Route
                                path="/stories/"
                                exact
                                element={<PostStoryPage />}
                            />
                            <Route
                                path="/stories/:id"
                                exact
                                element={<StoryDetails />}
                            />
                            <Route
                                path="/stories/:id/edit"
                                exact
                                element={<UpdateStory />}
                            />
                            <Route
                                path="/users/"
                                exact
                                element={<UserUpdatePage />}
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
                                element={
                                    <Navigate to="/homepage" />
                                }
                            />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </AlertProvider>
        </>
    );
}

export default App;
