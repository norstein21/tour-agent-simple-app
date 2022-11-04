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

  return (
    <main>
      <Tours apayak={travel} />
    </main>
  );
}

export default App;
