const { body } = require('express-validator');

module.exports = [

  body('usuario').notEmpty().withMessage('Indicá un nombre de Usuario').isLength({ min: 5, max: 25 }).withMessage('El nombre de usuario debe tener entre 5 y 25 caracteres'),
  body('password').isStrongPassword({ minLength: 5, minUppercase: 1, minLowercase: 4, minSymbols: 1, minNumbers: 3 }).withMessage('La contraseña no puede estar vacia')



]