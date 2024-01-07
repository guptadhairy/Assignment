// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { ColorModeScript } from '@chakra-ui/react';
import {ChakraProvider} from "@chakra-ui/react"
import App from './App';

import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript />
    <App />
    </ChakraProvider>
  </React.StrictMode>
);
