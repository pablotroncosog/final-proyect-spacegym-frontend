export const getState = ({ getActions, getStore, setStore}) => {

    return {
        store: {
           products: [],
           users: [],
           dataUser: []
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
              fetch("https://8080-pablotronco-finalproyec-r5i5o0okka4.ws-us77.gitpod.io/users")
              .then((response) => response.json())
              .then(data => setStore({
                users: data,
              }))
              .catch(error => console.log(error))
                
            },
            postLogin: (dataUsers) => { 

              fetch("https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us77.gitpod.io/login", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                  
                },
                body: JSON.stringify(dataUsers) } )
              .then((response) => response.json())
              .then(data => setStore({
                dataUsers: data,
              }))
              .catch(error => console.log(error))

                
            },
            postRegistration: (dataUsers) => { 

              fetch("https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us77.gitpod.io/registration", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                  
                },
                body: JSON.stringify(dataUsers) } )
              .then((response) => response.json())
              .then(data => setStore({
                dataUsers: data,
              }))
              .catch(error => console.log(error))

                
            }


        }
        

    }
} 