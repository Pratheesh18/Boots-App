const initialState = {
    // items : [{ id: 1, name: "Boot 1", size: "10", color: "Black" },
    // { id: 2, name: "Boot 2", size: "9", color: "Red" },],
    items :[]
};

const cartReducer = (state = initialState , action) => {
    switch (action.type){
        case  'ADD_TO_CART':
             const existingItem = state.items.find((item) => item.id === action.payload.id);

             if(existingItem){
                const updatedItems = state.items.map((item) => item.id === action.payload.id ? {...item , quantity:item.quantity + 1} : item);
                return {...state , items : updatedItems};

             }else{
                return{
                    ...state , items : [...state.items , {...action.payload , quantity : 1}],
                }
             };
        
        case 'REMOVE_FROM_CART':
            return {
                ...state , items : state.items.filter((item) => item.id !== action.payload),
            };
        
        case 'INCREASE_QUANTITY':
            return{
                ...state , items : state.items.map((item) => item.id === action.payload ? {...item , quantity : item.quantity + 1} : item),

            }

        case 'DECREASE_QUANTITY':
            return{
                ...state , items : state.items.map((item) => item.id === action.payload ? {...item , quantity : item.quantity - 1} : item),
            }


        default : return state;

    }
};


export default cartReducer;