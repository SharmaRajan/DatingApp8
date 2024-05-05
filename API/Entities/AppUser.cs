using System.ComponentModel.DataAnnotations;
using API.Extensions;

namespace API.Entities;

public class AppUser
{

    // [Key] Annotation for Id -> Primary Key
    public int Id { get; set; }

    // this is optional
    // if we want it not optional then we use string?
    public string UserName { get; set; }

    public byte[] PasswordHash { get; set; }

    public byte[] PasswordSalt { get; set; }

    public DateOnly DateOfBirth { get; set; }

    public string KnownAs { get; set; }

    public DateTime CreatedOn { get; set; } = DateTime.UtcNow;

    public DateTime LastActive { get; set; } = DateTime.UtcNow;

    public string Gender { get; set; }

    public string Introduction { get; set; }

    public string LookingFor { get; set; }

    public string Interests { get; set; }

    public string City { get; set; }    

    public string Country { get; set; }

    //public List<Photo> Photos { get; set; } = new List<Photo>();

    // alternative
    public List<Photo> Photos { get; set; } = new();


    // public int GetAge(){
    //     return DateOfBirth.CalculateAge();
    // }
}
