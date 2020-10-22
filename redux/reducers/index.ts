import { combineReducers } from 'redux'
import dataReducer from './dataReducer'
import musicReducer from './musicReducer'

const rootReducer = combineReducers({
  dataReducer,
  musicReducer
})

export default rootReducer