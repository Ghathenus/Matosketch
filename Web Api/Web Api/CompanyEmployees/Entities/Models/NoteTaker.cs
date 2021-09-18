/* using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Entities.Models
{
    public class NoteTaker
    {
        
        public NoteTaker(
            string firstname,
            string lastname,
            string age,
            string profession,
            string picture,
            string resume,
            string email
            
            )
        {
            this.FirstName = firstname;
            this.LastName = lastname;
            this.Age = age;
            this.Profession = profession;
            this.Picture = picture;
            this.Id = Guid.NewGuid();
            this.Resume = resume;
            this.Email =email;
                    
        }

       public Guid Id { get; set;   }
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Age { get; set; }

        public string Profession { get; set; }

        public string Picture { get; set; }

        public string Resume { get; set; }

        
        public string Email { get; set; }
         public NoteTaker(){}
    }
} */