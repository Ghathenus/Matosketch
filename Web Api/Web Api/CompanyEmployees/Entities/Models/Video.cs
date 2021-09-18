using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    [Table("Videos")]
    public class Video
    {
        public int Id {get; set;}
        public string Url {get; set;}
        public string PublicId {get; set;}

        /* public bool IsMain {get; set;} */

        public User User {get; set;}


        public string UserId {get; set;} 
    }
}