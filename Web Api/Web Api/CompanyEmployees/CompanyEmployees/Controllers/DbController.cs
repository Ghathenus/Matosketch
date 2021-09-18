using AutoMapper;
using CompanyEmployees.Dbthings;
using CompanyEmployees.Feed;
using Contracts;
using Entities;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace CompanyEmployees.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DbController : Controller
    {
        
        private ILoggerManager _logger;
        private IRepositoryWrapper _repository;
        private IMapper _mapper;
        private IMessageRepository _messageRepository;


        private RepositoryContext _context { get; }

       /*  public IActionResult Index()
        {
            return View();
        } */
 public DbController(RepositoryContext context, IRepositoryWrapper repository , IMapper mapper, ILoggerManager logger, IMessageRepository messageRepository)
        {
            
             _context = context;
             _repository = repository ;
             _mapper = mapper;
             _logger = logger;
            _messageRepository = messageRepository;
        }

/* 
        [HttpGet, Route("allfacilities")]
        public IActionResult GetFacilities()
        {
            try
            {
                var facilities = _repository.Facility.GetFacilities();
                _logger.LogInfo($"Returned all facilities from database.");
                return Ok(facilities);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Getfacilities action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet, Route("allMrcs")]
        public IActionResult GetMrcs()
        {
            try
            {
                var mrcs = _repository.Mrc.GetMrcs();
                _logger.LogInfo($"Returned all Mrcs from database.");
                return Ok(mrcs);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Getmrcs action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }


        [HttpGet, Route("alltranslators")]
        public IActionResult GetTranslators()
        {
            try
            {
                var translators = _repository.Translator.GetTranslators();
                _logger.LogInfo($"Returned all translators from database.");
                return Ok(translators);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Gettranslators action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }


    [HttpGet, Route("allnotetakers")]
        public IActionResult GetNoteTakers()
        {
            try
            {
                var notetakers = _repository.NoteTaker.GetNoteTakers();
                _logger.LogInfo($"Returned all notetakers from database.");
                return Ok(notetakers);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside Getnotetakers action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

    [HttpGet("facility/{name}")]
public IActionResult GetFacilityByName(string name)
{
    
        var facility = _repository.Facility.GetFacilityByName(name);

        if (facility == null)
        {
            _logger.LogError($"Facility with name: {name}, hasn't been found in our db.");
            return NotFound();
        }
        else
        {
           _logger.LogInfo($"Returned facility with name: {name}");

          
           return Ok(facility); 
        }
   
  
}

[HttpPost, Route("addfacility")]

        public IActionResult CreateFacility([FromBody] FacilityCreationDto facilitycreation)
        {
            if (facilitycreation == null || !ModelState.IsValid)
                return BadRequest();

            var facility = _mapper.Map<Facility>(facilitycreation);
           this. _context.Facilities.Add(facility);
            this._context.SaveChanges();

             _logger.LogInfo($"Facility created.");
                return Ok(facility);
           
           
        }

[HttpPost, Route("addmrc")]

        public IActionResult CreateMrc([FromBody] MrcCreationDto mrccreation)
        {
            if (mrccreation == null || !ModelState.IsValid)
                return BadRequest();

            var mrc = _mapper.Map<Mrc>(mrccreation);
           this. _context.Mrcs.Add(mrc);
            this._context.SaveChanges();

             _logger.LogInfo($"Mrc created.");
                return Ok(mrc);
           
           
        }

[HttpGet("mrc/{name}")]
public IActionResult GetMrcByName(string name)
{
    
        var mrc = _repository.Mrc.GetMrcByName(name);

        if (mrc == null)
        {
            _logger.LogError($"Mrc with name: {name}, hasn't been found in our db.");
            return NotFound();
        }
        else
        {
           _logger.LogInfo($"Returned mrc with name: {name}");

          
           return Ok(mrc); 
        }
   
  
} */

[HttpGet, Route("allphotos")]
        public IActionResult GetPhotos()
        {
            try
            {
                var photos = _repository.Photo.GetPhotos();
                _logger.LogInfo($"Returned all photos from database.");
                return Ok(photos);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetPhotos action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }





        [HttpGet, Route("allphotos/{userid}")]
        public IActionResult GetPhotosbyUserId(string userid)
        {
            
                var photos = _repository.Photo.GetPhotosbyuserid(userid);
                _logger.LogInfo($"Returned all photos from database.");
                return Ok(photos);
            
            
        }


         [HttpGet, Route("video/{userid}")]
        public IActionResult GetVideobyUserId(string userid)
        {
            
                var vid = _repository.Video.GetVideoById(userid);
                _logger.LogInfo($"Returned video from database.");
                return Ok(vid);
            
            
        }



        [HttpPost("{email}/CreateMessage")]

        public async Task<ActionResult<MessageDto>> CreateMessage(CreateMessageDto createMessageDto, string email)
        {
            var user = await _repository.User.GetUserByEmailAsync(email);
            var username = user.UName;
            var sender = await _repository.User.GetUserByUserNameAsync(username);
            var recipient = await _repository.User.GetUserByUserNameAsync(createMessageDto.RecipientrUsername);
            if (recipient == null) return NotFound();
            var message = new Message
            {
                Sender = sender,
                Recipient = recipient,
                SenderUsername = sender.UName,
                RecipientrUsername = recipient.UName,
                Content = createMessageDto.Content
            };
            _messageRepository.AddMessage(message);

            if (await _messageRepository.SaveAllAsync()) return  StatusCode(200, "Message Sent!") ;
            return BadRequest("Failed to send message");
        }

 [HttpGet("inbox/{email}")]
        public IActionResult GetInboxMessagesForUser(string email)
        {
            var user = _repository.User.GetUserByEmail(email);
            var messages =  _messageRepository.GetInBoxMessagesForUser(user.UName);
            
            return Ok(messages);
        }


        [HttpGet("outbox/{email}")]
        public IActionResult GetOutBoxMessagesForUser(string email)
        {
            var user = _repository.User.GetUserByEmail(email);
            var messages =  _messageRepository.GetOutBoxMessagesForUser(user.UName);
            
            return Ok(messages);
        }


         [HttpGet("thread/{email}/{username}")]
        public  IActionResult GetMessageThread (string username, string email)
        {
            var user = _repository.User.GetUserByEmail(email);
            
           return Ok(_messageRepository.GetMessageThread(user.UName, username));

           
            
           
        }


[HttpGet, Route("videos")]
        public IActionResult GetVideos()
        {
            try
            {
                var videos = _repository.Video.GetVideos();
                _logger.LogInfo($"Returned all videos from database.");
                return Ok(videos);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetPhotos action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }





    }



}

    


