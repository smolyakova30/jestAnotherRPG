module.exports = function(val1, val2) {
    if (val1 === val2) {
      return true;
    } else {
      return false;
    }
  };

  function randomeNumber(){
      return Math.floor(Math.random() * 9 +1);
  };

  module.exports = randomeNumber;