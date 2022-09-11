import React from "react";
// reactstrap components
import {Link} from 'react-router-dom';

// core components

const items = [
  {
    src: require("assets/img/bg1.jpg"),
    altText: "Nature, United States",
    caption: "Nature, United States"
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: "Somewhere Beyond, United States",
    caption: "Somewhere Beyond, United States"
  },
  {
    src: require("assets/img/bg4.jpg"),
    altText: "Yellowstone National Park, United States",
    caption: "Yellowstone National Park, United States"
  }
];

function ProductsSection(props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const imagewrapper={
    verticalAlign: "top",
    display: "inline-block",
    textAlign: "center",
    width: "350px",margin: "14px"
  }
  
  console.log("propssss",props);
  return (
    <>
      <div className="section" style={{flexDirection: "row", flexWrap: "wrap"}}>
        {data.map((item) => {
          if(props.category == item.category){
            return (
              <div style={imagewrapper} key={item.id} >
               <Link to={{
                pathname: '/images',
                data: item
              }} >
                  <img className="rounded img-raised"  key={item.id} src={item.image} alt={item.title} height={350} width={350}/>
                </Link>
                
                <span style={{ display: "block",margin: "15px"}}>
                  {item.title}<br/> 
                  <b>{item.category}</b><br/>
                  $ <b>{item.price}</b>
                </span>
              </div>
              )
          }else if(props.category == undefined ){
            return (
              <div style={imagewrapper} key={item.id} >
               <Link to={{
                pathname: '/images',
                data: item
              }} >
                  <img className="rounded img-raised"  key={item.id} src={item.image} alt={item.title} height={350} width={350}/>
                </Link>
                
                <span style={{ display: "block",margin: "15px"}}>
                  {item.title}<br/> 
                  <b>{item.category}</b><br/>
                  $ <b>{item.price}</b>
                </span>
              </div>
              )
          }
          })}
      </div>
    </>
  );
}

export default ProductsSection;
