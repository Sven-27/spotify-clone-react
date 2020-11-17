export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove token after finishing developing.
    // token: 'BQAZ1ZqyKkhpB_UYEBuUMUIUnVwGwiRPrrSt-l4ld_CkA3leoOekxqgT7qMBEbPSa4_sBPN8DX62Rm8Snlgwf9Zg3Ummxp0bFQ5E0boFFZMtL_BnxkONorgP2TMokOWQ4KG8LUP8cmJd3SpLYPznE1OHbBNt-89c',
}

const reducer = (state, action) => {
console.log(action);

switch(action.type){
    case 'SET_USER':
        return {
            ...state,
            user: action.user,
        };

        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        default: 
        return state;
}
}

export default reducer;