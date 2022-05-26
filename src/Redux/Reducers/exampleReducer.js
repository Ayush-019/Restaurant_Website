import {EXAMPLE_CONSTANT} from  "../Constants/exampleConstants";

export const exampleReducer = ( 
    state = {
    exampleState : 1,
},
action
) =>{

    switch (action.type) {
      case EXAMPLE_CONSTANT:
        return{
            ...state,
            exampleState : state.exampleState+1
        }

      default:
        return state;
    }
}
