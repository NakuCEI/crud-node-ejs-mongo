const express=require('express');
const router=express.Router();
const {leerServicios,vistaCrearServicio,nuevoServicio,vistaEditarServicio,editarServicio,eliminarServicio,leerUnServicio} =require('../controllers/serviciosController')

//leer todos los servicios
router.get('/',leerServicios)



//vista formulario crear nuevo

router.get('/nuevo',vistaCrearServicio)

//crear nuevo
router.post('/nuevo',nuevoServicio)



//vista forlmiario editar
router.get('/editar/:id',vistaEditarServicio)

//editar servicio
router.put('/editar',editarServicio)
//eliminar servicio
router.get('/eliminar/:id',eliminarServicio)

//leer un servicio
router.get('/:id',leerUnServicio)






module.exports=router;
