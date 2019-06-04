import React from 'react';
import {connect} from 'react-redux';
const EditExpense = (props) => (
    <div>
        Edit {props.match.params.id}
    </div>
)

var mapStatetoProps = (state, props) => {
    
}
export default connect()(EditExpense);