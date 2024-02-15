import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import companyRoutes from './routes/companyRoutes';

const app = express();
const PORT = process.env.PORT || 9090;

app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(companyRoutes);

app.get('/health', (req: Request, res: Response) => {
  try {
    res.status(200).send('All systems online.');
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});
