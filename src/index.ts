import express from 'express';
import home from './routes/route';
import audioRoutes from './routes/audioRoute';

const app = express();
const port = 5000;

app.use(express.json());

app.use('/', home);
app.use('/api', audioRoutes);

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`))

export default app;