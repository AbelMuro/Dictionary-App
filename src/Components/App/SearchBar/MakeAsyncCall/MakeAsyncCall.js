
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
                dispatch({type: "set", word: {message: "Something went wrong with the server.", 
                    resolution: "Please wait for dictionaryAPI.dev to respond at a later time, or you can just head over to the web."}});
                dispatch({type: "isLoading", isLoading: false})
            })  
    }
}