const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //archivo principal del proyecto con el lo iniciamos.
    entry: './src/index.js',
    //En el output se guardaran los archivos resultantes.
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname señala el directorio donde nos encontramos
        //nombre del archivo compilado
        filename: 'bundle.js'
    },

    //Resolvemos las extensiones que usaremos
    resolve: {
        extensions: ['.js', '.jsx']
    },

    //Creamos un modulo con las reglas necesarias para el proyecto
    module: {
        rules: [
            {
                // Regla principal
                // Identificacion de los archivos con una expresion regular
                test: /\.(js|jsx)$/,
                 // Exclusion de carpetas
                exclude: /node_modules/,
                // Utilizamos el loader de babel instalado
                use: {
                    loader: "babel-loader"
                }
            },
            {
                // Regla para trabajar con los archivos html
                test: /\.html$/,
                // Utilizamos el loader de babel instalado
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {   
                //regla para trabajar con archivos .css y .scss
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader'
                ]

            }
        ]
    },
    // Se añaden los plugins que necesitamos
    plugins: [
        // pasamo un objeto con la configuracion que necesitamos
        new HtmlWebPackPlugin({
            //Donde esta ubicado el template que tenemos
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        }),
    ]
};     