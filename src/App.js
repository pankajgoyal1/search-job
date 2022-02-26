import './App.css';
import Item from "./Components/Card";
import rawData from "./assets/data.json";
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import styles from  "./selected.module.css";
const allTags = rawData.reduce((arr,item)=> { item.tags.forEach((t)=>arr.add(t)); return arr;},new Set());
function App() {
  const [data,setData] = useState(rawData);
  const [listTags,setListTags] = useState(Array.from(allTags));
  const [tags, setTags] = useState([]);
  useEffect(()=>{
    setListTags((prev)=>{
      const ns = Array.from(allTags).filter((lt)=> !(tags.includes(lt)) );
      return ns;
    });
  },[tags]);
  const handleChange = (event) => {
    setTags([event.target.value,...tags]);
  };
  let filteredList = data.filter((item)=> item.tags.some((t)=>tags.includes(t)));
  if(tags.length === 0) filteredList=data;


  return (
    <div className="App">
      <div className='headerarea'>
        <div className='searchbar'>
          <TextField
              id="standard-select-currency"
              className="searchfield"
              select
              label={<span>Search</span>}
              value={""}
              onChange={handleChange}
              variant="standard"
              fullWidth
            >
              {listTags.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
          </TextField>
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"row",justifyContent:'space-between'}}>
        <div style={{display:"flex", flexDirection:"row",padding:'1em 6em'}}>
          {tags.map((t)=>{
            return (
              <span className={styles.container}>
                <span className={styles.text}>{t}</span>
                <button onClick={() => setTags((prev)=> prev.filter((p)=>p!==t))} className={styles.x}>
                  &#x2715;
                </button>
              </span>
            );
          })}
        </div>
        {
          tags?.length > 0 && (
            <div style={{padding:'1em 6em',border:'none'}}>
              <button className={styles.clear} onClick={()=>{
                setTags([]);
              }}>
                Clear all
              </button>
            </div>
          )
        }
      </div>
      <div className='task'>
        {
            filteredList.map((item)=>{
              return(
                <Item key={item.id} item={item} tags={tags} setTags={setTags} />
              );
            })
        }
      </div>
    </div>
  );
}

export default App;
