using AutoMapper;
using Entities.DataTransferObjects;
using Entities.DTO;
using Entities.Models;

namespace CompanyEmployees
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
           
                
            CreateMap<PostForCreationDto, Post>();

            CreateMap<UserForRegistrationDto, User>()
                .ForMember(u => u.UserName, opt => opt.MapFrom(x => x.Email));

             CreateMap<PhotoDto, Photo>();

          
                CreateMap<UserUpdateDto, User>();

            

            CreateMap<Message, MessageDto>()
                 .ForMember(dest => dest.SenderUsername, opt => opt.MapFrom(src => src.SenderUsername))
                .ForMember(dest => dest.RecipientrUsername, opt => opt.MapFrom(src => src.RecipientrUsername)); 

        }
    }
}
