export const getState = ({ getActions, getStore, setStore}) => {

    return {
        store: {
           products: [],
           users: [],
           admin: [],
           dataUser: []
        },
        actions: {
            getCharacters: () => {
              fetch("https://8080-pablotronco-finalproyec-pektzvt3obn.ws-us78.gitpod.io/products")   
              .then((response) => response.json())
              .then(data => setStore({
                products: data,
              }))
              .catch(error => console.log(error))
            },
            getAdmin: () => { 
              fetch("https://8080-pablotronco-finalproyec-pektzvt3obn.ws-us78.gitpod.io/admin")
              .then((response) => response.json())
              .then(data => setStore({
                admin: data,
              }))
              .catch(error => console.log(error))
                
            },
            
            getUsers: () => { 
              fetch("https://8080-pablotronco-finalproyec-pektzvt3obn.ws-us78.gitpod.io/users")
              .then((response) => response.json())
              .then(data => setStore({
                users: data,
              }))
              .catch(error => console.log(error))
                
            },
            postLogin: (dataUsers) => { 
              console.log(dataUsers);
              fetch("https://8080-4geeksacademy-htmlhello-pektzvt3obn.ws-us78.gitpod.io/login",
               {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                  
                },
                body: JSON.stringify(dataUsers) } )
              .then((response) => response.json())
              .then(data => { 
                setStore({ dataUsers: data, })
                localStorage.setItem('infoLogin', JSON.stringify(data));
              })
              .catch(error => console.log(error))

                
            },
            postRegistration: (dataUsers) => { 

              fetch("https://8080-4geeksacademy-htmlhello-pektzvt3obn.ws-us78.gitpod.io/registration", {
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