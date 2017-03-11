// JavaScript File
//travis rand
// 2/11/17


function looping() {
var string = "loop1\n";
    for (var i = -10; i < 20; i++) {
        string += i + ", ";
    } 
    
    string += "\nloop2\n";
    
    for (var i = 10; i < 40; i+=2) {
        string += i + ", ";
    }
    
    string += "\nloop3\n";
    
    for (var i = 300; i < 334; i++) {
        string += i + ", ";
    }
    
    string += "\nloop4\n";
    
    for (var i = 5; i < 51; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            string += i + ", ";
        }
    }
    console.log(string);
}
