function HashTable(size = 997) {
    const _size = size;
    const _data = new Array(_size);

    function hash(string) {
        // this hash function is very stupid, so it is only learn sample
        let index = 0;
        for(let i = 0; i < string.length; i++){
            index += string[i].charCodeAt();
        }
        return index;
    }

    return {

        set(key, value) {
            const index = hash(key);
            _data[index] = value;
        },

        get() {
            const index = hash(key);
            return _data[index];
        },

        dump(){
            return _data;
        }

    }
}