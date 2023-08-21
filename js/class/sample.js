function person(){

    let counter = 0;
    return{
        name: 'naman',
        getCounter: function(){
            console.log(counter);
        },
        increaseCounter: function(){
            console.log(++counter);
        }
    }
}

const p1 = person();
p1.increaseCounter()
p1.increaseCounter()
p1.increaseCounter()
const p2 = person();
p2.increaseCounter()

const p3 = person();
p3.increaseCounter()
p3.increaseCounter();

p1.increaseCounter();
