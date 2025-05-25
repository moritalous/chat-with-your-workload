import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import 'highlight.js/styles/github.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import outputs from '../amplify_outputs.json';
import App from './App.tsx';
import './styles/main.css';

Amplify.configure(outputs);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
