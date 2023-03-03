const initState = {
    filters:{
        search:""
    },
    list:[
        [
            {
              "id": 1,
              "name":"Lê Đức",
              "age":18,
              "status":"đang học"
            }
          ],
          [
            {
              "id": 2,
              "name":"Lê Đức",
              "age":18,
              "status":"đang học"
            }
          ]
        ]
}

const rootReducer = (state = initState , action) =>{
  console.log(state , action);
    switch (action.type) {
      
        case "add":
          fetch("http://localhost:3003/posts", { 
          
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload),
        });
        break

        case "delete":
          console.log(action);
          fetch(`http://localhost:3003/posts/${action.payload.id}`, { 
          
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload),
        });
        break

        case "update":
          console.log(action.payload.new);
          fetch(`http://localhost:3003/posts/${action.payload.id}`, { 
          
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(action.payload.new),
        });
        break

           
        default:
            return state
           
    }
}

export default rootReducer