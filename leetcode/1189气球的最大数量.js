var maxNumberOfBalloons = function(text) {
    let hash = new Map([
        ['b',0],
        ['a',0],
        ['l',0],
        ['o',0],
        ['n',0]
    ])

    for(const letter of text){
        if(hash.get(letter)!=null){
            hash.set(letter,hash.get(letter)+1)
        }
        if(letter=='l'||letter=='o'){
            hash.set(letter,hash.get(letter)-0.5)
        }
    }

    let x = Infinity 

    for(const [key,value] of hash){
        if(value<x){
            x = value
        }
    }

    return Math.floor(x)
};

