import { ADD_ITEMS,REMOVE_ITEMS } from "../ActionTypes";

export const Reducers=(state='',action)=>{

switch(action.type){
    case ADD_ITEMS:
        return[...state,action.payload];

        case REMOVE_ITEMS:
        const deleteArray=action.payload.filter((item,index)=>{
            return(index=action.payload)
        });
        
        return deleteArray;
        default:
            return state;
        
}

};