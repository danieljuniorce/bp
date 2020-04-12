"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BpSchema extends Schema {
  up() {
    this.create("bps", (table) => {
      table.increments();
      table.integer("user_id").unsigned().references("id").inTable("users");
      table.datetime("start").notNullable();
      table.datetime("end").nullable();
      table.boolean("status").defaultTo(true);
      table.boolean("approved").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("bps");
  }
}

module.exports = BpSchema;
