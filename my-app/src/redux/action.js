export const addHoc = (data) => {
    return{
          type:"add",
          payload: data
    }

}
export const deleteid = (data) => {
    return{
          type:"delete",
          payload: data
    }

}
export const updateid = (data) => {
    return{
          type:"update",
          payload: data
    }

}