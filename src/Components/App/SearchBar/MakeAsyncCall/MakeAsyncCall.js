
export default function MakeAsyncCall(word){

    return dispatch => {
        dispatch({type: "isLoading", isLoading: true})
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                if(results?.message)
                    dispatch({type: "set", word: results})                              
                else
                    dispatch({type: "set", word: results[0]});
                dispatch({type: "isLoading", isLoading: false})  
            })
            .catch((err) => {
                dispatch({type: "isLoading", isLoading: false})
                console.error(err);
            })  
    }
}