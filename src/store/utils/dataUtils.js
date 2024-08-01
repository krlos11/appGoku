export const initialDataTemplate = {
    id: null,
    name: '',
    ki: '',
    maxKi: '',
    race: '',
    gender: '',
    description: '',
    image: '',
    affiliation: '',
    deletedAt: null,
  };
  
  export const applyDataTemplate = (data) => {
    return {
      ...initialDataTemplate,
      ...data,
    };
  };