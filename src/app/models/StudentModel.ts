import { GradeModel } from "./GradeModel";

export interface Student{
    id:number,
    placeOfBitrh: string,
    fullName: string,
    email:string,
    dateOfBirth:number,
    address: string,
    userType: number,
    firstName: string,
    lastName: string,
    gender:string,
    phoneNumber: string,
    urlImg: string,
    roles:string,
    studentCode:string,
    grade: GradeModel,
    studentType: number,
    graduationThesis:string,
    idNumber:string
}

export class StudentModel {
    constructor(
        public id?:number,
        public placeOfBitrh?: string,
        public fullName?: string,
        public email?:string,
        public dateOfBirth?:number,
        public address?: string,
        public userType?: number,
        public firstName?: string,
        public lastName?: string,
        public gender?:string,
        public phoneNumber?: string,
        public urlImg?: string,
        public roles?:string,
        public studentCode?:string,
        public grade?: GradeModel,
        public studentType?: number,
        public graduationThesis?:string,
        public idNumber?:string
    ) {
        
    }

    public static fromJson(json: any){
        return new StudentModel(
            json?.id,
            json?.placeOfBitrh,
            json?.fullName,
            json?.email,
            json?.dateOfBirth,
            json?.address,
            json?.userType,
            json?.firstName,
            json?.lastName,
            json?.gender,
            json?.phoneNumber,
            json?.urlImg,
            json?.roles,
            json?.studentCode,
            GradeModel.fromJson(json),
            json?.studentType,
            json?.graduationThesis,
            json?.idNumber
        );
    }
}