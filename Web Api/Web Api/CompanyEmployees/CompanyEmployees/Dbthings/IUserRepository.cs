using System.Collections.Generic;
using System.Threading.Tasks;
using Contracts;
using Entities.Models;
namespace CompanyEmployees.Dbthings
{
    public interface IUserRepository : IRepositoryBase<User>
{
    Task<User> GetUserByEmailAsync(string email);

    Task<User> GetUserByNameAsync(string name);
    User GetUserByEmail(string email);
  User GetUserByUserName(string uName);
 Task< User> GetUserByUserNameAsync(string uName);
  
    void Updateuser(User user);
    void AddPhoto (User user, Photo photo);
    IEnumerable<User> GetUsers();
    User GetUserByName(string name);
    void AddVideo (User user, Video video);
    User GetUserByFirstName(string fname);
}
}