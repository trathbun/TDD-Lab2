function translate(word){

    //make the string lowercase
    let convert = word.toLowerCase();

        //determine if the first letter of the string is a vowel
        if(["a", "e", "i", "o", "u"].indexOf(convert[0]) > -1){
            
            //add way to the end of the word and return that word
            convert = convert + "way";
            return convert;
        }else{

            //loop through the string to find the first voewl
            for (let i = 0; i < convert.length; i++) {
                
                //find the index of the first vowel
                if (["a", "e", "i", "o", "u"].indexOf(convert[i]) > -1){
                    
                    //seperate the first part of the word up to the first vowel
                    const upToVowel = convert.slice(0,i)
                    console.log(upToVowel);

                    //seperate the second half of the word after the first vowel
                    const afterVowel = convert.slice(i, convert.length);
                    console.log(afterVowel);

                    //add the two string togethger and add ay
                    convert = afterVowel + upToVowel +"ay";
                    break;
                }
            }
            return convert;
        }
    }