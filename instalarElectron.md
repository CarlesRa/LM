```json
const {app, BrowserWindow} = require('electron')
require('electron-reload')(__dirname);
 
let mainWindow
 
function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
 
app.on('ready', createWindow)
 
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
 
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

```
Instalar Electron y crear Hola Mundo
Windows

    Descargar [nodejs](https://nodejs.org/en/)
    npm install electron -g

Linux Mac

    sudo apt-get update
    sudo apt-get install nodejs
    sudo npm install electron -g  ( sudo npm install -g electron –unsafe-perm=true –allow-root )

Para todas las versiones, crear nuevo proyecto con electron

    ir a la carpeta donde queremos crear nuestra aplicación
    npm init
    npm install electron –save
    obtendremos un “package.json” y creamos “index.html” e “index.js”
    En index.js copiamos el código de más abajo y en index.html creamos una estructura básica de HTML
    arrancar aplicación => “electron .”

NOTA

Instalar e insertar “electron reload” para que el navegador se actualice de forma automática cada vez que 
hagamos cambios en nuestros ficheros.

HOT RELOAD

npm install electron-reload --save

require('electron-reload')(__dirname);

