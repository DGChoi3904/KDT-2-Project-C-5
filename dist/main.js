(() => {
  "use strict";
  var e = require("react-dom/client"),
    r = u(require("react")),
    t = u(require("./loginPage"));
  function u(e) {
    return e && e.__esModule ? e : { default: e };
  }
  (0, e.render)(
    r.default.createElement(t.default, null),
    document.getElementById("root")
  );
})();
