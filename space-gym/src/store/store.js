export const getState = ({ getActions, getStore, setStore}) => {

    return {
        store: {
           products: [],
           users: [],
        },
        actions: {
            getCharacters: () => {
              fetch("https://8080-pablotronco-finalproyec-r5i5o0okka4.ws-us77.gitpod.io/products")
              .then((response) => response.json())
              .then(data => setStore({
                products: data,
              }))
              .catch(error => console.log(error))
            },
            getUsers: () => {
                
            }
        }

    }
} 