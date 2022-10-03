export default function countReducer(state , action){
    // if(action === 'increase'){
        // return {
        //     count: state.count+1
        // }
    // }
    // else if(action === 'decrease'){
    //     return {
    //         count: state.count-1
    //     }
    // }
    switch(action) {
        case 'increase':
            return {
                count: state.count+1
            }
        case 'decrease':
            return {
                count: state.count-1
            }
        default:
            return state;
    }
    
}
