
import './App.css';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
function App() {
  return (
    
    <div>
    <header>
        <h1>Web Development Hub</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Services</a>
            <a href="/">Contact</a>
        </nav>
    </header>

    <div class="container">
        <h2>Singers Data</h2>
        <table>
            <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Albums</th>
            </tr>
            <tr>
                <td>John Doe</td>
                <td>Pop</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Jane Smith</td>
                <td>R&B</td>
                <td>3</td>
            </tr>
            <tr>
                <td>Mike Johnson</td>
                <td>Rock</td>
                <td>7</td>
            </tr>
        </table>
    </div>

    <div class="slider">
        <div class="slides">
            <div class="slide"><img src={image1} alt="Slide 1"/></div>
            <div class="slide"><img src={image2} alt="Slide 2"/></div>
            <div class="slide"><img src={image3} alt="Slide 3"/></div>
        </div>
    </div>

    <div class="footer">
        <p>&copy; 2024 Web Development Hub</p>
    </div>
    </div>
    
    
  );
}

export default App;
