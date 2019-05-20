import React, { Component } from 'react';

import Categories from './components/measure';
import Axios from 'axios';
 
class Measure extends Component{
    constructor(props){
        super(props);
        this.state={
            dataRecieved:[],
            isLoading:true,
            storeData:'online'
        }

    }

    toggleData(){
        if(this.state.storeData == 'online'){
            Axios.get("http://localhost:3001/measures?shoppingChannel=instore").then((res)=>{
            console.log(res.data);
            this.setState({
                    isLoading:false,
                    dataRecieved:res.data,
                    storeData:'instore'
                })
            })
        }

        if(this.state.storeData == 'instore'){
            Axios.get("http://localhost:3001/measures?shoppingChannel=online").then((res)=>{
            console.log(res.data);
            this.setState({
                    isLoading:false,
                    dataRecieved:res.data,
                    storeData:'online'
                })
            })
        }
        
        // if(this.state.storeData == 'on'){

        // }

    }

    componentDidMount(){
            Axios.get("http://localhost:3001/measures?shoppingChannel=online").then((res)=>{
            console.log(res.data);
            this.setState({
                    isLoading:false,
                    dataRecieved:res.data
                })
            })
    }


    render(){
        return(
            <div>
                {
                    this.state.isLoading ? (
                        <p>Loading</p>
                    ) :
                    (
                            <div className="row">                        {
                            this.state.dataRecieved.filter((data,index)=>{
                                if(data.cells[0]["type"] != 'string'){
                                    return data
                                }
                            }).map((data,index)=>{
                                return <Categories key={index} data={data}></Categories>
                            })
                        }
                                <div class="col-md-12">
                                    <button onClick={this.toggleData.bind(this)}>Toggle</button>
                            </div>
                            </div>
                            
                            )
                }


            </div>
        )
    }
}
export default Measure;