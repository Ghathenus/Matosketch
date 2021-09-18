using AutoMapper;
using CompanyEmployees.Feed;
using Contracts;
using Entities;
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
    public class FeedController : Controller
    {
        private readonly IFeedService _feed;
        private ILoggerManager _logger;
        private IRepositoryWrapper _repository;
        private IMapper _mapper;

        private RepositoryContext _context { get; }

       /*  public IActionResult Index()
        {
            return View();
        } */

        public FeedController(IFeedService feed, RepositoryContext context, IRepositoryWrapper repository , IMapper mapper, ILoggerManager logger)
        {
            _feed = feed;
             _context = context;
             _repository = repository ;
             _mapper = mapper;
             _logger = logger;
        }


        [HttpGet, Route("allposts")]
        public IActionResult GetPosts()
        {
            try
            {
                var posts = _repository.Post.GetPosts();
                _logger.LogInfo($"Returned all posts from database.");
                return Ok(posts);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Something went wrong inside GetPosts action: {ex.Message}");
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet, Route("rss")]
        public async Task<IActionResult> Rss()
        {
            string host = Request.Scheme + "://" + Request.Host;
            string contentType = "application/xml";

            var content = await _feed.GetFeedDocument(host);
            return Content(content, contentType);
        }
/* 
        [HttpPost, Route("post")]
        public IActionResult Index(Post post)
        {
            this._context.Posts.Add(post);
            this._context.SaveChanges();

            //Fetch the CustomerId returned via SCOPE IDENTITY.


            return View(post);
        } */
[HttpPost, Route("post")]

        public IActionResult CreatePost([FromBody] PostForCreationDto postforcreation)
        {
            if (postforcreation == null || !ModelState.IsValid)
                return BadRequest();

            var post = _mapper.Map<Post>(postforcreation);
           this. _context.Posts.Add(post);
            this._context.SaveChanges();

             _logger.LogInfo($"Post created.");
                return Ok(post);
           
           
        }

    }
}

