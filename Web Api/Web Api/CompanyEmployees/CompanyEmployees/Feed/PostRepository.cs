using System.Collections.Generic;
using System.Linq;
using Entities;
using Entities.Models;
using Repository;


namespace CompanyEmployees.Feed
{
    public class PostRepository : RepositoryBase< Post>, IPostRepository
    {

        public PostRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }
        public IEnumerable<Post> GetPosts()
        {
            return FindAllPosts()
                .OrderByDescending(p => p.PublishedOn)
                .ToList();
        }

        public void CreatePost(Post post)
{
    Create(post);
}
    }
}