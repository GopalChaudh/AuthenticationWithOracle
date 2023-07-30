import OracleDB from "oracledb";
import connection_Details from "./dbUtills.js";
import bcrypt from 'bcrypt'

export  async function insertUser(id, name, email, password, timeStamp) {

    // try {

        const connection = await OracleDB.getConnection(connection_Details)
        const sql = `
        INSERT INTO USERS VALUES(:id,:name,:email,:password,:timeStamp)`;
        const result = await connection.execute(sql,[id, name, email, password, timeStamp],{
            autoCommit:true
        })
        console.log(result);
        connection.close()
    // } catch (err) {
    //      new Error(err.message);
    // }
    


}

export  async function GetUser(email, password) {
    const connection = await OracleDB.getConnection(connection_Details)
    try {

        const sql = `
        select * from  USERS where email = :email`;
        const result = await connection.execute(sql,[email],{
            autoCommit:true
        })
        if(result.rows.length){
            const  isMatching = await bcrypt.compare(password,result.rows[0][3])
            if(isMatching){
                return 0;
            }else{
                return 1 // password doesn't match
            }
        }else{
            return -1
        }
    } catch (err) {
         throw err;
    }finally{
        connection.close()

    }
    


}

export async function CreateUserTable() {

    try {

        const connection = await OracleDB.getConnection(connection_Details)
        const sql = `
        CREATE TABLE USERS(
        id varchar(60) PRIMARY KEY,
        name varchar(30) not null,
        email varchar(100) not null unique,
        password varchar(100) not null,
        timeStamp number(30)
)`;
        const createTable = await connection.execute(sql)
        console.log(createTable);
        connection.close()
    } catch (err) {
        console.log('Error:->'+err.message);
    }

}