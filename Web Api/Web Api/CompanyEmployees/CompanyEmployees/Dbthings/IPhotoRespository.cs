using System.Collections.Generic;
using Contracts;
using Entities.Models;
namespace CompanyEmployees.Dbthings
{
    public interface IPhotoRepository : IRepositoryBase<Photo>
{

    IEnumerable<Photo> GetPhotos();
      
Photo GetPhotoByUserId(int id);

IEnumerable<Photo> GetPhotosbyuserid(string userid);
}
}