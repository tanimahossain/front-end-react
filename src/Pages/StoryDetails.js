import '../App.css';
import FullStory from '../Components/FullStory.js';
import Navbar from '../Components/Navbar.js';
function App() {
    return (
        <div>
            <Navbar user={false} />
            <FullStory storyId="tanimahossain_2" />
        </div>
    );
}

export default App;
