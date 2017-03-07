
(function () {
    if (typeof window === 'object') {
        const Router = window.Router;
        const User = window.User;

        let Page = new window.CreatePage();
        let StartPageController = window.StartPageController;
        let SignInController = window.SignInController;

        const user = new User({});
        user.getSession()
            .then(() => {
                (new Router())
                    .addRoute('/', StartPageController,{user: user, page: Page})
                    .addRoute('/signin', SignInController,{user: user, page: Page})
                    .start();
            });
    }
}());
