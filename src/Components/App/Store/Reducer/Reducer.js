export default function Reducer(state = {word: ""}, action){
    switch(action.type){
       case "set":
            return {word: action.word};
       case "get":
            return state;
       default: 
            return state;
    }
}