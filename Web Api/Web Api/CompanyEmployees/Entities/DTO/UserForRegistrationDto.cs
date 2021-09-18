using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.DTO
{
    public class UserForRegistrationDto
    {

        public string UName { get; set; }

       
        public string FirstName { get; set; }

        public string LastName { get; set; }
 
        public string Address { get; set; } 
        
        public string Age { get; set; }

        public string Description { get; set; }
    
        [Required(ErrorMessage = "Email is required.")] 
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")] 
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")] 
        public string ConfirmPassword { get; set; }

    }
}
