"use strict";

const User = use("App/Models/User");

class UserController {
  async show({ params }) {
    return await User.findBy("id", params.id);
  }

  async store({ request, params }) {
    const { name, idInGame, email, password } = request.all();

    const user = await User.create({ name, idInGame, email, password });

    return user;
  }

  async update({ request, params }) {
    const id = request.only(["id"]);
    const { account: accountAdmin } = await User.findBy("id", id);

    const user = await User.findBy("id", params.id);

    const {
      name,
      idInGame,
      email,
      password,
      active,
      level,
      account,
    } = request.all();

    if (accountAdmin === "admin") {
      user.merge({ email, name, idInGame, password, active, level, account });
      await user.save();
      return user;
    } else {
      user.merge({ email, name, idInGame, password });
      await user.save();
      return user;
    }
  }

  async destroy({ params }) {
    const del = await Database.from("users").where("id", params.id).delete();

    return del;
  }
}

module.exports = UserController;
