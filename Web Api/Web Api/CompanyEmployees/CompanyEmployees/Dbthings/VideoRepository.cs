using System.Collections.Generic;
using System.Linq;
using Entities;
using Entities.Models;
using Repository;


namespace CompanyEmployees.Dbthings
{
    public class VideoRepository : RepositoryBase< Video>, IVideoRepository
    {

        public VideoRepository(RepositoryContext repositoryContext)
            :base(repositoryContext)
        {
        }
        
public Video GetVideoById(string userid)
        {
            
            var videos = FindAllPosts().ToList();
            Video vid = new Video();
           List<Video> uservideos = new List<Video>();
            
           for(int i=0;i<videos.Count;i++)
            
            {
                if (videos[i].UserId == userid){

                    vid = videos[i];
                    
                }
                
               
            }
             
            return vid;
        }
     public IEnumerable<Video> GetVideos()
        {
            
            return FindAllPosts()
               
                .ToList();
        }
}
}