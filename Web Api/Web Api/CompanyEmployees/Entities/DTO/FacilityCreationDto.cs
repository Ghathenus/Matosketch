/* using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Entities.Models;

namespace Entities.DTO
{
    public class FacilityCreationDto
    {

         
        public Guid Id { get;  }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Website { get; set; }

        public string Description { get; set; }

        public string FofSpecialties { get; set; }

        public string Personnel { get; set; }

        
        public string Email { get; set; }

         public ICollection<Photo> Photos {get; set;}

    }
}
 */