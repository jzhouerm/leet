class HashICreated {
    //input is the size of empty space in array
    constructor(size) {
        this.data = new Array(size)
    }

    // hash function 
    _hash(key) {        //underscore is private but can still call it in JS (shrug)
        let hash = 0 
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        let address = this._hash(key)   //key passed in (ie. 'taco')
        if (!this.data[address]) {      //if data doesn't exist, create array
            this.data[address] = []
        }
        this.data[address].push([key, value])   //if it exists, push intro array
        return this.data
    }

    get(key) {
        let address = this._hash(key)       //find the address of the key
        const currentBucket = this.data[address]
        if (currentBucket) {
            if (currentBucket.length === 1) { // O(1)
                return currentBucket[0][1]
            }

            for ( let i = 0; i < currentBucket.length; i++) { // O(n)       //if slow has moe than 1, need to iterate to find key
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }  
            }
        }
        return undefined
    }

}

/*
In terminal, 
>node
>(paste hash function)
>const newHash = new HashICreated(13)
>newHash.set("taco", 26)
*/ 