export default class PlantUtils {

  setPlants(plants) {
    localStorage.setItem("plants", JSON.stringify(plants));
  }

  getCount() {
    debugger
    return JSON.parse(localStorage.getItem("plants")).length
  }

  getPlants(){
    JSON.parse(localStorage.getItem("plants"))
  }

}

