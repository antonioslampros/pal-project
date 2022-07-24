
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'particles.js/particles';


import Login from './components/Login/Login';
const particlesJS = window.particlesJS;
function App() {
  particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles-js config loaded');
  });
  return (
    <div className="App">
        <div id="particles-js">
      <Login />
      </div>
    </div>
  );
}

export default App;
