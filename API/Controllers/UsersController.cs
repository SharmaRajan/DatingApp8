using API.Data;
using API.DTOs;
using API.Entities;
using API.Repository;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

// [ApiController]
// [Route("api/[controller]")] // To access this controller we type: localhost:portNo/api/users
[Authorize]
public class UsersController : BaseApiController
{
    private readonly IUserRepository _userRepo;
    private readonly IMapper _mapper;

    // inject DB to access data
    public UsersController(IUserRepository userRepository, IMapper mapper) //: base(context)
    {
        _mapper = mapper;
        _userRepo = userRepository;
    }

    // [HttpGet]
    // public ActionResult<IEnumerable<AppUser>> GetUsers(){
    //     var users = _context.Users.ToList();

    //     return users;
    // }

    // making it asynchronous 
    [HttpGet]
    [AllowAnonymous] // allow anonymously for this particular request
    public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
    {
        // 1st way
        // var users = await _context.Users.ToListAsync();
        //return users;

        // 2nd way
        // var users = await _userRepo.GetUsersAsync();

        // var usersToReturn = _mapper.Map<IEnumerable<MemberDto>>(users);

        // return Ok(usersToReturn);

        // 3rd way
        var users = await _userRepo.GetMembersAsync();

        return Ok(users);
    }

    [HttpGet("{username}")] // /api/users/3
    public async Task<ActionResult<MemberDto>> GetUser(string username)
    {
        // for synchronous
        // var users = _context.Users.Find(id);

        // return users;

        // for asynchronous
        //return await _context.Users.FindAsync(id);

        // 2nd way of doing this
        //var users = await _userRepo.GetUserByUsernameAsync(username);

        //var userToReturn = _mapper.Map<MemberDto>(users);

        //return Ok(userToReturn);

        // 3rd way of doing this
        return await _userRepo.GetMemberAsync(username);
    }

}
