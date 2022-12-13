export const getState = ({ getActions, getStore, setStore}) => {
    return {
        store: {
           products: [],
           users: [],
           admin: [],
           dataUser: [],
           productbycategory: []
        },
        actions: {          
            getProducts: () => {
              fetch("https://8080-pablotronco-finalproyec-0f2dqlb80h6.ws-us78.gitpod.io/products")
              .then((response) => response.json())
              .then(data => setStore({
                products: data,
              }))
              .catch(error => console.log(error))
            },

            getproductbycategory: () => { 
              fetch("https://8080-pablotronco-finalproyec-0f2dqlb80h6.ws-us78.gitpod.io/productbycategory")
              .then((response) => response.json())
              .then(data => setStore({
                productbycategory: data,
              }))
              .catch(error => console.log(error)) 
            },
            getAdmin: () => { 
              fetch("https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us78.gitpod.io/admin")
              .then((response) => response.json())
              .then(data => setStore({
                admin: data,
              }))
              .catch(error => console.log(error))  
            },
            getUsers: () => { 
              fetch("https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us78.gitpod.io/users")
              .then((response) => response.json())
              .then(data => setStore({
                users: data.data,
              }))
              .catch(error => console.log(error))
            },
            postLogin: (dataUsers, navigate) => { 
              console.log(dataUsers);
              fetch("https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us78.gitpod.io/login",
               {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUsers) } )
              .then((response) => response.json())
              .then(data => { 
                setStore({ dataUsers: data, })
                navigate("/admin")
                localStorage.setItem('infoLogin', JSON.stringify(data));
              })
              .catch(error => console.log(error))  
              },


              logout: (navigate) => {
                localStorage.removeItem("infoLogin");
                navigate("/");
              },



            postRegistration: (dataUsers, navigate) => { 
              fetch("https://8080-4geeksacademy-htmlhello-vsscjfnzcdo.ws-us78.gitpod.io/user", {

                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataUsers) } )
              .then((response) => response.json())
              .then(data => {
                setStore({
                  dataUsers: data,
                })
                navigate("/login")
              } )
              .catch(error => console.log(error))
            },
            postProduct: (dataProduct, navigate) => { 
              console.log(dataProduct);
              fetch("https://8080-pablotronco-finalproyec-r5i5o0okka4.ws-us78.gitpod.io/product",
               {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataProduct) } )
              .then((response) => response.json())
              .then(data => { 
                setStore({ dataProduct: data, })
                navigate("/")
              })
              .catch(error => console.log(error))  
            }
        }
    }
} 