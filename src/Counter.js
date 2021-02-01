import { connect } from 'react-redux';
import { increaseCount, decreaseCount } from './actions/counterAction';

function Counter(props) {
  return (
  <div>
    {props.count}
    <button onClick={props.increase}>Increase</button>
    <button onClick={props.decrease}>Decrease</button>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = {
  increase: increaseCount,
  decrease: decreaseCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);