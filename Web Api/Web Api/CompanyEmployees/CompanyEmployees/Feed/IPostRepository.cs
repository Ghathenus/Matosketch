using System.Collections.Generic;
using Contracts;
using Entities.Models;
namespace CompanyEmployees.Feed
{
    public interface IPostRepository : IRepositoryBase<Post>
{
    public IEnumerable<Post> GetPosts();

    void CreatePost(Post post);
}
}