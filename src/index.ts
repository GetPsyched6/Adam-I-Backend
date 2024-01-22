import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Node.js!');
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
