function recal(string, obj){
  for (let key in obj){
    if (key == string){
      return true;
    }
    else return false;
  }
}