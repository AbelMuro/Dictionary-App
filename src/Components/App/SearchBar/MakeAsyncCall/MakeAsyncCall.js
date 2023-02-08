
export default function MakeAsyncCall(word){

    return dispatch => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((response) => {
                return response.json();
            })
            .then((results) => {
                if(results?.message)
                    dispatch({type: "set", word: results})
                else
                    dispatch({type: "set", word: results[0]});
            })
            .catch((err) => {
                console.error(err);
            })  
    }
}