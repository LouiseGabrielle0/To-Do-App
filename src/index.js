import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from '@chakra-ui/react';
import {ColorModeScript, extendTheme } from '@chakra-ui/react';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

root.render(
  <React.StrictMode>
  <ChakraProvider>    
    <ColorModeScript initialColorMode="light" />
    <App />
    </ChakraProvider>
  </React.StrictMode>,
 document.getElementById('root')
);

