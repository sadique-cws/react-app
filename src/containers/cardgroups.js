import React from 'react';
import Card from "../components/card";


class CardGroups extends React.Component{
    constructor(props){
       super(props);
       this.state = {
               "data": {
                   "title": "vikas",
                   "desc": "testing"
               }
           }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Card
                            title={this.state.data.title}
                            desc={this.state.data.desc}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardGroups;