using System.Threading.Tasks;
using CloudinaryDotNet.Actions;
using Microsoft.AspNetCore.Http;

namespace CompanyEmployees.Dbthings
{
 public interface IPhotoService
 {

     Task<ImageUploadResult> AddPhotoAsync(IFormFile file);

     Task<DeletionResult> DeletePhotoAsync(string publicId);


     Task<VideoUploadResult> AddVideoAsync(IFormFile file);
 }   
}