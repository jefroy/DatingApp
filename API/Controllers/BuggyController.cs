﻿using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BuggyController : BaseApiController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }

        // for testing 401 errors
        [Authorize] // important for throwing 401 with NO return string
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text! 😯";
        }
        
        // for testing when something is not found
        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var thing = _context.Users.Find(-1);
            if (thing == null)
            {
                return NotFound();
            }
            
            return Ok(thing);
        }
        
        // get an exception for the case of not finding something
        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var thing = _context.Users.Find(-1);
            var thingToReturn = thing.ToString(); // if thing is null (which it will be) we get null ptr exc error
            return thingToReturn;
        }
        
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("this is not a good request! 🙅‍♀️");
        }
    }
}