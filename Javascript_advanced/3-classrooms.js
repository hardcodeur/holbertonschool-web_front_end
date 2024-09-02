function createClassRoom(numbersOfStudents) {

    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }

    let students = [];
    for (let index = 0; index < numbersOfStudents; index++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

let classRoom = createClassRoom(10);