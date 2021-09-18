using System.Collections.Generic;
using Contracts;
using Entities.Models;
namespace CompanyEmployees.Dbthings
{
    public interface IVideoRepository : IRepositoryBase<Video>
{

    
    Video GetVideoById(string userid);
    IEnumerable<Video> GetVideos();
}
}