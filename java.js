function animallist() {
    var item = document.getElementById("listinput").value
    var text = document.createTextNode(item)
    var newItem = document.createElement("li")
    newItem.appendChild(text)
    document.getElementById(animallist).appendChild(newItem)


}