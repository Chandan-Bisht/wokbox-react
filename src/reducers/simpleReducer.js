import initialState from './initialState'
  const simple =  (state = initialState, action) => {
  Object.freeze(state);
   switch (action.type) {
    case 'GET_USER_INFO_DATA_ACTION':
     return Object.assign({}, state, { 
         user_info:action.payload
        });
    case 'SET_QUESTIONNAIRE_DATA_ACTION':
      return Object.assign({}, state, { 
          questionnaire_data:action.payload
          });
    case 'SET_TERMSELECTION_DATA_ACTION':
      return Object.assign({}, state, { 
          requested_amount:action.payload1,
          installments:action.payload2 ,
          selected_installment:action.payload3
          });
    case 'SET_PROPERTYDETAILS_DATA_ACTION':
      return Object.assign({}, state, { 
          property_details:action.payload,
          });
    case 'SET_PROJECT_DATA_ACTION':
      return Object.assign({}, state, { 
          project_data:action.payload,
          });
    case 'GET_ALL_PROPERTY_NOTES_ACTION':
      return Object.assign({}, state, { 
          notes_data:action.payload,
          });
    default:
     return state
   }
  }
  
  
  export default simple