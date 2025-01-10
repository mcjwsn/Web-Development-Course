import { Link } from 'react-router-dom'

function Home() {
  //localStorage.clear();
  return (
    <div className='home'>
      <h1>Strona glowna</h1>
      <Link to="/blog" className="btn">Przejdź do bloga</Link>
    </div>
  );
  
}
export default Home