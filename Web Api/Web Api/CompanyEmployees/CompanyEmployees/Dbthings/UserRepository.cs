using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CompanyEmployees.Dbthings;
using Entities;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Repository;


namespace CompanyEmployees.Dbthings
{
    public class UserRepository: RepositoryBase< User>,IUserRepository
    {
        private readonly RepositoryContext _context;

        public UserRepository(RepositoryContext repositoryContext)
          :base(repositoryContext)
        {
             _context = repositoryContext;
        }
       public async Task<User> GetUserByEmailAsync(string email)
       {
           return await _context.Users.Include(p => p.Photos)
           .SingleOrDefaultAsync(x => x.Email == email);
       }

        public async Task<User> GetUserByNameAsync(string name)
       {
           return await _context.Users.Include(p => p.Photos)
           .SingleOrDefaultAsync(x => x.UName == name);
       }
       public async Task<User> GetUserByUserNameAsync(string uName)
       {
           return await _context.Users.Include(p => p.Photos)
           .SingleOrDefaultAsync(x => x.UName == uName);
       }
         public User GetUserByEmail(string email)
       {
            return FindByName(user => user.Email.Equals(email))
            .FirstOrDefault();
       }

       public User GetUserByName(string name)
       {
            return FindByName(user => user.UName.Equals(name))
            .FirstOrDefault();
       }
       public User GetUserByFirstName(string fname)
       {
            return FindByName(user => user.FirstName.Equals(fname))
            .FirstOrDefault();
       }
       public User GetUserByUserName(string uName)
       {
            return FindByName(user => user.UName.Equals(uName))
            .FirstOrDefault();
       }
       public void Updateuser(User user)
       {
           _context.Entry(user).State = EntityState.Modified;
       }
       public void AddPhoto (User user, Photo photo)
       {
           user.Photos.Add(photo);
       }
        public void AddVideo (User user, Video video)
       {
           user.Video = video;
       }
        public IEnumerable<User> GetUsers()
        {
            return FindAllPosts()
                
                .ToList();
        }
    }
}