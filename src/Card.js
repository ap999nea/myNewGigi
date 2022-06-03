import React from "react";
class Card extends React.Component{
    render(){
        return(
            <div className="card">
             <div>{this.props.bio}</div>
             <div>{this.props.children}</div> 
            </div>
        )
    }
}
export default Card