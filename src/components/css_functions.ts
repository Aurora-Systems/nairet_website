export const bg_img=(image_source:string)=>{
    return({
        backgroundImage:`url(${image_source})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-reapeat',
        backgroundSize:'cover',
        height:"100vh",
        width:"100%",
        padding:"5px"
    })
}