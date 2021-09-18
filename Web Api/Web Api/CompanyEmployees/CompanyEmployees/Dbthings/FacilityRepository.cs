/* using System.Collections.Generic;
using System.Linq;
using Entities;
using Entities.Models;
using Repository;


namespace CompanyEmployees.Dbthings
{
    public class FacilityRepository : RepositoryBase< Facility>, IFacilityRepository
    {

        public FacilityRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }
        public IEnumerable<Facility> GetFacilities()
        {
            return FindAllPosts()
                .OrderByDescending(p => p.Name)
                .ToList();
        }

        public void CreateFacility(Facility facility)
{
    Create(facility);
}

         public Facility GetFacilityByName(string name)
    {
        return FindByName(facility => facility.Name.Equals(name))
            .FirstOrDefault();
    }
    }
} */