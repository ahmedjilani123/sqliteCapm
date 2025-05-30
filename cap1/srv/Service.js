// const cds = require("@sap/cds");

// module.exports=async(srv)=>{
//     const db = await cds.connect.to("db")
//     srv.on("READ","User",async(req)=>{
//         const result = await db.run(SELECT.from("User"));
//         return result;
//     })
// }

const cds = require("@sap/cds");

class myService extends cds.ApplicationService {
    async init() {
        const db = await cds.connect.to("db")
        this.on("READ", "User", async (req) => {
            const result = await db.run(SELECT.from("User"));
            return result;
        })
        this.on("Getdata",async (req)=>{
            const result = await db.run(SELECT.from("User"));
            return result;
        })
        return super.init();
    }
}
module.exports = myService;