using System.Linq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class PaginationHeader
    {
        public PaginationHeader(int currentPage , int itemsPerPage , int totalItems ,int totalPages)
        {
            CurrentPage = currentPage;
            ItemsPerPage = itemsPerPage;
            TotalItems = totalItems;
            TotalPages = totalPages;
            
        }

        public int CurrentPage {get; set;}
        public int ItemsPerPage {get; set;}
        public int TotalItems {get; set;}
        public int TotalPages {get; set;}


        

    }
    
}