
export class CounterService {
    counter = 0;

    incrementCounter(): number {
        this.counter++;
        console.log('Counter=' + this.counter);

        return this.counter;
    }
}