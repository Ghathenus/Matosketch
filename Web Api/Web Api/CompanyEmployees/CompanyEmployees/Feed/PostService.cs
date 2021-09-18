using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CompanyEmployees.Feed
{
    public interface IPostService
    {
        Task<IEnumerable<Post>> GetPosts();

    }

    public class MockPostService : IPostService
    {
      private readonly RepositoryContext _context;
        public MockPostService(RepositoryContext context)
        {
            _context =  context ;

        }
        public Task<IEnumerable<Post>> GetPosts()
        {
            var res = _context.Posts.ToList<Post>();
            return Task.FromResult<IEnumerable<Post>>(res);
        }
    }
}
