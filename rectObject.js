function Rectangle(a, b) {
  this.length = a;
  this.width = b;
  this.perimeter = (() => (2 * (this.length + this.width)))();
  this.area = (() => this.length * this.width)();
}

const rect = new Rectangle(2, 3);
console.log(rect.length)
console.log(rect.width)
console.log(rect.perimeter)
console.log(rect.area)