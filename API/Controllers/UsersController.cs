using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // go to api/users
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }
        
        // endpoints
        [HttpGet]
        public ActionResult<IEnumerable<AppUser>> GetUsers()
        {
            return _context.Users.ToList();
        }
        [HttpGet("{id}")] // id = user parameter
        public ActionResult<AppUser> GetUser(int id)
        {
            return _context.Users.Find(id);
        }
    }
}