import Swal from 'sweetalert2'

export const notify =(msg,color)=>{
 Swal.fire( {
    title:"Outdoor Turkiye",
    text:msg,
    icon:color,
    timer:2000,
 }) 
}