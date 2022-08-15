console.log('weighted-union−find');
class UF {
    constructor(n) {
        this.n = n;
        this.arr = Array.from( {length: this.n}, (_, ind)=>ind)
        this.size = Array.from( {length: this.n}, (_, __)=>1)
    }
    root(a) {
        console.log(`arr[${a}] -> ${this.arr[a]}`);
       if (this.arr[a] === a) {
        return a;
    } 
    else {
this.arr[a] = this.arr[this.arr[a]]
        return this.root(this.arr[a])
    }
    }
    connected(a, b) {
       return this.root(a) === this.root(b)
    }
    union(a, b) { 
        const aRoot = this.root(a)       
        const bRoot = this.root(b)
        if (aRoot === bRoot ) {
            return
        }  
        if (this.size[aRoot] < this.size[aRoot]) {
            this.arr[a] = bRoot;
            this.size[bRoot] +=this.size[aRoot]
        } else {
            this.arr[b] = aRoot;
            this.size[aRoot] +=this.size[bRoot]
        }
        
      return this.getArr();
    }
    getArr() {return this.arr;}
    getSize() {return this.size;}
}
const uf = new UF(10)

console.log( uf.getArr())
console.log( uf.getSize())
console.log( uf.connected(1, 2))
// console.log(`root of ${1}-->`, uf.root(1))
console.log( uf.union(1, 2))
console.log( uf.connected(1, 2))
console.log( uf.getSize())
console.log( uf.union(0, 1))
console.log( uf.union(2, 3))
console.log( uf.connected(0, 2))

console.log( uf.getSize())
console.log( uf.getArr())
console.log( uf.getSize())
