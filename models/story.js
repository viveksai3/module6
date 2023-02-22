const { DateTime } = require("luxon");
const {v4:uuidv4} = require('uuid');
const stories = [
  {
    id: "1",
    title: "A story",
    content: "first dummy content",
    author: "First",
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
  },
  {
    id: "2",
    title: "A second story",
    content: "second dummy content",
    author: "Second",
    createdAt: DateTime.local(2022, 2, 12, 18, 0).toLocaleString(
      DateTime.DATETIME_SHORT
    ),
  },
];

exports.find =() => stories;

exports.findById = function(id){
  return stories.find(story=>story.id === id);
};

exports.save = function(story){
  story.id = uuidv4();
  story.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
  stories.push(story);
};

exports.updateById = function(id, newStory){
  let story = stories.find(story=>story.id === id);
  if(story){
    story.title = newStory.title;
    story.content = newStory.content;
    return true;
  }else{
    return false;
  }
 
}

exports.deleteById = function(id){
  let index = stories.findIndex(story=>{
    story.id === id;
  });
  if(index!==1){
    stories.splice(index,1);
    return true;
  }else{
    return false;
  }
}