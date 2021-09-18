using Entities.Configuration;
using Entities.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Entities
{
    public class RepositoryContext : IdentityDbContext<User>
    {
        public RepositoryContext(DbContextOptions options)
        : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Message>().HasOne(u => u.Recipient).WithMany(m =>m.MessagesReceived).OnDelete(DeleteBehavior.Restrict);
          /*   modelBuilder.ApplyConfiguration(new CompanyConfiguration());
            modelBuilder.ApplyConfiguration(new EmployeeConfiguration()); */
            modelBuilder.ApplyConfiguration(new PostConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());

        }
       /*  public DbSet<Company> Companies { get; set; }
        public DbSet<Employee> Employees { get; set; }
 */

public DbSet<Post> Posts { get; set; }

/* public DbSet<Facility> Facilities { get; set; } */
        
/* public DbSet<Translator> Translators { get; set; } */

/* public DbSet<NoteTaker> NoteTakers { get; set; }
        public DbSet<Mrc> Mrcs { get; set; } */
        public DbSet<Message> Messages { get; set; }
       

   

    }
}
