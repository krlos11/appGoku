import { createSlice } from '@reduxjs/toolkit'


const loadState=()=>{
  try{
    const serializedState = localStorage.getItem("gridData");
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  }catch(err){
    return new Error("Error al leer el localstorage");
  }
}

const saveState = (state) => {
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem("gridData", serializedState);
  }catch(err){

  }
}


const initialState=loadState() || {
  pagination: 0,
  searching:'',
  isLoading:true,
  data:null,
  dataCharacter:null,
  countPages:10,
  race: ["Human","Saiyan","Namekian Majin" ,"Frieza Race Android", "Jiren Race", "God Angel", "Evil" , "Nucleico" ,"Nucleico benigno" , "Unknown"],
  errors:{
    error:false,
    messageError:'',
    statusCode: null,
  }
}


export const appSlice = createSlice({
  name: 'appStore',
  initialState,
  reducers: {
    setIsLoading: ( state, action ) => {
      state.isLoading = action.payload;
    },
    setErrors: ( state, action ) => {
      state.errors = action.payload.errors;
    },
    setDataLoaded: ( state, action ) => {
      state.data = action.payload.data;
      saveState(state);
    },
    setDataCharacterLoaded: ( state, action )=>{
      state.dataCharacter = action.payload;
    },
    resetErrors: ( state, action ) => {
      state.errors.error = false;
      state.errors.messageError='';
      state.errors.statusCode= null;
    },
    returnDataCharacter:( state, action )=>{
      const { id } = action.payload;
      state.dataCharacter = state.data.find( item => item.id === id);
      console.log({datacharacter: state.dataCharacter})
    },
    setDataLoaded_moreData:( state, action ) => {
        const combinedArray = state.data.concat(action.payload.data);
        state.data = null;
        state.data =  combinedArray
        .map(item => item.id) // Extraer ids
        .map((id, index, ids) => ids.indexOf(id) === index && combinedArray.find(item => item.id === id)) // Filtrar duplicados
        .filter(item => item); 

        saveState(state);
    },
    getCountPages:( state )=>{
      state.countPages = state.countPages+5;
    }
  },
})

export const { 
  setIsLoading,
  setErrors,
  resetErrors,
  setDataLoaded,
  setDataCharacterLoaded,
  returnDataCharacter,
  setDataLoaded_moreData,
  getCountPages
 } = appSlice.actions