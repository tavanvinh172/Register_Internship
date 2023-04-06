export class GradeModel{
    constructor(
        public id?: string,
        public name?: string,
        public students?: string
    ){}

    public static fromJson(json:any){
        return new GradeModel(
            json.id,
            json.name,
            json.students
        )
    }
}