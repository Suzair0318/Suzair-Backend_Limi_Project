const user_service = require('../services/user_services');
module.exports = {
     
    send_otp :  async(req, res) => {
          try{
              const user_otp = await user_service.send_otp_service(req);
              res.status(200).json({success  : true , otp : user_otp});
          }
          catch(e){
            //  console.log(e);
             res.status(500).json({success  : false , error_message : e.message});
          }
    },

    check_otp : async(req, res) => {
          try{
              const user_data = await user_service.check_otp_service(req);
            //   console.log(user_data);
              res.status(200).json({success  : true , message : 'User_created' , data : user_data});
          }
          catch(e){
            //  console.log(e);
             res.status(500).json({success  : false , error_message : e.message});
          }
    },

    installer_user : async(req, res) => {
          try{
              const installer_user = await user_service.installer_user_service();
              res.status(200).json({success  : true , message : 'Installer User created' , data : installer_user});
          }
          catch(e){
            //  console.log(e);
             res.status(500).json({ error_message : e.message});
          }
    },

    add_production_user : async(req , res) => {
         try {
            const production_user = await user_service.add_production_user_service(req);
            res.status(200).json({success  : true  , data : production_user});
         } catch (e) {
            //  console.log(e);
             res.status(500).json({success  : false , error_message : e.message});
         }   
    },

    verify_production_user : async(req , res) => {
        
        try{
            const production_user = await user_service.verify_production_user_service(req);
            res.status(200).json({success : production_user , message : 'production user verified'})
        }catch(e){
            // console.log(e);
            res.status(500).json({success  : false , error_message : e.message});
        }
    }, 

    update_production_user : async(req, res) => {
           try{
              const production_user = await user_service.update_production_user_service(req);
              res.status(200).json({success  : true  , data : production_user});    
           }
           catch(e){
            //  console.log(e);
             res.status(500).json({success  : false , error_message : e.message});
               }
    },

    add_family_member : async(req, res) => {
        try {
            const familyMember = await user_service.add_family_member_service(req);
            res.status(200).json({success  : true , message : 'Family member added' , data : familyMember});
        } catch (e) {
            // console.log(e);
            res.status(500).json({success  : false , error_message : e.message});
        }
    },

    update_name : async(req , res) => {
         try{
            const update_user = await user_service.update_user_service(req);
            res.status(200).json({success  : true , message : "Username Updated" , data : update_user});
         }
         catch(e){
            //  console.log(e);
             res.status(500).json({success  : false , error_message : e.message});
         }
    }

}