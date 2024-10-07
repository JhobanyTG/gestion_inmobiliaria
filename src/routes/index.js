const express = require('express');

const personaRouter = require('./persona_router')
const privilegioRouter = require('./privilegio_router')
const rolRouter = require('./rol_router')
const rolPrivilegioRouter = require('./rol_privilegio_router')
const sesionRouter = require('./sesion_router')
const usuarioRouter = require('./usuario_router')
const usuarioRolRouter = require('./usuario_rol_router')
const clienteRouter = require('./cliente_router')
const citaRouter = require('./cita_router')
const accionDiariaRouter = require('./accion_diaria_router')
const recursoRouter = require('./recurso_router')
const proyectoRouter = require('./proyecto_router')
const referenciaRouter = require('./referencia_router')
const documentacionRouter = require('./documentacion_router')
const proyectoDocumentacionRouter = require('./proyecto_documentacion_router')
const loteRouter = require('./lote_router')
const favoritoRouter = require('./favorito_router')
const ventaRouter = require('./venta_router')
const anuncioRouter = require('./anuncio_router')
const gastoRouter = require('./gasto_router')

function routerApi(app){
    const router = express.Router();
    app.use(express.json());
    app.use('/api', router);
    router.use('/persona', personaRouter);
    router.use('/privilegio', privilegioRouter);
    router.use('/rol', rolRouter);
    router.use('/rol_privilegio', rolPrivilegioRouter);
    router.use('/sesion', sesionRouter);
    router.use('/usuario', usuarioRouter);
    router.use('/usuario_rol', usuarioRolRouter);
    router.use('/cliente', clienteRouter);
    router.use('/cita', citaRouter);
    router.use('/accion_diaria', accionDiariaRouter);
    router.use('/recurso', recursoRouter);
    router.use('/proyecto', proyectoRouter);
    router.use('/referencia', referenciaRouter);
    router.use('/documentacion', documentacionRouter);
    router.use('/proyecto_documentacion', proyectoDocumentacionRouter);
    router.use('/lote', loteRouter);
    router.use('/favorito', favoritoRouter);
    router.use('/venta', ventaRouter);
    router.use('/anuncio', anuncioRouter);
    router.use('/gasto', gastoRouter);
}

module.exports = routerApi;