using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using Sandbox.API.Models;

namespace Sandbox.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostsController : ControllerBase
    {
        private static readonly Post[] Posts = new[]
        {
            new Post { Id = 1, Title = "Title 1", Description = "Description 1 from server"},
            new Post { Id = 2, Title = "Title 2", Description = "Description 2 from server"},
            new Post { Id = 3, Title = "Title 3", Description = "Description 3 from server"}
        };

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return Posts;
        }
    }
}
