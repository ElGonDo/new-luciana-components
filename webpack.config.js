const path = require('path');

   module.exports = {
       entry: './src/index.ts', // Punto de entrada de tu aplicación
       output: {
           filename: 'bundle.js', // Nombre del archivo de salida
           path: path.resolve(__dirname, 'dist'), // Carpeta de salida
           library: 'new-luciana-components', // Nombre de la biblioteca
           libraryTarget: 'umd', // Formato de la biblioteca (Universal Module Definition)
       },
       resolve: {
           extensions: ['.tsx', '.ts', '.js'], // Extensiones que Webpack debe resolver
       },
       module: {
           rules: [
               {
                   test: /\.tsx?$/, // Archivos TypeScript
                   use: 'ts-loader', // Cargador para TypeScript
                   exclude: /node_modules/,
               },
               {
                   test: /\.module\.css$/, // Archivos CSS
                   use: ['style-loader', 'css-loader'], // Cargadores para CSS
               },
           ],
       },
       mode: 'development', // Modo de desarrollo
   };