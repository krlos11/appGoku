import { setDataCharacterLoaded, setDataLoaded, setDataLoaded_moreData, setErrors, setIsLoading } from "./appSlice";



let BASE_URL = "https://dragonball-api.com/api/characters";


const getData = async(query)=>{
    console.log({url: BASE_URL+query});
    try {
        const response = await fetch(BASE_URL+query);

        if(response.ok) {
            return response;
        }else{//error status 404
            return response;
        }
    } catch (error) {
        console.log("Error de conexión",{error})
        return  new Error("error en la api de goku", error);
    }
}


const validateDataStateStorage=()=> {
    if(localStorage.getItem("gridData") !== null ){
        return true;
    }
    return false;
}



export const getFetchData=(query="")=>{
    return async( dispatch ) => {

        dispatch(setIsLoading(true));
        try{
            const response = await getData(query);
            const responseJson = await response.json();

            if(response.ok){
                dispatch(setIsLoading(false));
                dispatch( setDataLoaded({data: responseJson.items ? responseJson.items : responseJson}) )
            }else{
                const errors={
                    statusCode:responseJson.statusCode,
                    messageError: responseJson.message,
                    error:true,
                }
                // dispatch(setIsLoading(false));
                dispatch( setErrors({errors}) );
            }
        }catch(error){
            console.log("aki no llego, no logro capturar el error . ")
            dispatch(setIsLoading(false));
        }
    }
}






export const getFetchData_pageCard=(query="")=>{
    return async( dispatch ) => {


        dispatch(setIsLoading(true));
        try{
            const response = await getData(query);
            const responseJson = await response.json();
            
            if( response.ok ){
                dispatch( setDataCharacterLoaded(responseJson))
                dispatch(setIsLoading(false));
            }else{
                const errors={
                    statusCode:responseJson.statusCode,
                    messageError: responseJson.message,
                    error:true,
                }
                // dispatch(setIsLoading(false));
                dispatch( setErrors({errors}) );
            }
        }catch(error){
            console.log("aki no llego, no logro capturar el error . ")
            // dispatch(setIsLoading(false));
        }
    }
}




//https://dragonball-api.com/api/characters?limit=20
export const moreData_pages=(query)=>{
    return async( dispatch, getState )=> {



        dispatch(setIsLoading(true));
        try{
            const response = await getData(query);
            const responseJson = await response.json();
            
            if(response.ok){
                dispatch(setIsLoading(false));
                dispatch( setDataLoaded_moreData({data: responseJson.items ? responseJson.items : responseJson}) )
            }else{
                const errors={
                    statusCode:responseJson.statusCode,
                    messageError: responseJson.message,
                    error:true,
                }
                // dispatch(setIsLoading(false));
                dispatch( setErrors({errors}) );
            }
        }catch(error){
            console.log("aki no llego, no logro capturar el error . ", {error})
            dispatch(setIsLoading(false));
        }
    }
}





