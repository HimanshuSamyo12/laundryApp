import { ADD_ITEMS,REMOVE_ITEMS } from "../ActionTypes";


export const AddItemsToCart=(data)=>({

    type:ADD_ITEMS,
    payload:data,

});

export const RemoveItemsFromCart=(index)=>({

    type:REMOVE_ITEMS,
    payload:index,


})
