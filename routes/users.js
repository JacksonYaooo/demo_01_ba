var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([
    {
      "name": "hmy",
      "age": 18,
      "hobby": [
        { "label": "game", "time": "2023-1-1" },
        { "label": "study", "time": "2022-10-1" }
      ]
    },
    {
      "name": "ckj",
      "age": 21,
      "hobby": [
        { "label": "coding", "time": "2022-8-1" },
        { "label": "love", "time": "2022-2-1" }
      ]
    }
  ]);
});

module.exports = router;
