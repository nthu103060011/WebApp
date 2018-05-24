const initXxxState = {
    // p1: false,
    // p2: '',
    // p3: []
};

export function r1 (state = initXxxState, action) {
    switch (action.type) {
        case '@XXX/YYY':
            return {
                ...state,
                // p1: action.a
                // p2: action.b
            };
            break;
        default:
            return state;
    }
}
