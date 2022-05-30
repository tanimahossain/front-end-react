import {
    BrowserRouter,
    Route,
    // eslint-disable-next-line prettier/prettier
    Routes
} from 'react-router-dom';
import './App.css';
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
            <BrowserRouter>
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
                        element={<HomePage />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
