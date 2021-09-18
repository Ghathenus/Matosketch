/* using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Entities.Models;

namespace Entities.DTO
{
    public class FacilityForRegistrationDto
    {

        public string Name { get; set; }
        public string UName { get; set; }

        public string Address { get; set; }

        public string Website { get; set; }

        public string Description { get; set; }

        public string FofSpecialties { get; set; }

        public string Personnel { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        public string Email { get; set; }

        
         public ICollection<PhotoDto> Photos {get; set;}

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

    }
}
 */