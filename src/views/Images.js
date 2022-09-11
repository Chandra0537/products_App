import React from "react";

import { Container, Row, Col,Button } from "reactstrap";
import { Redirect } from "react-router-dom";

function Images(props) {
   
    var propsData=props.location.data;
    const imagewrapper={
        verticalAlign: "top",
        display: "inline-block",
        textAlign: "center",
        width: "300px",margin: "14px"
      }
    if(props.location?.data != undefined){
      localStorage.setItem('data', JSON.stringify(props.location.data))
    }else{
      propsData =JSON.parse(localStorage.getItem('data'));
    }
    return (
        <>
          <div className="section ">
            <Container>
              <Row>
                <Col md="6">
                    <div>
                        <b><u>{propsData.title}</u></b>
                        <p className="text-right"><i className="now-ui-icons ui-2_favourite-28"> Save</i> <i className="now-ui-icons arrows-1_share-66"> Share</i> </p>
                    </div>
                  <div style={imagewrapper} className="text-center">
                    <img
                      alt="..."
                      src={propsData.image}
                      height={300}
                      width={300}
                    ></img>
                    <span style={{ display: "block",margin: "15px"}}>
                        {propsData.title}<br/> 
                        <b>{propsData.category}</b><br/>
                        $ <b>{propsData.price}</b>
                    </span>
                  </div>
                </Col>
                <Col md="6">
                    <p style={{marginBottom: "10rem"}}><i><strong>{propsData.description}</strong></i></p>                    
                    <Button
                      className="btn-round mr-1"
                      color="danger"
                      size="lg"
                    >
                      Add To Cart
                    </Button>
                    <Button
                      className="btn-round"
                      color="info"
                      href="/index"
                      outline
                      size="lg"
                    >
                      Continue Shopping..
                    </Button>
                </Col>
              </Row>
            </Container>
          </div>
        </>
      );
}

export default Images;