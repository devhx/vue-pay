import { createApp } from 'vue'
import App from './App.vue'

import 'amfe-flexible';
import 'animate.css';

import "./assets/css/global.scss";
import "./assets/css/index.css";
import "./assets/css/reset.css";

const app = createApp(App);

app.mount('#app')