const express = require ('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('All list');
});

router.post('/', (req, res) => {    
    fs.readFile('./enregistrement.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send(err);
        } else {          console.log(data);
            var obj = JSON.parse(data);
            obj.list.push({name:req.body.name, user:req.body.user, items:req.body.items});
            var json = JSON.stringify(obj);
            fs.writeFile('enregistrement.json', json, 'utf8', (error) => {
                if (err) {
                    console.error(error);
                    res.status(500).send(error);
                } 
                res.json(obj.list)
            });
        }
    })
  });                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  
  router.delete('/:id', (req,res) =>{
      fs.readFile('./enregistrement.json', 'utf8', (err, data) => {
        if(err){
          console.log(err);
          res.status(500).send(err);
        }
        else{
          console.log(data);
          var obj = JSON.parse(data);
          obj.list = obj.list.filter(list => {
            if(list.id === req.params.id) { return false } else { return true }
          })
          var json = JSON.stringify(obj, null, 4);
          fs.writeFile('data.json', json, 'utf8', (error) => {
            if (err) {
                console.error(error);
                res.status(500).send(error);
            } 
            res.send(true);
        });
        }
      })
    })
    
    module.exports = router;