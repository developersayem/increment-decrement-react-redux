const initialState = 0;


const updateNum = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": state + 1;
        case "DECREMENT": state - 1;
        default: state
    }
};