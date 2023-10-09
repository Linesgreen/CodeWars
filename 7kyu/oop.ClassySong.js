class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.lisenners = [];
        
    }
    
    howMany(arrayNames) {
        return arrayNames.reduce((count, item) => {
            if(this.lisenners.indexOf(item.toLowerCase()) === -1) {
                this.lisenners.push(item.toLowerCase());
                return count += 1;
            } else { return count }
            
        }, 0);
    }
}

let bibas = new Song ('bibassss', 'galbun');
console.log(bibas);

console.log(bibas.howMany(['Vlad','Andrew','Glad']));
console.log(bibas.howMany(['Jack', 'jacK']));
