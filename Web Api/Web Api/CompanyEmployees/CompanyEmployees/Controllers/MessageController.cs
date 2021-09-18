


using AutoMapper;
using CompanyEmployees.Dbthings;
using Entities.DTO;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CompanyEmployees.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : Controller

    {
        private readonly IUserRepository _userRepository;
        private readonly IMessageRepository _messageRepository;
        private readonly IMapper _mapper;
        public MessagesController(IUserRepository userRepository, IMessageRepository messageRepository, IMapper mapper)
        {
            _messageRepository = messageRepository;
            _userRepository = userRepository;
            _mapper = mapper;
        }
        [HttpPost("{email}/CreateMessage")]

        public async Task<ActionResult<MessageDto>> CreateMessage(CreateMessageDto createMessageDto, string email)
        {
            var user = await _userRepository.GetUserByEmailAsync(email);
            var username = user.UName;

            if (username == createMessageDto.RecipientrUsername.ToLower())
                return BadRequest("You Cannot message yourself!");
            var sender = await _userRepository.GetUserByNameAsync(username);
            var recipient = await _userRepository.GetUserByNameAsync(createMessageDto.RecipientrUsername);
            if (recipient == null) return NotFound();
            var message = new Message
            {
                Sender = sender,
                Recipient = recipient,
                SenderUsername = sender.UserName,
                RecipientrUsername = recipient.UserName,
                Content = createMessageDto.Content
            };
            _messageRepository.AddMessage(message);

            if (await _messageRepository.SaveAllAsync()) return Ok(_mapper.Map<MessageDto>(message));
            return BadRequest("Failed to send message");
        }



        /* [HttpGet("{email}")]
        public async Task<ActionResult<IEnumerable<MessageDto>>> GetMessagesForUser([FromQuery] MessageParams messageParams , string email)
        {
            var user = await _userRepository.GetUserByEmailAsync(email);
            messageParams.Username= user.UserName;
            var messages = await _messageRepository.GetMessagesForUser(messageParams);
            Response.AddPaginationHeader(messages.CurrentPage, messages.PageSize, messages.TotalCount, messages.TotalPages);
            return messages;
        } */
    }
}

    