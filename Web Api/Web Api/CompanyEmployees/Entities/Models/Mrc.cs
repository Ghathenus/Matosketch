/* using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Entities.Models
{
    public class Mrc
    {
        
        public Mrc(
            string name,
            string address,
            string website,
            string description,
            string phonenumber,
            string video,
            string email
            
            )
        {
            this.Name = name;
            this.Address = address;
            this.Website = website;
            this.Description = description;
            this.PhoneNumber = phonenumber;
            this.Id = Guid.NewGuid();
            this.Video = video;
            this.Email =email;
                    
        }

        public Guid Id { get; set;   }
        public string Name { get; set; }

        public string Address { get; set; }

        public string Website { get; set; }

        public string Description { get; set; }

        public string PhoneNumber { get; set; }

        public string Video { get; set; }

       
        public string Email { get; set; }
         public Mrc(){}
    }
   
} */