import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Lore from './pages/Lore/Lore';

function App() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lore/:contentTitle" element={<Lore />} />
                <Route path="/lore/:*" element={<Lore />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App