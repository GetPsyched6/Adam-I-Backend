import express from 'express';
import userRoutes from './routes/userRoutes';
import companyRoutes from './routes/companyRoutes';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(userRoutes);
app.use(companyRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on http://localhost:${PORT}`);
});
