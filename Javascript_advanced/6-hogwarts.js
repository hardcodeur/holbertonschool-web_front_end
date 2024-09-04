class studentHogwarts {
    
    #privateScore = 0;
    #name = null;

    #changeScoreBy(points) {
        this.#privateScore += points
    }

    setName(newName){
        this.#name=newName;
    }

    rewardStudent(){
        this.#changeScoreBy(1);
    }

    penalizeStudent(){
        this.#changeScoreBy(-1);
    }

    getScore(){
        return this.#name+" : "+this.#privateScore;
    }

}


let student1 = new studentHogwarts;
student1.setName("Harry");
student1.rewardStudent();
student1.rewardStudent();
student1.rewardStudent();
student1.rewardStudent();
console.log(student1.getScore());

let student2 = new studentHogwarts;
student2.setName("Draco");
student2.rewardStudent();
student2.penalizeStudent();
student2.penalizeStudent();
student2.penalizeStudent();
console.log(student2.getScore());