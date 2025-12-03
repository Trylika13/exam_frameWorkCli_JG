export default class DB {
  static setApiURL(data) {
    this.apiURL = data;
  }

  static async findAll() {
    const response = await fetch(this.apiURL + "products");
    return await response.json();
  }
}
