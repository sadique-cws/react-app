import React from 'react';

export default class Card extends React.Component{
    render (){
        return (
            <div className="card">
               <div className="card-body">
                    <h4>{ this.props.title }</h4>
                    <p className="small">{ this.props.desc }</p>
               </div>
            </div>
        )
    }
}