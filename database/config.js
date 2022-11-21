const mongoose=require('mongoose');

const DBConecction=async()=>{
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('conectado a la base de datos')
    } catch (error) {
        console.log(error)
        return({
            ok:false,
            msg:'Error al conectar con la base de datos'
        })
    }
}

module.exports={
    DBConecction
}