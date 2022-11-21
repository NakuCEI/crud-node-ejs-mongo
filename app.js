const express=require('express');
require('dotenv').config();
const {DBConecction} =require('./database/config')

/* configurar express */
const app=express();
const port=process.env.PORT || 3000;

/* conectar a bbdd */
DBConecction()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

/* configurar static */
app.use(express.static(__dirname+'/public'));

/* configurar template engines */
app.set('views',__dirname+'/views');
app.set('view engine','ejs');

/* rutas */
app.use('/',require('./routes/indexRouter'))
app.use('/servicios',require('./routes/serviciosRouter'))



app.use((req,res)=>{
    res.status(404).render('back/404',{
        error:'404',
        msg:'Página no encontrada'
    })
})

/* poner express a la escucha */
app.listen(port,()=>{
    console.log(`Express a la escucha del puerto ${port}`)
})