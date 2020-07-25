using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    public class AuthController : ControllerBase
    {
        // ctor
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            this._repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(string username, string password){
            // validate request
            username = username.ToLower();
            
            if(await _repo.UserExists(username)) return BadRequest("name taken :(");

            var userToCreate = new User{
                Username = username
            };

            var createdUser = await _repo.Register(userToCreate, password);

            // todo: change to CreatedAtRoute();
            return StatusCode(201);
        }
    }
}