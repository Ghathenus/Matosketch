/* using System.Collections.Generic;
using System.Linq;
using CompanyEmployees.Dbthings;
using Entities;
using Entities.Models;
using Repository;


namespace CompanyEmployees.Dbthings
{
    public class MrcRepository : RepositoryBase< Mrc>, IMrcRepository
    {

        public MrcRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }
        public IEnumerable<Mrc> GetMrcs()
        {
            return FindAllPosts()
                .OrderByDescending(p => p.Name)
                .ToList();
        }

        public void CreateMrc(Mrc mrc)
{
    Create(mrc);
}

 public Mrc GetMrcByName(string name)
    {
        return FindByName(mrc => mrc.Name.Equals(name))
            .FirstOrDefault();
    }

    }
} */