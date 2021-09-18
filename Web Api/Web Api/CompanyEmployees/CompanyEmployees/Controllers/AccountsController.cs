using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using CompanyEmployees.Dbthings;
using CompanyEmployees.Feed;
using Contracts;
using Entities;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CompanyEmployees.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly IUserRepository _userRepository;
        private IRepositoryWrapper _repository;
        private readonly IMapper _mapper;
        private readonly JwtHandler _jwtHandler;
         private ILoggerManager _logger;
         private readonly IPhotoService _photoService;

         

        private RepositoryContext _context { get; }

        public AccountsController(IPhotoService photoService , IRepositoryWrapper repository , RepositoryContext context,UserManager<User> userManager, IMapper mapper, JwtHandler jwtHandler, ILoggerManager logger, IUserRepository userRepository)
        {
            _userManager = userManager;
           _repository = repository;
           _photoService = photoService;
            _mapper = mapper;
            _jwtHandler = jwtHandler;
            _logger = logger;
            _userRepository = userRepository;
            
        }

        [HttpPost("Registration")]
        public async Task<IActionResult> RegisterUser([FromBody] UserForRegistrationDto userForRegistration)
        {
            if (userForRegistration == null || !ModelState.IsValid)
                return BadRequest();

            var user = _mapper.Map<User>(userForRegistration);

            var result = await _userManager.CreateAsync(user, userForRegistration.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseDto { Errors = errors });
            }

            return StatusCode(201);
        }
         [HttpPost("UserRegistration")]
        public async Task<IActionResult> RegisterFacility([FromBody] UserForRegistrationDto userForRegistration)
        {
            if (userForRegistration == null || !ModelState.IsValid)
                return BadRequest();

            var user = _mapper.Map<User>(userForRegistration);

            
            var result = await _userManager.CreateAsync(user, userForRegistration.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseDto { Errors = errors });
            }

            return 
            StatusCode(201);
            
        }

/*
        [HttpPost("MrcRegistration")]
        public async Task<IActionResult> RegisterMrc([FromBody] MrcForRegistrationDto mrcForRegistration)
        {
            if (mrcForRegistration == null || !ModelState.IsValid)
                return BadRequest();

            var mrc = _mapper.Map<User>(mrcForRegistration);

            var result = await _userManager.CreateAsync(mrc, mrcForRegistration.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseDto { Errors = errors });
            }

            return StatusCode(201);
        }


        [HttpPost("PersonnelRegistration")]
        public async Task<IActionResult> RegisterPersonnel([FromBody] PersonnelForRegistrationDto personnelForRegistration)
        {
            if (personnelForRegistration == null || !ModelState.IsValid)
                return BadRequest();

            var personnel = _mapper.Map<User>(personnelForRegistration);

            var result = await _userManager.CreateAsync(personnel, personnelForRegistration.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponseDto { Errors = errors });
            }

            return StatusCode(201);
        } */
       
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] UserForAuthenticationDto userForAuthentication)
        {
            var user = await _userManager.FindByNameAsync(userForAuthentication.Email);

            if (user == null || !await _userManager.CheckPasswordAsync(user, userForAuthentication.Password))
                return Unauthorized(new AuthResponseDto { ErrorMessage = "Invalid Authentication" });
            var signingCredentials = _jwtHandler.GetSigningCredentials();
            var claims = _jwtHandler.GetClaims(user);
            var tokenOptions = _jwtHandler.GenerateTokenOptions(signingCredentials, claims);
            var token = new JwtSecurityTokenHandler().WriteToken(tokenOptions);
            return Ok(new AuthResponseDto { IsAuthSuccessful = true, Token = token });
        }

        /* [HttpGet, Route("cur")]
        public IActionResult GetUser ()
        {
              try
    {
        var user   = _userManager.GetUserName(HttpContext.User);

        if (user == null)
        {
            _logger.LogError($"User with id: {user}, hasn't been found in our db.");
            return NotFound();
        }
        else
        {
           _logger.LogInfo($"Returned user with id: {user}");

          
           return Ok(User); 
        }
   }
   catch (Exception ex)
   {
        _logger.LogError($"Something went wrong inside GetFacilityByName action: {ex.Message}");
        return StatusCode(500, "Internal server error");
   }} */

   /* [HttpGet, Route("cur")]
public IActionResult GetUser()
    {
        
        var userName =  _userManager.GetUserName(HttpContext.User);
        
        return Ok(userName);
    } */
     /* [HttpGet("{email}")]   
     public async Task<ActionResult<User>> GetUser(string email)
     {
           
         return    await _userRepository.GetUserByEmailAsync(email);
             
     } */
     
