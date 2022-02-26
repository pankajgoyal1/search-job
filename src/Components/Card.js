import * as React from 'react';
import styles from "./card.module.css";
export default function Item(props) {
  const {item,setTags}  = props;
  return (
    <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.logo}>
      <img
        className={styles.logo}
        alt={item.company}
        src={require(""+item.logo)}
        />
      </div>
      <div className={styles.desc}>
        <div className={styles.details}>
          <span className={styles.cname}>{item.company}</span>
          {
              item.new && (
                    <span
                        className={styles.new}
                        style={{
                            backgroundColor:"#5CA5A5"
                        }}
                        >
                        {"New!"}
                    </span>
              )
            }
            {
                item.featured && (
                <span
                className={styles.new}
                style={{
                    backgroundColor:"#2B3939"
                }}
                >
                {"Featured"}
                </span>
                )
            }
        </div>
        <div className={styles.heading}>{item.position}</div>
        <div className={styles.subtitle}>
          <span className={styles.subitem}>
            {item.postedAt}
          </span>
          <span className={styles.subitem}>&#8226;</span>
          <span className={styles.subitem}>{item?.type}</span>
          <span className={styles.subitem}>&#8226;</span>
          <span className={styles.subitem}>{item?.location}</span>
        </div>
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.skills}>
        <button
                key={"carditem_level"}
                className={styles.selectbtn}
            >
                <span className={styles.tagcontainer}>
                    <span className={styles.text}>{item.level}</span>
                </span>
        </button>
        <button
            key={"carditem_role"}
            className={styles.selectbtn}
          >
            <span className={styles.tagcontainer}>
                <span className={styles.text}>{item.role}</span>
            </span>
          </button>
        {item.tags.map((keyword, idx) => (
          <button
            key={"carditem_" + idx}
            className={styles.selectbtn}
            onClick={() =>
              setTags((prev) =>
                prev.includes(keyword) ? prev : [...prev, keyword]
              )
            }
          >
            <span className={styles.tagcontainer}>
                <span className={styles.text}>{keyword}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  </div>
  );
}
{/* <Card key={item.id} className="card" sx={{ display:'flex' ,flexDirection: isMobile ? "column":"row",justifyContent:'space-between', border:'5px',margin:'30px', background:'#ffffff' }}>
<Box padding={1}>
    <img sx={{heigth:'35px',maxWidth:'100px',margin:'10px'}}
        src={require(""+item.logo)}
        alt="ImageAlt" />
</Box>
<Box >
    <Box display={"flex"} flexDirection={"row"} >
        <Typography variant="h6" component="div">
            {item.company}
        </Typography>
        {
            item.new && (
                <Box padding={1}>
                    <Button  variant={"contained"}>New!</Button>
                </Box> 
            )
        }
        {
            item.featured && (
                <Box padding={1}>
                    <Button  variant={"contained"}>Featured</Button>
                </Box> 
            )
        }
    </Box>
    <Box>
        <Typography variant="h5" color="text"> 
            {item.position}
        </Typography>
    </Box>
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
    <CardContent sx={{display:'flex',flexDirection: isMobile ? "column":"row",justifyContent:'space-between'}}>
    <Box padding={1}>
        <Button  variant={"contained"}>{item.level}</Button>
    </Box>
    <Box padding={1}>
        <Button  variant={"contained"}>{item.role}</Button>
    </Box>
    {
        item.tags.map((tag)=><Box padding={1}>
            <Button key={tag} variant={"contained"}>{tag}</Button>
        </Box> 
        )
    }
    </CardContent>
</Card> */}
