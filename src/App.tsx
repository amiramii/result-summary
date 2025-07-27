import './App.css'
import Page from './components/Page'
import { HashRouter } from 'react-router-dom';
function App() {

  return (
    <HashRouter>
      <div className='flex flex-col m-auto min-h-dvh md:bg-Pale-blue md:items-center md:justify-center '>
        <Page/>
      </div>
    </HashRouter>
    
  )
}

export default App
