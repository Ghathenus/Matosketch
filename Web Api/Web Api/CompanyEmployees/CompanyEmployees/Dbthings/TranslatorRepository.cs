/* using System.Collections.Generic;
using System.Linq;
using CompanyEmployees.Dbthings;
using Entities;
using Entities.Models;
using Repository;


namespace CompanyEmployees.Dbthings
{
    public class TranslatorRepository : RepositoryBase< Translator>, ITranslatorRepository
    {

        public TranslatorRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }
        public IEnumerable<Translator> GetTranslators()
        {
            return FindAllPosts()
                .OrderByDescending(p => p.FirstName)
                .ToList();
        }

        public void CreateTranslator(Translator translator)
{
    Create(translator);
}
    }
} */