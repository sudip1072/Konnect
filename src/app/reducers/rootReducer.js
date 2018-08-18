import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form';
import testReducer from '../../features/teastarea/testReducer';
import eventReducer from '../../features/event/eventReducer'

const rootReducer = combineReducers({

    test:testReducer,
    events:eventReducer,
    form: FormReducer

})


export default rootReducer