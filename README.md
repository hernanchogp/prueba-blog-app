# Prueba tecnica Post https://dummyapi.io/

Se realiza web app utilizando el api de dummyapi, cuyo objetivo es consumir los servicios para consultar post y tags.
## Plugins

Los siguientes plugins hacen parte de la estructura funcional del aplicativo.

| Plugin | README |
| ------ | ------ |
| Bootstrap| https://getbootstrap.com/docs/5.0/getting-started/introduction/|
| Fontawesome| https://fontawesome.com/v5/docs/web/use-with/react |
| React Select | https://react-select.com/home |


# Archivos

 **.env**, este archivo contiene los parametros basicos para el correcto funcionamiento de los consumos a realizar.
 

## REACT_APP_API_URL
**url_api**  En este parametro se define la url a consumir, para este caso se utiliza la url de dummyapi.io.

## REACT_APP_API_KEY

**key_api** En este parametro se define el token para uso del api, sin este no es posible la comunicacion desde nuestra web con el api.

## REACT_APP_CANT_LISTAR

Este parametro define el listado de post a retornar por el api.
**Nota**, No aplica para el home de la aplicación ya que por defecto se trae 6 post.

# package.json

En este archivo se encuentra el parametro  **"homepage"**, utilizado para githubpage, si se requiere hacer uso del aplicativo de forma local, se recomienda eliminar esta linea del archivo .json.

  

## Available Scripts

  

En el directorio del proyecto, puede ejecutar:

  

### `npm start`

  


  
Ejecuta la aplicación en el modo de desarrollo.\ Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.
  

### `npm test`

  


  
Inicia el plan de prueba en el modo de reloj interactivo.\ Consulte la sección sobre [ejecutar pruebas] (https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información.

  

### `npm run build`

  


Construye la aplicación para producción en la carpeta `build`.\

Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

  

La compilación se minimiza y los nombres de archivo incluyen los hashes.\

¡Tu aplicación está lista para ser implementada!

  

Consulte la sección sobre [implementación](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información.

  

### `npm run eject`

  
**Nota**: esta es una operación unidireccional. ¡Una vez que te 'expulsas', no puedes volver atrás!**

  

Si no está satisfecho con la herramienta de compilación y las opciones de configuración, puede "expulsar" en cualquier momento. Este comando eliminará la dependencia de compilación única de su proyecto.

  

En cambio, copiará todos los archivos de configuración y las dependencias transitivas (webpack, Babel, ESLint, etc.) directamente en su proyecto para que tenga control total sobre ellos. Todos los comandos, excepto "expulsar", seguirán funcionando, pero apuntarán a los scripts copiados para que pueda modificarlos. En este punto estás por tu cuenta.

  

No tienes que usar nunca `eject`. El conjunto de funciones seleccionadas es adecuado para implementaciones pequeñas y medianas, y no debe sentirse obligado a usar esta función. Sin embargo, entendemos que esta herramienta no sería útil si no pudiera personalizarla cuando esté listo para ello.
```