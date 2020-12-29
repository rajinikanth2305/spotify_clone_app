export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //discover_weekly: {},
  //playlist_item: {},
  //token:
  //"BQBzmP3CZXR1nXFX697JFG7KdluEweiGURCWRCkOi5cig9f4fB…qZsUwxdZXgCRmdXLUhniVixR6PzwGe2nfkU1ARa84vugrt80d",
};
const reducer = (state = initialState, action) => {
  console.log(action);
  //ACtion===>type,[payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.name,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
