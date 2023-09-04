import { Firestore } from '@google-cloud/firestore';

// Configuración de Firebase
const firestore = new Firestore({
  projectId: 'lista-de-tareas-9050c',
  keyFilename: '/lista-de-tareas-key.json',
});

export { firestore };