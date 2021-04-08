const { Router } = require('express');
const router = new Router();
const fs = require('fs');

router.get('/', (req, res) => {
    const menuItems = fs.createReadStream('views/menu.json');
    menuItems.pipe(res);
});

module.exports = router;