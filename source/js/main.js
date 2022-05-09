import '../sass/style.scss';
import KeyboardController from './controllers/keyboard-controller';
import KeyboardModel from './models/keyboard-model';
import KeyboardView from './views/keyboard-view';
import getDescription from './modules/get-description';

const model = new KeyboardModel();
const controller = new KeyboardController(model);
const view = new KeyboardView(controller);
view.render();
getDescription();
