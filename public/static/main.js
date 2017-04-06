import Router from './modules/router';

let Page = new window.CreatePage();
let MenuStartController = window.MenuStartController;
let SignInController = window.SignInController;
let MenuGameController = window.MenuGameController;
let ScoreListController = window.ScoreListController;
let SignUpController = window.SignUpController;
let AboutUsController = window.AboutUsController;
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
