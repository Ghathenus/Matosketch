/* using System.Collections.Generic;
using System.Linq;
using CompanyEmployees.Dbthings;
using Entities;
using Entities.Models;
using Repository;


namespace CompanyEmployees.Dbthings
{
    public class NoteTakerRepository : RepositoryBase< NoteTaker>, INoteTakerRepository
    {

        public NoteTakerRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }
        public IEnumerable<NoteTaker> GetNoteTakers()
        {
            return FindAllPosts()
                .OrderByDescending(p => p.FirstName)
                .ToList();
        }

        public void CreateNoteTaker(NoteTaker notetaker)
{
    Create(notetaker);
}
    }
} */