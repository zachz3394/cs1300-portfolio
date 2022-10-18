import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Work from './Work';
import PersonasAndStoryboarding from './uiux-coursework/PersonasAndStoryboarding';
import ResponsiveRedesign from './uiux-coursework/ResponsiveRedesign';


function AppRouter() {
  return (
    <div style={{
      padding: '24px',
    }}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/work" element={<Work />}/>
        <Route path="/uiux/personas-storyboarding" element={<PersonasAndStoryboarding />}/>
        <Route path="/uiux/responsive-redesign" element={<ResponsiveRedesign />}/>
      </Routes>
    </div>
  );
}

export default AppRouter;
