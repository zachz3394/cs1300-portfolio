import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import PersonasAndStoryboarding from './uiux-coursework/PersonasAndStoryboarding';


function AppRouter() {
  return (
    <div style={{
      padding: '100px',
    }}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/uiux/personas-storyboarding" element={<PersonasAndStoryboarding />}/>
      </Routes>
    </div>
  );
}

export default AppRouter;
