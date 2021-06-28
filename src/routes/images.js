import passport from 'passport';
import config from '../config/config';
import { upload } from '../controllers/image.controller';
import { allowOnly } from '../services/routesHelper';


const imageController = require('../controllers/image.controller');
const imageUploader = require('../helper/image-uploader');

module.exports = (app) => {

app.post('/upload',passport.authenticate('jwt', { session: false }),
allowOnly(config.accessLevels.user, upload),
imageUploader.upload.single('image'),
imageController.upload
)
}