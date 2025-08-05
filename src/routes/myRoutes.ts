import { express } from '@yourname/mongo-backend-framework/express';
import { asyncHandler } from '@yourname/mongo-backend-framework/asyncHandler';

const router: express.Router = express.Router();

router.get('/protectedRoute', asyncHandler(async (req, res) => {
  return res.status(200).json("accessed protected route");
}));

export default router;
