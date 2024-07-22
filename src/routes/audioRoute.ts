import { Router } from 'express';
import uploadAudio from '../controllers/audioController';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: '/tmp' });

router.post('/play_sound', upload.single('file'), uploadAudio);

export default router;