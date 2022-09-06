export const SET_FONT_SIZE = 'SET_FONT_SIZE';

export const setFont = font => dispatch => {
    dispatch({
        type: SET_FONT_SIZE,
        payload: font,
    });
};