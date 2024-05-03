using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
    //     private readonly DataContext _context;

    // // inject DB to access data
    // public BaseApiController(DataContext context)
    // {
    //     _context = context;
    // }

    }
}