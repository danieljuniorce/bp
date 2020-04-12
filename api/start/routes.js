"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

Route.get("/users/:id", "UserController.show").middleware("auth");
Route.post("/users", "UserController.store");
Route.put("/users/:id", "UserController.update").middleware("auth");
Route.delete("/users/:id", "UserController.detroy").middleware("auth");

Route.resource("/bps", "BpController").apiOnly().middleware("auth");
Route.put("/bps/admin/:id", "BpController.updateAdmin").middleware("auth");

Route.post("/sessions", "SessionController.login");

Route.get("/bps/personalite/:id", "BpPersonaliteController.list").middleware(
  "auth"
);
