  
class System{

    constructor(){}

    authenticate(asnwer,entered){
        textSize(50);
        fill("black");
        text(code,300,300)
        if(asnwer === entered.toUpperCase()) 
            return true;
        else
            return false;
    }

}