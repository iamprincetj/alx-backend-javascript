/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._student = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val === 'number') {
      this._length = val;
    } else {
      throw new TypeError('length must be a Number');
    }
  }

  get students() {
    return this._student;
  }

  set students(val) {
    if (val instanceof Array) {
      this._student = val;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }
}
const c1 = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
console.log(c1.name);
c1.name = 'Python 101';
console.log(c1);

try {
  c1.name = 12;
} catch (err) {
  console.log(err);
}

try {
  // eslint-disable-next-line no-unused-vars
  const c2 = new HolbertonCourse('ES6', '1', ['Bob', 'Jane']);
} catch (err) {
  console.log(err);
}