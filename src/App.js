import Loading from './Loading';
import { useEffect, useState } from 'react';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading,setLoading] = useState(true);
  const [travel,setTravel] = useState([]);

  const ambilTravel = async()=>{
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTravel(data);
      setLoading(false);
       
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  const hapusArtikel = (id) =>{
    const newData = travel.filter((data)=> data.id !== id);
    setTravel(newData);
  }

  useEffect(()=>{
    ambilTravel();
  },[])

  if(loading===true){
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (travel.length === 0){
    return (
      <main>
        <div className='title'>
          <h2>Artikel habis...</h2>
          <button className='btn' onClick={ambilTravel}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours apayak={travel} hapus={hapusArtikel} />
    </main>
  );
}

export default App;
