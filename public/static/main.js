import Router from './modules/router';
import CreatePage from './views/CreatePage';
import Session from './modules/session';

import AboutUsController from './controllers/AboutUsController';
import MenuStartController from './controllers/MenuStartController';
import MenuGameController from './controllers/MenuGameController';
import SignInController from './controllers/SignInController';
import SignUpController from './controllers/SignUpController';
import ScoreListController from './controllers/ScoreListController';
import RulesController from './controllers/RulesController';

const page = new CreatePage();
const session = new Session();

const createSession = function () {
    const router = new Router();
    router
        .addRoute('/', MenuStartController, {session: session, page: page})
        .addRoute('/signin', SignInController, {session: session, page: page})
        .addRoute('/signup', SignUpController, {session: session, page: page})
        .addRoute('/menu', MenuGameController, {session: session, page: page})
        .addRoute('/scorelist', ScoreListController, {session: session, page: page})
        .addRoute('/aboutus', AboutUsController, {session: session, page: page})
        .addRoute('/rules', RulesController, {session: session, page: page})
        .start();
    return router;
};

// try to restore session
session.userData()
    .then(createSession)
    .catch(createSession);


