using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using Entities.Models;

namespace Entities.DTO
{
    public class CreateMessageDto
    {

        public string RecipientrUsername { get; set; }

        public string Content { get; set; }


    }
}
