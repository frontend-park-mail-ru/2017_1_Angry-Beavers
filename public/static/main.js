import Router from './modules/router';
import CreatePage from './views/CreatePage';
import Session from './modules/session';

import AboutUsController from './controllers/AboutUsController';
import MenuStartController from './controllers/MenuStartController';
import MenuGameController from './controllers/MenuGameController';
import SignInController from './controllers/SignInController';
import SignUpController from './controllers/SignUpController';
import ScoreListController from './controllers/ScoreListController';

let Page = new CreatePage();
let RulesController = window.RulesController;

const session = new Session();
(new Router())
    .addRoute('/', MenuStartController, {session: session, page: Page})
    .addRoute('/signin', SignInController, {session: session, page: Page})
    .addRoute('/signup', SignUpController, {session: session, page: Page})
    .addRoute('/menu', MenuGameController, {session: session, page: Page})
    .addRoute('/scorelist', ScoreListController, {session: session, page: Page})
    .addRoute('/aboutus', AboutUsController, {session: session, page: Page})
    .addRoute('/rules', RulesController, {session: session, page: Page})
    .start();
