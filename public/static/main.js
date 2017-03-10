(function () {
    if (typeof window === 'object') {
        const Router = window.Router;
        const User = window.User;

        let Page = new window.CreatePage();
        let StartPageController = window.StartPageController;
        let SignInController = window.SignInController;
        let MenuController = window.MenuController;
        let ScorelistController = window.ScorelistController;
        let SignUpController = window.SignUpController;
        let AboutUsController = window.AboutUsController;
        let RulesController = window.RulesController;

        debugger;
        const user = new User({});
        (new Router())
            .addRoute('/', StartPageController, {user: user, page: Page})
            .addRoute('/signin', SignInController, {user: user, page: Page})
            .addRoute('/signup', SignUpController, {user: user, page: Page})
            .addRoute('/menu', MenuController, {user: user, page: Page})
            .addRoute('/scorelist', ScorelistController, {user: user, page: Page})
            .addRoute('/aboutus', AboutUsController, {user: user, page: Page})
            .addRoute('/rules', RulesController, {user: user, page: Page})
            .start();

    }
}());
