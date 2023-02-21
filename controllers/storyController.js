const model = require('../models/story')
exports.index = (req, res) => {
  //res.send("Send all stories");
 // res.send(model.find());
 let stories = model.find();
 console.log(stories);
 res.render('./story/index',{stories});
};

exports.new = (req, res) => {
  res.render('./partials/new');
};

exports.create = (req, res) => {
  //res.send("create a new story");
  let story = req.body;
  model.save(story);
  res.redirect('/stories');
};

exports.show = (req, res) => {
  let id = req.params.id;
  let story = model.findById(id);
  if(story){
    res.render('./story/show',{story});

  }else{
    res.status(404).send('cannot find story with id '+id);

  }
};

exports.edit = (req, res) => {
  let id = req.params.id;
  let story = model.findById(id);
  if(story){
    res.render('./story/edit',{story});

  }else{
    res.status(404).send('cannot find story with id '+id);

  }
};

exports.update = (req, res) => {
  let story = req.body;
  let id = req.params.id;
  if(model.updateById(id,story)){
    res.redirect('/stories/'+id);
  }else{
    res.status(404).send('cannot find story with id '+id);
  }


};

exports.delete = (req, res) => {
  res.send("delete story by id " + req.params.id);
};
