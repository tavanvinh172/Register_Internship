export class UserModel {
    constructor(
        public id?: number,
        public placeOfBitrh?: string,
        public fullName?: string,
        public address?: string,
        public dateOfBirth?: string,
        public email?: string,
        public userType?: string,
        public firstName?: string,
        public lastName?:string,
        public gender?:string,
        public phoneNumber?: string,
        public urlImg?:string,
        public lecturersCode?:number,
        public numGrTh?:number,
        public idNumber?:number,
    ) {
        
    }

    public static fromJson(json:any): UserModel{
        return new UserModel(
            json.id,
            json.placeOfBitrh,
            json.fullName,
            json.address,
            json.dateOfBirth,
            json.email,
            json.userType,
            json.firstName,
            json.lastName,
            json.gender,
            json.phoneNumber,
            json.urlImg,
            json.lecturersCode,
            json.numGrTh,
            json.idNumber
        );
    }
}