import component from './component';
import { connect } from 'react-redux';

import { withActions } from '../helpers';
import { loadCategories } from '../../actions/categories';


const actions = [
  loadCategories(),
];

const mapStateToProps = state => {
  return {
    categories: state.categories,
  }
};


const mapDispatchToProps = dispatch => ({
});


export default
  connect(mapStateToProps, mapDispatchToProps)(
    withActions(actions)(component)
  );
