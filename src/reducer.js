export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove token after finishing developing.
 // token: 'BQAPuIC9O5sNTgMxydmH0ITcpVYrd6zqvrcWWZaGjcQELXUIWWvNZ60P4D8RflCqOm_bZcBdDP3VzpnrH1ORmj9h1rshOJZ2pxZ5DCgCySaLQr-_4KOdo0VaJu0MtQFwO5i1pZx769MPPjr-Kayxnbx-BwC5eziD',
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

        case "SET_DISCOVER_WEEKLY":
        return {
            ...state,
        discover_weekly: action.discover_weekly,
        }
        default: 
        return state;
}
}

export default reducer;