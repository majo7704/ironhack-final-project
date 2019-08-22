export default class PlantUtils {

  setPlants(plants) {
    localStorage.setItem("plants", JSON.stringify(plants));
  }

  getCount() {
   
    return JSON.parse(localStorage.getItem("plants")).length
  }

  getPlants(){
    JSON.parse(localStorage.getItem("plants"))
  }

}

