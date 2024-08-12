import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './page/Home';
import Sidebar from './compoments/Sidebar';

function App() {

  const token = 'hardToken'
  return (
    <div className='w-full h-full'>
      {!token ? <div>
        LoginPage
      </div>
        : <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/resource" element={<HomePage />} />
              <Route path="/project" element={<HomePage />} />
              <Route path="/process" element={<HomePage />} />
              <Route path="/task" element={<HomePage />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      }
    </div>
  )
}

export default App
