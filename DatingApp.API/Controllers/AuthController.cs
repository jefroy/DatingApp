using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[controller]")] // attribute controlling
    [ApiController] // automatically validate requests
    // ControllerBase->HTTP responses, actions inside controller, no view support
    // we will use angular for views.
    public class AuthController : ControllerBase
    {
        // ctor
        private readonly IAuthRepository _repo;
        public AuthController(IAuthRepository repo)
        {
            this._repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto){
            // validate request
            userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
            
            if(await _repo.UserExists(userForRegisterDto.Username)) 
                return BadRequest("name taken :(");

            var userToCreate = new User{
                Username = userForRegisterDto.Username
            };

            var createdUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

            // todo: change to CreatedAtRoute();
            return StatusCode(201);
        }
    }
}