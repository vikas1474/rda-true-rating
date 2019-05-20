import React, {Component} from 'react';


class MeasureList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                { this.props.match.params.selectedMeasure == 'Experience' && 
                    <p>Experience: #FFDC28</p>
                }
                { this.props.match.params.selectedMeasure == 'Recommend' && 
                    <p>Recommend: #20F3B5</p>
                }
                { this.props.match.params.selectedMeasure == 'Value' && 
                    <p>Value: #FD7E09</p>
                }
                { this.props.match.params.selectedMeasure == 'Product' && 
                    <p>Product: #FB004A</p>
                }
                { this.props.match.params.selectedMeasure == 'Ease of Use' && 
                    <p>Service (Ease of use): #AD63FF</p>
                }   



            </div>
        )
    }
}

export default MeasureList;