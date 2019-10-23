function HashTable(size = 997) {
    const _size = size;
    const _data = new Array(_size);

    function hash(string) {
        // this hash function is very stupid, so it is only learn sample
        let index = 0;
        for(let i = 0; i < string.length; i++){
            index += string[i].charCodeAt();
        }
        return index % _size;
    }

    function foundedKeyIndex(key, list){
        // this function is needed for search key in list (collisions)
        // this function also stupid, only learn sample
       for(let i = 0; i < list.length; i++){
           if(list[i][0] == key) return i;
       } 
       return -1;
    }

    return {

        set(key, value) {
            const index = hash(key);
            let list = _data[index];

            if(!list){
                // list is not exist - init list, add value
                _data[index] = [[key, value]];
            }else{
                const listIndex = foundedKeyIndex(key, list);
                if(listIndex != -1){
                    // list exist, key exist - update value
                    list[listIndex][1] = value;
                }else{
                    // list exist, key don't exist - add value
                    list.push([key, value]);
                }
            }
            
        },

        get(key) {
            const index = hash(key);
            let list = _data[index];

            if(list){
                const listIndex = foundedKeyIndex(key, list);
                if(listIndex != -1){
                    return list[listIndex][1];
                }
            }
        },

        dump(){
            return _data;
        }

    }
}