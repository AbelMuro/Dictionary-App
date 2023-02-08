export function WordReducer(state = {word: ""}, action){
    switch(action.type){
       case "set":
            return {word: action.word};
       case "get":
            return state;
       default: 
            return state;
    }
}

export function LoadingReducer(state = {isLoading: false}, action){
     switch(action.type){
          case "isLoading":
               return{isLoading: action.isLoading}
          default: 
               return state;  
     }
}