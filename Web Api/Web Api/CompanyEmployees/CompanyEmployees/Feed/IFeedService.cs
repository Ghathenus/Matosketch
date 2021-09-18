using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompanyEmployees.Feed
{
    public interface IFeedService
        {
            Task<string> GetFeedDocument(string host);
        }
}
