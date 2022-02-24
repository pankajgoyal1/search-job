import './App.css';
import Item from "./Components/Card";
import rawData from "./assets/data.json";
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Box } from '@mui/material';
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
      <div className='header'>
        Phaidra
      </div>
      <div className='searchbar'>
        <TextField
            id="standard-select-currency"
            select
            label="Select"
            value={""}
            onChange={handleChange}
            helperText="Please Select tags"
            variant="standard"
          >
            {listTags.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        {tags.map((t)=>{
          return (
            <Box variant='contained' margin='10px' >
              {t}
              <Button variant='contained' onClick={(e)=>{
                const ns = tags.filter((tg)=> tg !== t);
                setTags(ns);
              }}>X</Button>  
            </Box>
          );
        })}
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
