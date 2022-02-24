import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
export default function Item(props) {
  const {item}  = props;
  return (
    <Card key={item.id} sx={{ display:'flex' ,flexDirection:'row',justifyContent:'space-between', border:'5px',margin:'10px' }}>
      <CardMedia
        component="img"
        sx={{heigth:'35px',maxWidth:'100px'}}
        src={require(""+item.logo)}
        alt="ImageAlt"
        
      />
    <Box>
        <Box display={"flex"} flexDirection={"row"} >
            <Typography gutterBottom variant="body2" component="div">
                {item.company}
            </Typography>
            {
                item.new && (
                    <Button variant={"contained"}>New!</Button>
                )
            }
            {
                item.featured && (
                    <Button variant={"contained"}>Featured</Button>
                )
            }
        </Box>
        <Typography variant="h5" color="text"> 
            {item.position}
        </Typography>
        <Box display={"flex"} flexDirection={"row"} >
            <Typography variant="body2" color="text.secondary"> 
            {item.postedAt+ "  - "}
            </Typography>
            <Typography variant="body2" color="text.secondary"> 
            {item.type+ "  - "}
            </Typography>
            <Typography variant="body2" color="text.secondary"> 
            {item.location}
            </Typography>
        </Box>
    </Box>
      <CardContent sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography variant="h5" color="text.secondary"> 
            {item.role}
        </Typography>
        <Typography variant="h5" color="text"> 
            {item.level}
        </Typography>
        {
            item.tags.map((tag)=> <Button key={tag} variant={"contained"}>{tag}</Button>)
        }
      </CardContent>
    </Card>
  );
}
