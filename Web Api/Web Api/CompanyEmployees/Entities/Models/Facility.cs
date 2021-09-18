/* using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Entities.Models
{
    public class Facility
    {
        
        public Facility(
            string name,
            string address,
            string website,
            string description,
            string fofSpecialties,
            string personnel,
            string email,
            ICollection<Photo> photos
            
            )
        {
            this.Name = name;
            this.Address = address;
            this.Website = website;
            this.Description = description;
            this.Id = Guid.NewGuid();
            this.FofSpecialties = fofSpecialties;
            this.Personnel = personnel;
            this.Email =email;
              this.Photos = photos;      
        }

        public Guid Id { get; set;   }
        public string Name { get; set; }

        public string Address { get; set; }

        public string Website { get; set; }

        public string Description { get; set; }

        public string FofSpecialties { get; set; }

        public string Personnel { get; set; }

       
        public string Email { get; set; }

        public ICollection<Photo> Photos {get; set;}
        
        public override bool Equals(object obj)
        {
            return base.Equals(obj);
        }

        public override int GetHashCode()
        {
            return base.GetHashCode();
        }

        public override string ToString()
        {
            return base.ToString();
        }
         public Facility(){}
    }
} */