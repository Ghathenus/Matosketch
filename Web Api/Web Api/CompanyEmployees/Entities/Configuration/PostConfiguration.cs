using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace Entities.Configuration
{
    public class PostConfiguration : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.HasData
            (
                new Post
                (

                    "Ghassen's Life",
                    "Lonely and trash",
                    "Soooooooooooooooooooooo Trash",
                    "Life",
                    
                    "Me :("

                )

            );
        }
    }
}
