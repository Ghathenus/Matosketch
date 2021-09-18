using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities;
using Entities.DTO;
using Entities.Models;
using Repository;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace CompanyEmployees.Dbthings
{   


    public class MessageRepository : RepositoryBase<Message>, IMessageRepository
    {
        private IMapper _mapper;
        RepositoryContext _context;

        public MessageRepository(RepositoryContext repositoryContext , IMapper mapper)
            : base(repositoryContext)
        {
            _context = repositoryContext;
            _mapper = mapper;
        }

        public void AddMessage(Message message)
        {
            _context.Messages.Add(message);
        }

        public void DeleteMessage(Message message)
        {
            _context.Messages.Remove(message);
        }

        public async Task<Message> GetMessage(int id)
        {
            return await _context.Messages.FindAsync(id);
        }

        public  IEnumerable<Message> GetInBoxMessagesForUser (string username)
        {
           
                
            var messages = FindAllPosts().OrderByDescending(m =>m.MessageSent).ToList();
           List<Message> userinbox = new List<Message>();
            
           for(int i=0;i<messages.Count;i++)
            
            {
                if (messages[i].RecipientrUsername == username){

                    userinbox.Add(messages[i]);
        }
            }
            return userinbox;
        }
        public  IEnumerable<Message> GetOutBoxMessagesForUser (string username)
        {
           
                
                var messages = FindAllPosts().OrderByDescending(m =>m.MessageSent).ToList();
           List<Message> useroutbox = new List<Message>();
            
           for(int i=0;i<messages.Count;i++)
            
            {
                if (messages[i].SenderUsername == username){

                    useroutbox.Add(messages[i]);
        }

            }
            return useroutbox;
        }
        public IEnumerable<MessageDto> GetMessageThread(string currentUserName, string recipientUserName)
        {
            var messages  = _context.Messages.Include(u => u.Sender).Include(u => u.Recipient).Where(m =>m.Recipient.UName == currentUserName && m.Sender.UName == recipientUserName || m.Recipient.UName == recipientUserName && m.Sender.UName == currentUserName).OrderBy(messages => messages.MessageSent).ToList();

            
            var unreadMessages = messages.Where(m => m.DateRead== null && m.Recipient.UName == currentUserName ).ToList();

            if (unreadMessages.Any())
            {
                foreach (var message in unreadMessages)
                 {
                     message.DateRead = DateTime.Now;
                 }
                 _context.SaveChanges();
            }
            return _mapper.Map<IEnumerable<MessageDto>>(messages);

        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}