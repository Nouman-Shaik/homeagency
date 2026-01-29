import express from 'express';
import { createContact ,getContacts } from '../controller/contact.js';


const router = express.Router();


router.route('/create').post(createContact);
router.route('/get').get(getContacts);



export default router;