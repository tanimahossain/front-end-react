import '../App.css';
import Navbar from '../Components/Navbar.js';
import Stories from '../Components/StoryList.js';
function App() {
    return (
        <div>
            <Navbar user={false} />
            <Stories />
        </div>
    );
}

export default App;
