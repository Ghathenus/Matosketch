using System.Collections.Generic;
using System.Linq;
using Entities;
using Entities.Models;
using Repository;


namespace CompanyEmployees.Dbthings
{
    public class PhotoRepository : RepositoryBase< Photo>, IPhotoRepository
    {

        public PhotoRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }
        public IEnumerable<Photo> GetPhotos()
        {
            
            return FindAllPosts()
               
                .ToList();
        }

      
         public Photo GetPhotoByUserId(int id)
    {
        return FindByName(photo => photo.Id.Equals(id))
            .FirstOrDefault();
    }

    public IEnumerable<Photo> GetPhotosbyuserid(string userid)
        {
           var photos = FindAllPosts().ToList();
           List<Photo> userphotos = new List<Photo>();
            
           for(int i=0;i<photos.Count;i++)
            
            {
                if (photos[i].UserId == userid){

                    userphotos.Add(photos[i]);
                    
                }
                
               
            }
             
            return userphotos;
            
        }
        
    }
}