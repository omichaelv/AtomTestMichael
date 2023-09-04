import express from 'express';
import cors from 'cors';
import { firestore } from './firebase';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/tasks', async (req, res) => {
  const tasksSnapshot = await firestore.collection('tasks').get();
  const tasks = tasksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title, description } = req.body;
  const task = { title, description, completed: false };
  const docRef = await firestore.collection('tasks').add(task);
  res.json({ id: docRef.id, ...task });
});

app.put('/tasks/:taskId', async (req, res) => {
  const { taskId } = req.params;
  const { title, description, completed } = req.body;
  const task = { title, description, completed };
  await firestore.collection('tasks').doc(taskId).update(task);
  res.json({ id: taskId, ...task });
});

app.delete('/tasks/:taskId', async (req, res) => {
  const { taskId } = req.params;
  await firestore.collection('tasks').doc(taskId).delete();
  res.json({ id: taskId });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

export default app;