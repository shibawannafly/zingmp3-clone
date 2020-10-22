import { FETCH_DATA, RECEIVED_PAGE_DATA  } from '../actions/actions'

const initialState = {
  pageData: {}
}

const dataReducer = (state=initialState, action) => {
  switch(action.type){
    case FETCH_DATA:
      return {...state}
    
    case RECEIVED_PAGE_DATA:
      return {...state, pageData: action.payload}

      default:
        return {...state}
  }
}

export default dataReducer