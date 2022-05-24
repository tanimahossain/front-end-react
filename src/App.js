import {
    BrowserRouter,
    Route,
    // eslint-disable-next-line prettier/prettier
    Routes
} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.js';
import StoryDetails from './Pages/StoryDetails.js';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/homepage"
                    exact
                    element={<HomePage />}
                />
                <Route
                    path="/stories/tanimahossain_2"
                    exact
                    element={<StoryDetails />}
                />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
