import { connect } from 'dva';
import React from 'react';

const Index = props => (
    <div>
      <h2>{ props.count }</h2>
      <button key="add" onClick={() => { props.dispatch({ type: 'count/add' }); }}>+</button>
      <button key="minus" onClick={() => { props.dispatch({ type: 'count/minus' }); }}>-</button>
    </div>
);
const mapStateToProps = ({ count }) => ({ count });
export default connect(mapStateToProps)(Index);