/* [HttpPut]
    public async Task<ActionResult> UpdateUser(UserUpdateDto userUpdateDto)
    {
    var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
    var user = await _userRepository.GetUserByNameAsync(username);
    _mapper.Map(userUpdateDto, user);
    _userRepository.Update(user);
    return Ok(user);

   


    } */

     [HttpPut("{email}")]
    public  ActionResult UserUpdate(UserUpdateDto userUpdateDto, string email)
    {
    
    var user =  _repository.User.GetUserByEmail(email);
    _mapper.Map(userUpdateDto, user);
    _userRepository.Update(user);
    _repository.Save(); 
    return Ok(user);

   


    } 

    [HttpGet("{email}")]
public IActionResult GetUserByEmail(string email)
{
    
        var user = _repository.User.GetUserByEmail(email);

        if (user == null)
        {
            _logger.LogError($"user with email: {email}, hasn't been found in our db.");
            return NotFound();
        }
        else
        {
           _logger.LogInfo($"Returned user with email: {email}");

          
           return Ok(user); 
        }
}
[HttpPost("{email}/add-photo")]
public async Task<ActionResult<PhotoDto>> AddPhoto(IFormFile file, string email)
{
var user = await _repository.User.GetUserByEmailAsync(email);
var result = await _photoService.AddPhotoAsync(file);
if (result.Error !=null) return BadRequest (result.Error.Message);
var photo = new Photo 
{
   
    Url = result.SecureUrl.AbsoluteUri,
    PublicId = result.PublicId,
    
   
};
photo.UserId = user.Id;
_repository.User.AddPhoto(user, photo);
_repository.Save();
 return StatusCode(200, "success") ;
}

[HttpPost("{email}/add-video")]
public async Task<ActionResult<VideoDto>> AddVideo(IFormFile file, string email)
{
var user = await _repository.User.GetUserByEmailAsync(email);
var result = await _photoService.AddVideoAsync(file);
if (result.Error !=null) return BadRequest (result.Error.Message);
var video = new Video 
{
   
    Url = result.SecureUrl.AbsoluteUri,
    PublicId = result.PublicId,
    
   
};
video.UserId = user.Id;
_repository.User.AddVideo(user, video);
_repository.Save();
 return StatusCode(200, "success") ;
}


[HttpGet("user/{name}")]
public IActionResult GetUserByName(string name)
{
    
        var user = _repository.User.GetUserByName(name);

        if (user == null)
        {
            _logger.LogError($"user with email: {name}, hasn't been found in our db.");
            return NotFound();
        }
        else
        {
           _logger.LogInfo($"Returned user with email: {name}");

          
           return Ok(user); 
        }
}

[HttpGet("puser/{uName}")]
public IActionResult GetUserByFirstName(string uName)
{
    
        var user = _repository.User.GetUserByUserName(uName);

        if (user == null)
        {
            _logger.LogError($"user with username: {uName}, hasn't been found in our db.");
            return NotFound();
        }
        else
        {
           _logger.LogInfo($"Returned user with username: {uName}");

          
           return Ok(user); 
        }
}

[HttpGet, Route("allUsers")]
        public IActionResult GetUsers()
        {
            try
            {
                var users = _repository.User.GetUsers();
                _logger.LogInfo($"Returned all users from database.");
                return Ok(users);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetUsers action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }


    }
    

/* [HttpPut("{email}")]
public async Task<ActionResult> Update (string email, [FromBody]UserUpdateDto user)
{
   

        var userEntity =await _userRepository.GetUserByEmailAsync(email);
        

        _mapper.Map(user, userEntity);

        _userRepository.UpdateUser(userEntity);
        _repository.Save();
        return Ok(user);
   
}
    } */

       
}

