using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Entities.Models
{
    public class MessageParams  
    {
        public string Username {get; set;}

        public string Container {get; set;} = "Unread";


        private const int MaxPageSize = 50  ;

        public int PageNumber {get; set;} = 1;
        private int _pageSize = 10;

        public int PageSize 
        {
            get => _pageSize;
            set => _pageSize = (value > MaxPageSize)? MaxPageSize : value;
        }

    }
}