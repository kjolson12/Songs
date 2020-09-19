import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'WAP', duration: '3:08' },
        { title: 'One More Time', duration: '5:20' },
        { title: 'VIBEZ', duration: '2:25' },
        { title: 'Lips of an Angel', duration: '4:22' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    };

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});