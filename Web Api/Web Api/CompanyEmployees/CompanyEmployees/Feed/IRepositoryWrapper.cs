using CompanyEmployees.Dbthings;

namespace CompanyEmployees.Feed
{
    public interface IRepositoryWrapper
    {
        IPostRepository Post { get; }
    IUserRepository User { get; }
        /* IFacilityRepository Facility { get; } */
        IPhotoRepository Photo { get; }
       /*  IMrcRepository Mrc { get; }
        ITranslatorRepository Translator { get; }
        INoteTakerRepository NoteTaker { get; } */

        IVideoRepository Video {get;}
        
        void Save();
    }
}