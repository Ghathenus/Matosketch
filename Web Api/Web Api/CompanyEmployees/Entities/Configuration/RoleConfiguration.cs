using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Entities.Configuration
{
    public class RoleConfiguration : IEntityTypeConfiguration<IdentityRole>
{
    public void Configure(EntityTypeBuilder<IdentityRole> builder)
    {
        builder.HasData(
        new IdentityRole
        {
            Name = "Visitor",
            NormalizedName = "VISITOR"
        },
        new IdentityRole
        {
            Name = "Facility",
            NormalizedName = "FACILITY"
        },
        new IdentityRole
        {
            Name = "Mrc",
            NormalizedName = "MRC"
        },
        new IdentityRole
        {
            Name = "Personnel",
            NormalizedName = "PERSONNEL"
        }
        
        );
    }
}
}