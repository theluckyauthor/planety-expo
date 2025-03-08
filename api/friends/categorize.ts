import { VercelRequest, VercelResponse } from '@vercel/node';
import { calculateFriendshipScore } from '../../lib/algorithms';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { interactionData } = req.body;
    const category = calculateFriendshipScore(interactionData);
    
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
} 