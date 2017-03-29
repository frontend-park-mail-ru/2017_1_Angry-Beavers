(function () {
    if (typeof window === 'object') {
        const Router = window.Router;
        const User = window.User;

        let Page = new window.CreatePage();
        let MenuStartController = window.MenuStartController;
        let SignInController = window.SignInController;
        let MenuGameController = window.MenuGameController;
        let ScoreListController = window.ScoreListController;
        let SignUpController = window.SignUpController;
        let AboutUsController = window.AboutUsController;
        let RulesController = window.RulesController;

        const user = new User({});
        (new Router())
            .addRoute('/', MenuStartController, {user: user, page: Page})
            .addRoute('/signin', SignInController, {user: user, page: Page})
            .addRoute('/signup', SignUpController, {user: user, page: Page})
            .addRoute('/menu', MenuGameController, {user: user, page: Page})
            .addRoute('/scorelist', ScoreListController, {user: user, page: Page})
            .addRoute('/aboutus', AboutUsController, {user: user, page: Page})
            .addRoute('/rules', RulesController, {user: user, page: Page})
            .start();
    }
}());
