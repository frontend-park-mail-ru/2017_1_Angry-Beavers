
(function () {
    if (typeof window === 'object') {
        const Router = window.Router;
        const MenuView = window.CreatePage;
        const User = window.User;

        const user = new User({});
        user.getSession()
            .then(() => {
                (new Router())
                    .addRoute('/', MenuView,{user})
                    .start();
            });
    }
}());
