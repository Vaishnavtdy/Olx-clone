export const initialState = {
    user:null,
    productDetails: []
}
const reducer = (state, action)=>{
    console.log("The action is >>>>", action)
    switch(action.type){
        case 'SET_USER' :
            return{
                ...state,
                user: action.user
            }

        case 'SET_PRODUCTS' :
            return{
                ...state,
                productDetails: action.productDetails
            }
         default:
            return state;
    }
}
export default reducer;