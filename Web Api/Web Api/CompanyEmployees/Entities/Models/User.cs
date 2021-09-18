using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Models
{
    public class User : IdentityUser
    {
        public string Name { get; set; }
        public string UName { get; set; }
        public string Address { get; set; }       
       
        public string Description { get; set; }
        

      
         public ICollection<Photo> Photos {get; set;}

         public Video Video {get; set;}

 
         public string Picture { get; set; }

        
        

public string Age { get; set; }


 public string FirstName { get; set; }

   public string LastName { get; set; }

   
    public ICollection<Message> MessagesSent {get; set;}
    public ICollection<Message> MessagesReceived {get; set;}


    }
}
