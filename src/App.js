import './App.css';
import logo from './assests/icon.png'
import MainPage  from './components/main-page/main-page.component';

const App = () => {
  return (
    <>
      <nav className='navigation-bar'>
        <img src={logo} alt='logo' />
      </nav>
      <h3 className='sub-heading'>Let's calculate <b>distance</b> from Google maps</h3>
      <MainPage />
    </>
  )
}

export default App;
