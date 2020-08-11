module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if(item.enhancement >= 20){
    return {...item, enhancement: 20}
  }else{
    item.enhancement = item.enhancement + 1
    return { ...item};
  }
  
}

function fail(item) {
  if(item.enhancement < 15){
    item.durability = item.durability - 5
  }else if(item.enhancement = 15){
    item.durability = item.durability - 10
  }else{
    item.enhancement = item.enhancement - 1
    item.durability = item.durability -10
  }
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if(item.enhancement === 0){
    return({...item})
  }else{
    item.name = `${item.name} +${item.enhancement}`
  }
  return { ...item };
}
