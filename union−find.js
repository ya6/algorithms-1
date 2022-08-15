console.log('Union−Find');
class UF {
    constructor(n) {
        this.n = n;
        this.arr = Array.from( {length: this.n}, (_, ind)=>ind)
    }
    root(a) {
        // console.log(`arr[${a}] -> ${this.arr[a]}`);
       if (this.arr[a] === a) {
        return a;
    } 
    else return this.root(this.arr[a])
    }
    connected(a, b) {
       return this.root(a) === this.root(b)
    }
    union(a, b) {        
        this.arr[a] = b
      return this.getArr();
    }
    getArr() {return this.arr;}
}
const uf = new UF(10)
uf.getArr()
console.log( uf.connected(1, 2))
// console.log(`root of ${1}-->`, uf.root(1))
 console.log( uf.union(1, 2))
 console.log( uf.connected(1, 2))
 console.log( uf.union(0, 1))
 console.log( uf.connected(0, 2))
