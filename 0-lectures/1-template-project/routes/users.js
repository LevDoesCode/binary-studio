var express = require('express');
const { isAuthorized } = require('../middlewares/auth.middleware');
var router = express.Router();
const { getName, saveName } = require('../services/user.service');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

// router.post('/', function (req, res, next) {
//   const result = getName(req.body);
//   if (result) {
//     res.send(`Your name is ${result}`);
//   } else {
//     res.status(400).send("User not sent!");
//   }
// });

router.post('/', function (req, res, next) {
  const result = saveName(req.body);
  if (result) {
    res.send("Data is saved");
  } else {
    res.status(400).send("User not sent!");
  }
});

router.get('/', isAuthorized, function (req, res, next) {
  res.send("Hello, you're IN!");
});

module.exports = router;
