import React, {useState, useEffect} from 'react'
import StarWarsLogo from '../../assets/images/starwarslogo2.png';
import styles from "./Home.module.css";
import axios from 'axios';
import Card from '../../components/Card/Card';

const defUrl = 'https://swapi.dev/api/starships/?page=1';


const Home = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [next, setNext] = useState(defUrl);
  
  const [filterText, setFilterText] = useState("");

  const fetchData = (url,isFilter) => {
    console.log(url);
    axios.get(url).then(response => {
      response.data.results.map(item => {
        const url = new URL(item.url);
        const path = url.pathname;
        const parts = path.split("/");
        const id = parts[parts.length - 2]; 
        
        item.id = id;
      })
      let newData = [];
      
      if(isFilter){
        newData = response.data.results;
      }
      else{
        newData = [...data, ...response.data.results];
      }

      setData(newData);
      setFilteredData(newData);
      setNext(response.data.next);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const handleFilter = () => {
    if(filterText === ""){
      setFilteredData(data);
      fetchData(defUrl,true);
      return;
    }
    /*
      // If we search it in local data 
      const newData = data.filter(item => item.name.toLowerCase().includes(filterText.toLowerCase()) || item.model.toLowerCase().includes(filterText.toLowerCase()));
      setFilteredData(newData); 
    */
    fetchData(`https://swapi.dev/api/starships/?search=${filterText}`,true);

  }

  useEffect(() => {
    fetchData(next,true);
  },[]);
  
  return (
    <div className={styles.container}>
      <img src={StarWarsLogo} alt="starwars"/>
      <div className={styles.filterBox}>
        <label for="filter-input">Name / Model</label>
        <input id="filter-input" className={styles.filterInput} onChange={(e) => setFilterText(e.target.value)} placeholder='Name / Model'></input>
        <button className={styles.customButton} onClick={handleFilter}>Filter</button>
      </div>
      <div className={styles.cards}>
        {filteredData.map(item => {
          return(
            <Card key={item.name} starship={item}/>
          )
        })}
      </div>
      { next && <button className={styles.customButton} onClick={() => fetchData(next,false)} >Load More</button>}
    </div>
  )
}

export default Home;