import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import {Tarea} from '../interfaces/tareas';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE' }));
app.options('*', cors());

// GET /tareas
app.get('/tareas', async (req, res) => {
  const tareasSnapshot = await db.collection('tareas').get();
  const tareas: Tarea[] = [];
  tareasSnapshot.forEach((doc) => { 
    const data = doc.data() as Tarea;
    if (data) {
      tareas.push({ ...data, id: doc.id });
    }
  });
  res.json(tareas);
});

// POST /tareas
app.post('/tareas', async (req, res) => {
  const task = req.body;
  const taskRef = await db.collection('tareas').add(task);
  res.json({ id: taskRef.id, ...task });
});

// PUT /tareas/{taskId}
app.put('/tareas/:taskId', async (req, res) => {
  const taskId = req.params.taskId;
  const task = req.body;
  await db.collection('tareas').doc(taskId).set(task);
  res.json({ id: taskId, ...task });
});

// DELETE /tareas/{taskId}
app.delete('/tareas/:taskId', async (req, res) => {
  const taskId = req.params.taskId;
  await db.collection('tareas').doc(taskId).delete();
  res.status(204).send();
});

exports.app = functions.https.onRequest(app);