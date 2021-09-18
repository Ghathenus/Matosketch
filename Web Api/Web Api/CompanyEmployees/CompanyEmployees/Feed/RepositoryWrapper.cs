using CompanyEmployees.Dbthings;
using Contracts;
using Entities;



namespace CompanyEmployees.Feed
{
    public class RepositoryWrapper : IRepositoryWrapper
    {
        private RepositoryContext _repoContext;
        private IPostRepository _post;
        private IPhotoRepository _photo;
        private IUserRepository _user;
       /*  private IMrcRepository _mrc; */

          private IVideoRepository _video;
       /*  private IFacilityRepository _facility;
        private ITranslatorRepository _translator;

        private INoteTakerRepository _notetaker; */
       

        public IPostRepository Post {
            get {
                if(_post == null)
                {
                    _post = new PostRepository(_repoContext);
                }
                return _post;
            }
        }

         public IUserRepository User {
            get {
                if(_user == null)
                {
                    _user = new UserRepository(_repoContext);
                }
                return _user;
            }
        }

         public IPhotoRepository Photo {
            get {
                if(_photo == null)
                {
                    _photo = new PhotoRepository(_repoContext);
                }
                return _photo;
            }
        }

          public IVideoRepository Video {
            get {
                if(_video == null)
                {
                    _video = new VideoRepository(_repoContext);
                }
                return _video;
            }
        }

 /* public IMrcRepository Mrc {
            get {
                if(_mrc == null)
                {
                    _mrc = new MrcRepository(_repoContext);
                }
                return _mrc;
            }
        }


         public IFacilityRepository Facility {
            get {
                if(_facility == null)
                {
                    _facility = new FacilityRepository(_repoContext);
                }
                return _facility;
            }
        }




         public ITranslatorRepository Translator {
            get {
                if(_translator == null)
                {
                    _translator = new TranslatorRepository(_repoContext);
                }
                return _translator;
            }
        }


         public INoteTakerRepository NoteTaker {
            get {
                if(_notetaker == null)
                {
                    _notetaker = new NoteTakerRepository(_repoContext);
                }
                return _notetaker;
            }
        } */
        
        public RepositoryWrapper(RepositoryContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }

        public void Save()
        {
            _repoContext.SaveChanges();
        }
    }
}