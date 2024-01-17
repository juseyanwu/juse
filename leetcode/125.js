var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9]/g,"").replace(/\s/g,"").toLowerCase();
     let i=0,j=s.length-1;
     while(i<j){
         if(s[i]!=s[j]){
            return false;
         }
         i++;
         j--;
     }
 return true;
 };
 
