import NavBar from './components/NavBar';
import useFetch from './hooks/useFetch/useFetch';

import MusicList from './components/MusicList';

function App() {
    const { data, isLoading } = useFetch('http://localhost:8888/songs');
    console.log(data);
    return (
        <div className="App">
            <NavBar></NavBar>
            {data && <MusicList songs={data} className="w-full"></MusicList>}
        </div>
    );
}

export default App;
