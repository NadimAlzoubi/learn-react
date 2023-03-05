import {React, Component, Fragment, useState} from "react";
import img2 from './../../../img/coffe.png';

class Home_numbers extends Component{
  render(){
    const ReadMore = ({children}) => {
      const text = children;
      const [isReadMore, setIsReadMore] = useState(true);
      const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      };
      return (
        <p className="text">
          {isReadMore ? text.slice(0, 150) : text}
          <span onClick={toggleReadMore} style={{cursor: "pointer"}} className="bg-light">
            {isReadMore ? "...read more" : " ...show less"}
          </span>
        </p>
      );
    };
      
    const Read = () => {
      return (
        <div className="container">
          <h6>
            <ReadMore>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </ReadMore>
          </h6>
        </div>
      );
    };  
        return(
            <Fragment>
                <section className="container section">
                    <div className="row">
                        <div className="col-md-6 col-12 imgdiv">
                            <img src={img2}/>
                        </div>
                        <div className="col-md-6 col-12 textdiv">
                            <div>
                                <h2>Starbucks Coffe, start your day with it.</h2>
                                <Read />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );    
    }
}

export default Home_numbers;
