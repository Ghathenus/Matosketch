using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.DTO
{
    public class MessageDto
    {
        public int Id {get; set;}
        public string SenderId { get; set;}
        public string SenderUsername {get; set;}
        
        public string RecipientId { get; set;}
        public string RecipientrUsername {get; set;}
       
        public string Content {get; set;}
        public DateTime? DateRead {get; set;}
        public DateTime MessageSent {get; set;} 
        

    }
}