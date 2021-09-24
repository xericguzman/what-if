const prompt = require('prompt-sync')();

const groupSize = Number(prompt('Enter class size'))

if (groupSize % 3 === 0){
    console.log(groupSize / 3, 'groups of threes');

}else if(groupSize % 3 === 1){
   const numGroupsofThree = (groupSize - 4) / 3;
   const numGroupsofTwo = 2;
   console.log(numGroupsofThree, 'groups of three', numGroupsofTwo, 'groups of two');

}
   
else if(groupsize % 3 === 2) {
    const numGroupsofThree = (groupsize - 2) / 3;
    const numGroupsofTwo = 1;
    console.log(numGroupsofThree, 'groups of three', numGroupsofTwo, 'groups of two');
}
    
else {
    console.log('error');
        }
