import { combineReducers } from 'redux'
import testReducer from '../../features/teastarea/testReducer';

const rootReducer = combineReducers({

    test:testReducer

})


export default rootReducer