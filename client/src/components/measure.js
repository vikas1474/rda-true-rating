import React, {Component} from 'react';
import './../styles/custom.css';

import {Link} from 'react-router-dom';

class Categories extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        
        
    
        return(
                <div className="col-md-3">
                        <Link to={{ pathname: `/${this.props.data.caption}`, state: { color: 'bar'} }}>
                        {/* <Link to={`/${this.props.data.caption}`}  activeClassName="active">                 */}
                        <h2>{this.props.data.caption}</h2>
                        <div className="box">
                            { this.props.data.cells[0].formattedValue > 1 &&  this.props.data.cells[0].formattedValue < 5 &&

                                <span className='red' style={{width:(this.props.data.cells[0].formattedValue*100)/9 + '%',height: "20px"}}></span>
                            }

                            { this.props.data.cells[0].formattedValue > 6 &&  this.props.data.cells[0].formattedValue < 7 &&
                            <span className='amber' style={{width:(this.props.data.cells[0].formattedValue*100)/9 + '%',height: "20px"}}></span>
                            }

                            { this.props.data.cells[0].formattedValue > 8 &&  this.props.data.cells[0].formattedValue < 9 &&
                            <span className='green' style={{width:(this.props.data.cells[0].formattedValue*100)/9 + '%',height: "20px"}}></span>
                            }

                            { this.props.data.cells[0].formattedValue == null &&
                                                    <div>
                                                        <span style={{width:(this.props.data.cells[0].formattedValue*100)/9 + '%',height: "20px"}}></span>
                                                        <p>No data for {this.props.data.caption} yet</p>
                                                    </div>

                                                    }
                        </div>
                        <p>{ this.props.data.cells[0].formattedValue>0 ? this.props.data.cells[0].formattedValue + ' out of 9' : ' '}</p>
                    </Link>
                </div>
        )
    }
}
export default Categories