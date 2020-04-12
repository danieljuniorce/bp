"use strict";
const User = use("App/Models/User");

class SessionController {
  async login({ auth, request }) {
    const { email, password } = request.all();

    try {
        const user = await auth.attempt(email, password);

        const userFind = await User.findBy("email", email);
        return {
            token: user.token,
            user: userFind
        };
    } catch(err) {
      return err;
    }

  }
}

module.exports = SessionController;
