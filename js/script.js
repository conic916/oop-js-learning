"use strict";
// funkcja konstruujaca button :
function Button(text) {
  this.text = text || "Hello";
}

// prototyp :
Button.prototype = {
  create: function() {
    //funkcja jest parametrem innej funkcji,
    //nastąpi utrata kontekstu, dlatego musimy wskazać ten kontekst za pomocą zmiennej self.
    var self = this;
    // tworzy przycisk
    this.element = document.createElement("button");

    // tworzy napis na przycisku
    this.element.innerText = this.text;

    // tworzy tekst ktory po nacisnieciu w guzik sie wyswietli
    this.element.addEventListener("click", function() {
      alert(self.text);
    });

    document.body.appendChild(this.element);
  }
};
//tworzenie instancji i wywolanie metody create :
var btn1 = new Button("Hello!");
btn1.create();
