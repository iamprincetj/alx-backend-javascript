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
    if (!(val instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!val.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = val;
  }
}
