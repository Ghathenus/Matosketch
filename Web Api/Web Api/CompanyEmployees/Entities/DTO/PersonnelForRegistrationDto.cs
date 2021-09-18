/* using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Entities.DTO
{
    public class PersonnelForRegistrationDto
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Age { get; set; }

         public string UName { get; set; }


        public string Profession { get; set; }

        public string Picture { get; set; }

        public string Resume { get; set; }

        [Required(ErrorMessage = "Email is required.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }

        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }

    }
}
 */