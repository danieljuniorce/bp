"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Bp = use("App/Models/Bp");
const User = use("App/Models/User");
const Database = use("Database");
const { formatDate, formatHours } = use("App/Functions/formatDate");

class BpController {
  async store({ request }) {
    const { user_id } = request.all();

    let date = new Date();

    const start = `${date.getFullYear()}:${
      date.getMonth() + 1
    }:${date.getDate()} ${date.toLocaleTimeString()}`;

    const verify = await Database.raw(
      `SELECT * FROM bps WHERE (user_id = ${user_id} AND status = true)`
    );

    if (!verify[0][0]) {
      const bp = await Bp.create({
        user_id,
        start,
      });

      return {
        info: bp,
        id: bp.id,
      };
    }

    return {
      date: formatDate(verify[0][0].start),
      hours: formatHours(verify[0][0].start),
      info: verify[0][0],
      message: "Já existe ponto em aberto",
    };
  }

  async show({ params }) {
    const bp = await Bp.findBy("id", params.id);

    const modify = {
      info: bp,
      hours: formatHours(bp.start),
      date: formatDate(bp.start),
    };

    return modify;
  }

  async index() {
    try {
      const bp = await Bp.all();
      return bp;
    } catch (error) {
      return error;
    }
  }

  async update({ params }) {
    const bp = await Bp.findBy("id", params.id);

    if (bp.status === true || bp.status === 1) {
      let date = new Date();
      const end = `${date.getFullYear()}:${
        date.getMonth() + 1
      }:${date.getDate()} ${date.toLocaleTimeString()}`;

      bp.merge({ end, status: false });
      await bp.save();
      return bp;
    } else {
      return { message: "Ponto finalizado" };
    }
  }

  async updateAdmin({ params, request, response }) {
    const { approved, id } = request.all();
    const bp = await Bp.findBy("id", params.id);

    try {
      const { account } = await User.findBy("id", id);

      if (account === "admin") {
        bp.merge({ approved });

        await bp.save();

        return bp;
      }

      return { message: "Don't is admin" };
    } catch (err) {
      return response
        .status(401)
        .json({ message: "Don't authorization!", err });
    }
  }

  async destroy({ params }) {
    const del = await Database.from("bps").where("id", params.id).delete();

    return del;
  }
}

module.exports = BpController;
