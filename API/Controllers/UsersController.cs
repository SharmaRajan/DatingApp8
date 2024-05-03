using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

// [ApiController]
// [Route("api/[controller]")] // To access this controller we type: localhost:portNo/api/users
[Authorize]
public class UsersController : BaseApiController
{
    private readonly DataContext _context;

    // inject DB to access data
    public UsersController(DataContext context) //: base(context)
    {
        _context = context;
    }

    // [HttpGet]
    // public ActionResult<IEnumerable<AppUser>> GetUsers(){
    //     var users = _context.Users.ToList();

    //     return users;
    // }

    // making it asynchronous 
    [HttpGet]
    [AllowAnonymous] // allow anonymously for this particular request
    public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
        var users = await _context.Users.ToListAsync();

        return users;
    }

    [HttpGet("{id}")] // /api/users/3
    public async Task<ActionResult<AppUser>> GetUser(int id){
        // for synchronous
        // var users = _context.Users.Find(id);

        // return users;

        // for asynchronous
        return await _context.Users.FindAsync(id);
    }

}
