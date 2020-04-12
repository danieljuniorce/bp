"use strict";

const Database = use("Database");

class BpPersonaliteController {
  async list({ params }) {
    const user_id = params.id;

    const verify = await Database.raw(
      `SELECT * FROM bps WHERE (user_id = ${user_id} AND status = true)`
    );

    if (!verify[0][0]) {
      return { message: "Não existe ponto em aberto" };
    }

    return verify[0][0].id;
  }
}

module.exports = BpPersonaliteController;
