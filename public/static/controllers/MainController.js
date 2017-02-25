/**
 * Created by pacman29 on 24.02.17.
 */
(function () {
   class MainController {
       constructor(){
           if (MainController.__instance) {
               return MainController.__instance;
           }

           this.controllers = new Map();

           MainController.__instance = this;
       }

       setController(path,controller){
           if(this.controllers.has(path)){
               return this;
           }

           this.controllers.set(path,controller);
           return this;
       }

       getController(path){
           if(this.controllers.has(path)){
               return this.controllers[path];
           }
           else {
               return false;
           }
       }


   }
});
