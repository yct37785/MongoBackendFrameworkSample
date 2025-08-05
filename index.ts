import {} from '@yourname/mongo-backend-framework/types'; // type argumentation
import { express } from '@yourname/mongo-backend-framework/express';
import { loadEnv } from '@yourname/mongo-backend-framework/miscUtils';
import { createApp } from '@yourname/mongo-backend-framework/createApp';
import myRoutes from './src/routes/myRoutes';

// checks required .env values are includwed
loadEnv();

// test re-export express works on client
const unprotectedRouter: express.Router = express.Router();
unprotectedRouter.get('/unprotectedRoute', async (req, res) => {
  return res.status(200).json('accessed unprotected route');
});

// initialize app with optional unprotected/protected routes
const app = createApp(
  unprotectedRouter, // optional unprotected routes (if any)
  express
    .Router()
    .use('/myRoutes', myRoutes)
);

// start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Client App running on port ${PORT}`);
});
