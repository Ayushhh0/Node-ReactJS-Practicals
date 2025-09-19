const obj = {
    name: "NodeJS",

    normalFunc: function() {
        console.log("Normal:", this.name);
    },

    arrowFunc: () => {
        console.log("Arrow:", this.name);
    }
};

obj.normalFunc(); 
obj.arrowFunc();  
