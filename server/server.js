import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import webpack from 'webpack';

import router from './routes/routes';
import webpackConfig from '../webpack.config';

const compiler = webpack(webpackConfig);
const app = express();

app.use(require("webpack-dev-middleware")(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds129374.mlab.com:29374/pop2`);

app.use('/', router);

module.exports = app;
