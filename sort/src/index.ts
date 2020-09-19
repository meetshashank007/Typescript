class Sorter {
  constructor(public collection: number[] | string) {}
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //restore the union inpact on type
        //type guard for array to uplift the readonly on number
        if (this.collection instanceof Array) {
          // collection === number[]
          if (this.collection[j] > this.collection[j + 1]) {
            const temp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = temp;
          }
        }
        //case for string
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
