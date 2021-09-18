using Entities.Models;
using Microsoft.SyndicationFeed;
using Microsoft.SyndicationFeed.Atom;
using Microsoft.SyndicationFeed.Rss;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;

namespace CompanyEmployees.Feed

{
    public class FeedService : IFeedService
    {
        
        private readonly IPostService _postsService;

        public FeedService(IPostService posts)
        {
            _postsService = posts;
        }

        public async Task<string> GetFeedDocument(string host)
        {
            IEnumerable<Post> posts = await _postsService.GetPosts();
            

            // STEP 2: PREPARE THE FEED METADATA
            StringWriter sw = new StringWriter();

            using (XmlWriter xmlWriter = XmlWriter.Create(
                    sw, new XmlWriterSettings()
                    {
                        Async = true,
                        Indent = true
                    }))
            {
                var rss = new RssFeedWriter(xmlWriter);
                await rss.WriteTitle("StreamPixel");
                await rss.WriteDescription("Website Feed!");
                await rss.WriteGenerator("Ghassen");
                await rss.WriteValue("link", host);

                if (posts != null && posts.Count() > 0)
                {
                     AtomEntry ToRssItem(Post post, string host)
                    {
                        var item = new AtomEntry
                        {
                            Title = post.Title,
                            Description = post.Content,
                            Id = $"{host}/posts/{post.Slug}",
                            Published = post.PublishedOn,
                            LastUpdated = post.PublishedOn,
                            ContentType = "html",
                        };

                        if (!string.IsNullOrEmpty(post.Category))
                        {
                            item.AddCategory(
                                new SyndicationCategory(post.Category));
                        }

                        item.AddContributor(
                            new SyndicationPerson(post.Author, post.AuthorEmail));

                        item.AddLink(
                            new SyndicationLink(new Uri(item.Id)));

                        return item;
                    }
                    var feedItems = new List<AtomEntry>();
                    foreach (var post in posts)
                    {
                        var item = ToRssItem(post, host);
                        feedItems.Add(item);
                    }

                    foreach (var feedItem in feedItems)
                    {
                        await rss.Write(feedItem);
                    }
                }
            }

            // STEP 4: EXTRACT THE XML DOCUMENT
            return sw.ToString();
        }
    }
}
