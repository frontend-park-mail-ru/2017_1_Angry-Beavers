(function () {
    if (typeof window === 'object') {
        const Router = window.Router;
        const User = window.User;
        const StartForm = window.StartForm;

        const user = new User({});
        //
        user.getSession()
            .then(() => {
                (new Router())
                    .addRoute('/', StartForm, { user })
                    .start();
            });
    }
}());
