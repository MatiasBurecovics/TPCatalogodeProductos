import axios from "axios";

export const GetAllProducts= async () =>{
    return axios.get(`https://dummyjson.com/products/`)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}

export const GetProductById= async (id) =>{
    return axios.get(`https://dummyjson.com/products/${id}`)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}
export const GetAllCategorias= async () =>{
    return axios.get(`https://dummyjson.com/products/categories`)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}

export const GetProductsByCategories= async (category) =>{
    return axios.get(`https://dummyjson.com/products/category/${category}`)
    .then(function(res){
        return res
    })
    .catch(function(err){
        throw err
    })
}

git