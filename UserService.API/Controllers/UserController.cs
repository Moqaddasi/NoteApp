using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Authorize]
[ApiController]
[Route("api/users")]
public class UserController : ControllerBase
{
    [HttpGet]
    public IActionResult GetUsers()
    {
        return Ok(new { Message = "Secure users data" });
    }
}