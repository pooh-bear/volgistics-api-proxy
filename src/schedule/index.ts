import { Router, Request, Response, RequestHandler } from 'express';
import { VolgisticsClient } from 'volgistics-api-client';
import helpers from '../helpers';
const router = Router();

router.get('/', (async (req: Request, res: Response): Promise<Response | void> => {
    try {
        const auth = req.headers.authorization;
        
        if (typeof auth !== 'string') {
            return res.status(401).json({ error: 'Request is missing authorization header' });
        }
        
        if (!helpers.auth.checkAuth(auth)) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        const client = new VolgisticsClient({
            orgId: process.env.ORG_ID
        });
    
        await client.login({
            email: process.env.AUTH_EMAIL,
            password: process.env.AUTH_PASSWORD
        });

        let prefix = undefined;

        if (req.query.prefix) {
            prefix = req.query.prefix as string;
        }
    
        const schedule = await client.getSchedule({
            date: new Date().toISOString(),
            prefix
        });
    
        res.json({
            schedule,
            count: schedule.length
        });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}) as RequestHandler);

export default router;
