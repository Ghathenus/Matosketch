using System;
using System.ComponentModel.DataAnnotations;

public class PostForCreationDto
{
    
    public Guid Id { get;  }
    public string title { get; set; }
    public string description { get; set; }
    public string content { get; set; }  
    public string category { get; set; }
    public string slug { get; set; }
   
    public string author { get; set; }

}