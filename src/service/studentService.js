import * as repo from "../repository/studentRepository.js";

const toStudentResponse = (student) => {
    if (!student) return null;
    const {password, ...studentWithoutPassword} = student;
    return studentWithoutPassword;
}

export const findStudent = async (id) => {
    const student = await repo.findStudent(id);
        return toStudentResponse(student);
}

export const deleteStudent = async (id) => {
    const student = await repo.deleteStudent(id);
    return toStudentResponse(student);

}