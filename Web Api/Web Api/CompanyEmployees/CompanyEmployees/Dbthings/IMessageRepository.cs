using System.Collections.Generic;
using Contracts;
using Entities.Models;

using System.Threading.Tasks;
using Entities.DTO;

namespace CompanyEmployees.Dbthings
{
    public interface IMessageRepository 
{
    void AddMessage(Message message);
    void DeleteMessage(Message message);
    Task<Message> GetMessage(int id);
    IEnumerable<Message> GetInBoxMessagesForUser (string username);

    IEnumerable<Message> GetOutBoxMessagesForUser (string username);
    IEnumerable<MessageDto> GetMessageThread(string currentUserName, string recipientUserName);
    Task<bool> SaveAllAsync();
}
}